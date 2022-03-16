import { showWhatAreYouWatchingBottomSheetAction } from "@/root/src/components/BottomSheets/store/actions";
import { getAwsAssets } from "@/utils/index";
import { t } from "i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getFeaturedVideo from "../../helpers/getFeaturedVideo";
import {
  getCourseContentAction,
  getCourseContentLoadMoreAction,
  setActiveFolderIdAction,
} from "../../store/actions";
import { CONTENT_DOWNLOAD_STATUS, CONTENT_LIMIT } from "../../store/constants";
import styles from "../../styles/ContentHome.module.scss";
// import ContentList from "../ContentList";
// import Input from "@/UIElements/Input";
import {
  funnelTrackAction,
  funnelTrackHistoryObjectAction,
} from "src/components/Tabs/Overview/store/actions.js";
import { trackIDMap } from "../../../Overview/store/constants";
const ContentList = dynamic(() => import("../ContentList"));
const Input = dynamic(() => import("@/UIElements/Input"));

const ContentHome = ({ folderId, folderRoute }) => {
  // STATE FOR SEARCH INPUT VALUE
  const prevSearchInputValue = React.useRef("");
  const [searchInputValue, setSearchInputValue] = React.useState("");

  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING STATES FROM REDUCER
  const contentList = useSelector(
    (state) => state?.courseContentReducer?.apiResGET_COURSE_CONTENT
  );
  const contentLoading = useSelector(
    (state) => state?.courseContentReducer?.loadingStateGET_COURSE_CONTENT
  );
  const contentHasMore = useSelector(
    (state) => state?.courseContentReducer?.hasMoreGET_COURSE_CONTENT
  );
  const contentListLastOffset = useSelector(
    (state) => state?.courseContentReducer?.lastOffsetGET_COURSE_CONTENT
  );
  const contentListLength = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.resourceCount
  );
  const currentFolderName = useSelector(
    (state) =>
      state?.courseContentReducer?.currentFolderGET_COURSE_CONTENT?.folderName
  );
  const contentTabId = useSelector(
    (state) =>
      state?.tabBarReducer?.tabList?.find?.((tab) => tab?.enumKey === "content")
        ?.id
  );
  const state = useSelector((state) => {
    state?.overviewReducer?.overViewDetails?.course;
  });
  const funnelTrackObj = useSelector(
    (state) => state?.overviewReducer?.funnelTrackingHistoryObject
  );
  // FETCHING CONTENT WHEN TAB ID IS EQUAL TO CONTENT ID
  React.useEffect(() => {
    if (router?.query?.tabId == contentTabId) {
      handleFetchContent(contentList?.length && !currentFolderName);
    }
  }, [router?.query?.tabId, contentTabId]);

  // FETCHING CONTENT WHEN FOLDER ID CHANGES
  React.useEffect(() => {
    folderId && handleFetchContent();
  }, [router?.query?.folderId]);

  // FETCHING CONTENT WHEN SEARCH VALUE CHANGES
  React.useEffect(() => {
    prevSearchInputValue.current !== searchInputValue && handleContentSearch();
  }, [searchInputValue]);
  React.useEffect(() => {
    if (!funnelTrackObj?.contentList) {
      console.log(funnelTrackObj);
      dispatch(
        funnelTrackAction({
          type: trackIDMap.contentList,
          isPurchased:
            state?.installments?.paidInstallmentSummary?.isPaymentComplete ===
              1 || state?.metaData?.isPurchased === 1,
          courseId: router?.query?.courseId,
        })
      );
      dispatch(funnelTrackHistoryObjectAction({ contentList: true }));
    }
  }, []);

  // DEBOUNCE TIMER REF
  const debounceTimer = React.useRef(null);
  // DISPATCHING ACTION TO SEARCH CONTENT
  const handleContentSearch = () => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => handleFetchContent(), 300);
  };

  // CATCHING EVENT REFRESH COURSE CONTENT ON TEST/VIDEO CLOSE ON NATIVE APP
  React.useEffect(() => {
    window.onPlayerClose = (dataObj) => {
      // console.log("A_________onPlayerClose", dataObj); // PARAM_SAMPLING_ENABLED
      const parsedJSON = JSON.parse(dataObj);
      if (parsedJSON?.PARAM_SAMPLING_ENABLED) {
        dispatch(showWhatAreYouWatchingBottomSheetAction(true));
      }
      refreshCourseContent();
    };
    window.onTestAttempted = (dataObj) => {
      // console.log("A_________onTestAttempted", dataObj);
      refreshCourseContent();
    };
  });

  // FUNCTION TO DISPATCH ACTION TO REFRESH COURSE CONTENT ON TEST/VIDEO CLOSE
  const refreshCourseContent = () => {
    dispatch(
      getCourseContentAction({
        courseId: router.query.courseId,
        limit: contentListLastOffset + CONTENT_LIMIT,
        folderId: router?.query?.folderId,
        skipLoader: true,
        search: searchInputValue,
      })
    );
  };

  // FUNCTION TO DISPATCH ACTION TO FETCH COURSE CONTENT
  const handleFetchContent = (skipLoader) => {
    dispatch(
      getCourseContentAction({
        courseId: router.query.courseId,
        limit: CONTENT_LIMIT,
        folderId: router?.query?.folderId,
        skipLoader: skipLoader,
        search: searchInputValue,
      })
    );
  };

  // HANDLE LOAD MORE CONTENT WHEN USER REACHES END OF LIST
  const handleLoadMoreContent = () => {
    dispatch(
      getCourseContentLoadMoreAction({
        courseId: router.query.courseId,
        offset: contentListLastOffset + CONTENT_LIMIT,
        folderId: router?.query?.folderId || 0,
        limit: CONTENT_LIMIT,
        search: searchInputValue,
      })
    );
  };

  // HANDLING ON CHANGE FOR SEARCH INPUT
  const handleInputChange = (e) => {
    prevSearchInputValue.current = searchInputValue;
    setSearchInputValue(e.target.value);
  };

  // GETTING FEATURED VIDEO FROM THE CONTENT LIST
  const featuredVideo = getFeaturedVideo(contentList);

  // GET CONTENT LIST HEADING BASED ON SOME CHECKS
  const getContentListHeading = () => {
    if (folderRoute) return null;
    if (!contentListLength) return null;
    else if (contentListLength > 1)
      return `${contentListLength} ${t(
        "components.tabs.content.components.contentHome.index.studyMaterialTextPlural",
        "Study Materials"
      )}`;
    return `${contentListLength} ${t(
      "components.tabs.content.components.contentHome.index.studyMaterialTextSingular",
      "Study Material"
    )}`;
  };

  return (
    <div className={styles.contentHome}>
      <div
        className={`${styles.contentHome__searchBar} ${
          folderRoute && styles["contentHome__searchBar--folderRoute"]
        }`}
      >
        <Input
          icon={getAwsAssets("searchIcon.svg", "content")}
          type="name"
          placeholder="Search content"
          value={searchInputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.contentHome__content}>
        <ContentList
          contentHeading={getContentListHeading()}
          featuredVideo={featuredVideo}
          contentList={contentList}
          contentListLength={folderRoute ? 0 : contentListLength}
          contentLoading={contentLoading}
          contentHasMore={contentHasMore}
          handleLoadMoreContent={handleLoadMoreContent}
        />
      </div>
    </div>
  );
};

export default ContentHome;
