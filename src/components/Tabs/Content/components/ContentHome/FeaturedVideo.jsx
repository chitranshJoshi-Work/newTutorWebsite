import {
  showContentLockedBottomSheetAction,
  showCourseLockedBottomSheetAction,
} from "@/root/src/components/BottomSheets/store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { t } from "i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentThumbnail from "../../helpers/getContentThumbnail";
import handleOpenContent from "../../helpers/handleOpenContent";
import isContentDownloadable from "../../helpers/isContentDownloadable";
import isVideoExhausted from "../../helpers/isVideoExhausted";
import styles from "../../styles/FeaturedVideo.module.scss";
// import ContentDownloader from "../ContentList/ContentDownloader";
// import VideoContentCases from "../ContentList/VideoContentCases";
// import VideoProgressBar from "../ContentList/VideoProgressBar";

const ContentDownloader = dynamic(() =>
  import("../ContentList/ContentDownloader")
);
const VideoContentCases = dynamic(() =>
  import("../ContentList/VideoContentCases")
);
const VideoProgressBar = dynamic(() =>
  import("../ContentList/VideoProgressBar")
);

const FeaturedVideo = ({
  videoItem,
  expandedDesc,
  getOfflineDownloadedItemProgress,
  getOfflineDownloadedItemState,
}) => {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(
    expandedDesc || false
  );

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING STATES FROM REDUCER
  const isCourseLocked = useSelector(
    (state) =>
      state?.overviewReducer?.overViewDetails?.course?.installments
        ?.installmentAlertState
  );

  // FUNCTION TO EXPANF DESCRIPTION OF VIDEO CONTENT
  const handleReadMoreClicked = () => {
    setDescriptionExpanded(!descriptionExpanded);
  };

  // FUNCTION TO HANDLE VIDEO PLAY
  const handleVideoClicked = (content) => {
    if (content?.isLocked && isCourseLocked) {
      dispatch(showCourseLockedBottomSheetAction(true));
      return;
    }
    if (content?.isLocked) {
      dispatch(showContentLockedBottomSheetAction(true));
    }
    // IF VIDEO LIMIT IS EXHAUSTED OPENING EXHAUSTED BOTTOMSHEET
    else if (isVideoExhausted(content)) {
      dispatch(showViewsExhaustedBottomSheetAction(true));
    } else {
      handleOpenContent(videoItem);
    }
  };

  return (
    <div className={styles.featuredVideo}>
      <div
        className={`${styles.featuredVideo__thumbnail} ${
          (videoItem?.isLocked || isVideoExhausted(videoItem)) &&
          styles["featuredVideo__thumbnail--exhausted"]
        }`}
        style={{ background: `url(${getContentThumbnail(videoItem)})` }}
        onClick={() => handleVideoClicked(videoItem)}
      >
        <div className={styles.featuredVideo__thumbnail__playContainer}>
          {videoItem?.isLocked || isVideoExhausted(videoItem) ? (
            <Image
              src={getAwsAssets("lockIconWhite.svg", "content")}
              alt="playIcon"
              width={32}
              height={42}
            />
          ) : (
            <Image
              src={getAwsAssets("playIcon.svg", "content")}
              alt="playIcon"
              width={27}
              height={27}
            />
          )}
        </div>
      </div>
      <VideoProgressBar
        lastSeek={videoItem?.lastSeek}
        duration={videoItem?.duration}
        videoMaxDuration={videoItem?.videoMaxDuration}
        featuredVideo
      />
      <div className={styles.featuredVideo__info}>
        <div className={styles.featuredVideo__info__header}>
          <h5>{videoItem?.name}</h5>
          {isContentDownloadable(videoItem) &&
            getOfflineDownloadedItemProgress &&
            getOfflineDownloadedItemState && (
              <ContentDownloader
                content={videoItem}
                getOfflineDownloadedItemProgress={
                  getOfflineDownloadedItemProgress
                }
                getOfflineDownloadedItemState={getOfflineDownloadedItemState}
              />
            )}
        </div>
        <VideoContentCases content={videoItem} />
        {videoItem?.description && (
          <h6
            className={`${styles.featuredVideo__info__description} ${
              !descriptionExpanded &&
              styles[`featuredVideo__info__description--collapsed`]
            }`}
          >
            {videoItem?.description}
          </h6>
        )}
        {videoItem?.description &&
        videoItem?.description?.length > 95 &&
        !expandedDesc ? (
          <React.Fragment>
            {descriptionExpanded ? (
              <p onClick={handleReadMoreClicked}>
                {t(
                  "components.tabs.content.components.contentHome.featuredVideo.readLessText",
                  "Read Less"
                )}
              </p>
            ) : (
              <p onClick={handleReadMoreClicked}>
                {t(
                  "components.tabs.content.components.contentHome.featuredVideo.readMoreText",
                  "Read More"
                )}
              </p>
            )}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedVideo;
