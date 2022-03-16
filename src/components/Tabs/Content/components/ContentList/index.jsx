import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/ContentList.module.scss";
import ContentShimmmer from "../ContentShimmer";
import ListItem from "./ListItem";
import NoContentScreen from "./NoContentScreen";
import { DEEPLINK_ACTIONS } from "@/utils/constants";
import toast from "react-hot-toast";
import { t } from "i18next";
import { CONTENT_DOWNLOAD_STATUS } from "../../store/constants";
import { useSelector } from "react-redux";
import { hitGetOfflineDownloadedItemList } from "../../helpers/handleDownloadContent";
import FeaturedVideo from "../ContentHome/FeaturedVideo";

const ContentList = ({
  contentHeading,
  featuredVideo,
  contentList,
  contentLoading,
  contentHasMore,
  handleLoadMoreContent,
  contentListLength,
}) => {
  // NEXTJS ROUTER
  const router = useRouter();

  // INTERSECTION OBSERVER TO LOAD MORE DATA ON CONTENT SCROLL REACHING THE END
  const observer = React.useRef();
  const lastRowRef = React.useCallback(
    (element) => {
      if (contentLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && contentHasMore) {
          handleLoadMoreContent && handleLoadMoreContent();
        }
      });
      if (element) observer.current.observe(element);
    },
    [contentLoading, contentHasMore, handleLoadMoreContent]
  );

  // FETCHING STATES FROM REDUCER
  const contentTabId = useSelector(
    (state) =>
      state?.tabBarReducer?.tabList?.find?.((tab) => tab?.enumKey === "content")
        ?.id
  );
  const liveClassTabId = useSelector(
    (state) =>
      state?.tabBarReducer?.tabList?.find?.(
        (tab) => tab?.enumKey === "liveClasses"
      )?.id
  );

  // OFFLINE DOWNLOADED ITEMS LIST FROM NATIVE APP STORED IN A MAP
  // URL => detailsObject(id, url, state, progress)
  const [offlineDownloadedListMap, setOfflineDownloadedListMap] =
    React.useState(new Map());

  // FUNCTION TO GET OFFLINE DOWNLOADED ITEM PROGRESS
  const getOfflineDownloadedItemProgress = (url) => {
    return offlineDownloadedListMap.get(url)?.progress;
  };

  // FUNCTION TO GET OFFLINE DOWNLOADED ITEM STATE
  const getOfflineDownloadedItemState = (url) => {
    return offlineDownloadedListMap.get(url)?.state;
  };

  // FUNCTION TO UPDATE OFFLINE DOWNLOADED ITEM LIST
  const updateOfflineDownloadedItemList = (itemMap) => {
    setOfflineDownloadedListMap(
      new Map([...offlineDownloadedListMap, ...itemMap])
    );
  };

  //
  const offlineDownloadedListMapRef = React.useRef(offlineDownloadedListMap);
  // FUNCTION TO UPDATE OFFLINE DOWNLOADED ITEM PROGRESS
  const updateOfflineDownloadedItemProgress = (itemURL, itemStatus) => {
    const updatedMap = new Map(offlineDownloadedListMapRef.current);
    const currItemStatus = updatedMap.get(itemURL);
    const updatedItemStatus = { ...currItemStatus, ...itemStatus };
    updatedMap.set(itemURL, updatedItemStatus);
    offlineDownloadedListMapRef.current = updatedMap;
    setOfflineDownloadedListMap(offlineDownloadedListMapRef.current);
  };

  // FETCHING LIST OF CURRENT OFFLINE DOWNLOADED MATERIAL ON CONTENT/FOLDER MOUNT
  React.useEffect(() => {
    // alert("useEffect________handleGetOfflineDownloadList");
    if (
      router?.query?.courseId &&
      (router?.query?.tabId == contentTabId ||
        router?.query?.tabId == liveClassTabId ||
        router?.query?.folderId)
    ) {
      // alert("handleGetOfflineDownloadList");
      handleGetOfflineDownloadList();
    }
  }, [
    router.query.tabId,
    contentTabId,
    liveClassTabId,
    router?.query?.folderId,
  ]);

  // FUNCION TO FETCH CURRENTLY OFFLINE DOWNLOADED CONTENT FROM APP
  const handleGetOfflineDownloadList = () => {
    // PERFORMING DEEPLINK ACTION TO GET OFFLINE DOWNLOAD
    hitGetOfflineDownloadedItemList(router?.query?.courseId);

    // ADDING FUNCTION TO WINDOW TO HANDLE OFFLINE LIST
    window.onOfflineDownloadListUpdate = (offlineDownloadedList) => {
      const parsedJSON = JSON.parse(offlineDownloadedList);
      const itemMap = new Map();
      parsedJSON?.offlineDownloadedItemList?.forEach((item) => {
        const itemStatus = {
          id: item?.id,
          state: CONTENT_DOWNLOAD_STATUS.DOWNLOAD_SUCCESS,
          progress: 100,
        };
        const currItemStatus = offlineDownloadedListMap.get(item?.url);
        const updatedItemStatus = { ...currItemStatus, ...itemStatus };
        itemMap.set(item?.url, updatedItemStatus);
      });
      updateOfflineDownloadedItemList(itemMap);
    };
  };

  React.useEffect(() => {
    // ADDING FUNCTION TO WINDOW TO CATCH OFFLINE DOWNLOADING ITEM PROGRESS
    window.onFileDownloadProgress = (dataObj) => {
      handleUpdateDownloadingItemProgress(dataObj);
    };
  });

  // FUNCTION TO UPDATE PROGRESS OF OFFLINE DOWNLOADING ITEMS
  const handleUpdateDownloadingItemProgress = (dataObj) => {
    // PARSING THE NATIVE PROVIDED JSON
    const parsedJSON = JSON.parse(dataObj);
    const itemStatus = parsedJSON?.progress;
    console.log("A_________", itemStatus);

    // HANDLING DOWNLOAD TOASTS
    switch (itemStatus?.state) {
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_START: {
        toast.success("DOWNLOAD_START");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_PAUSE: {
        toast.success("DOWNLOAD_PAUSE");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_RESUME: {
        toast.success("DOWNLOAD_RESUME");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_FAILED: {
        toast.error("DOWNLOAD_FAILED");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_SUCCESS: {
        toast.success("DOWNLOAD_SUCCESS");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_REMOVE: {
        toast.success("DOWNLOAD_REMOVE");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_CANCEL: {
        toast.success("DOWNLOAD_CANCEL");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_QUEUED: {
        toast.success("DOWNLOAD_QUEUED");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.FILE_ALREADY_DOWNLOADED: {
        toast.success("FILE_ALREADY_DOWNLOADED");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_UNKNOWN: {
        toast.success("DOWNLOAD_UNKNOWN");
        break;
      }
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_ALREADY_IN_PROGRESS: {
        toast.success("DOWNLOAD_ALREADY_IN_PROGRESS");
        break;
      }
    }
    // UPDATING MY DOWNLOAD ITEM LIST STATE
    updateOfflineDownloadedItemProgress(itemStatus?.url, itemStatus);
  };

  return (
    <React.Fragment>
      {featuredVideo?.name && (
        <FeaturedVideo
          videoItem={featuredVideo}
          getOfflineDownloadedItemProgress={getOfflineDownloadedItemProgress}
          getOfflineDownloadedItemState={getOfflineDownloadedItemState}
        />
      )}
      <div className={styles.contentList}>
        {!contentList?.length && !contentLoading && <NoContentScreen />}
        {contentHeading && contentList?.length ? (
          <h1>{contentHeading}</h1>
        ) : null}
        {contentList?.map?.((content, index) => (
          <ListItem
            key={content.id || index}
            content={content}
            getOfflineDownloadedItemProgress={getOfflineDownloadedItemProgress}
            getOfflineDownloadedItemState={getOfflineDownloadedItemState}
            {...(index === contentList?.length - 4 && handleLoadMoreContent
              ? { ref: lastRowRef }
              : {})}
          />
        ))}
        {(contentLoading || router.isFallback) && (
          <ContentShimmmer
            withHeader={
              router.isFallback || (!contentListLength && contentLoading)
            }
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default ContentList;
