import React, { useEffect } from "react";
import isContentDownloadable from "../../helpers/isContentDownloadable";
import styles from "../../styles/ContentList.module.scss";
import Button from "@/UIElements/Button";
import { CONTENT_DOWNLOAD_STATUS, CONTENT_TYPE } from "../../store/constants";
import { getAwsAssets } from "@/utils/index";
import Image from "next/image";
import ListItemThumbnail from "./ListItemThumbnail";
import ListItemDetails from "./ListItemDetails";
import { useRouter } from "next/router";
import isVideoExhausted from "../../helpers/isVideoExhausted";
import {
  showContentLockedBottomSheetAction,
  showCourseLockedBottomSheetAction,
  showTestIsLockedBottomSheetAction,
  showTestIsTemporarilyLockedBottomSheetAction,
  showTestIsTemporarilyLockedTimingBottomSheetAction,
  showViewsExhaustedBottomSheetAction,
} from "@/root/src/components/BottomSheets/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import {
  handleStartDownloadContent,
  handleStopDownloadContent,
} from "../../helpers/handleDownloadContent";
import handleOpenContent from "../../helpers/handleOpenContent";
import ContentDownloader from "./ContentDownloader";
import { funnelTrackAction } from "src/components/Tabs/Overview/store/actions.js";
import { trackIDMap } from "../../../Overview/store/constants";
const ListItem = (
  { content, getOfflineDownloadedItemProgress, getOfflineDownloadedItemState },
  ref
) => {
  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // METHOD TO REDIRECT FOLDER ROUTE
  const changeFolderRoute = (folderId) => {
    router.push(`/${router.query.courseId}/folder/${folderId}`);
  };

  // FETCHING STATES FROM REDUCER
  const isCourseLocked = useSelector(
    (state) =>
      state?.overviewReducer?.overViewDetails?.course?.installments
        ?.installmentAlertState
  );
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  // HANDLING CLICK ON ITEM
  const handleItemClicked = (content) => {
    dispatch(
      funnelTrackAction({
        type: trackIDMap.contentView,
        isPurchased:
          state?.installments?.paidInstallmentSummary?.isPaymentComplete ===
            1 || state?.metaData?.isPurchased === 1,
        courseId: router?.query?.courseId,
        //  folderId: this.props.getFolderId() || 0,
        contentId: content.id,
        contentType: content.contentType,
      })
    );
    if (content?.isLocked && isCourseLocked) {
      dispatch(showCourseLockedBottomSheetAction(true));
      return;
    }
    const { id, contentType } = content;
    switch (contentType) {
      case CONTENT_TYPE.FOLDER: {
        changeFolderRoute(id);
        break;
      }
      case CONTENT_TYPE.LIVE_CLASS:
      case CONTENT_TYPE.VIDEO: {
        // SHOWING CONTENT IS LOCKED BOTTOM SHEET IF LOCKED
        if (content?.isLocked) {
          dispatch(showContentLockedBottomSheetAction(true));
        }
        // IF VIDEO LIMIT IS EXHAUSTED OPENING EXHAUSTED BOTTOMSHEET
        else if (isVideoExhausted(content)) {
          dispatch(showViewsExhaustedBottomSheetAction(true));
        } else {
          handleViewContentItem(content);
        }
        break;
      }
      case CONTENT_TYPE.DOCUMENT: {
        // SHOWING CONTENT IS LOCKED BOTTOM SHEET IF LOCKED
        if (content?.isLocked) {
          dispatch(showContentLockedBottomSheetAction(true));
        } else handleViewContentItem(content);
        break;
      }
      case CONTENT_TYPE.TEST: {
        // SHOWING TEST IS TEMPORARILY LOCKED BOTTOM SHEET IF SCHEDULED AND HAS START AND END DATE
        if (
          content?.isLocked &&
          content?.isScheduled &&
          content?.scheduledFromDateText &&
          content?.scheduledToDateText
        ) {
          dispatch(
            showTestIsTemporarilyLockedTimingBottomSheetAction(true, {
              startDate: content?.scheduledFromDateText,
              endDate: content?.scheduledToDateText,
            })
          );
        }
        // SHOWING TEST IS TEMPORARILY LOCKED BOTTOM SHEET IF SCHEDULED BUT NOT HAVE START AND END DATE
        else if (content?.isLocked && content?.isScheduled) {
          dispatch(showTestIsTemporarilyLockedBottomSheetAction(true));
        }
        // SHOWING TEST IS LOCKED BOTTOM SHEET IF LOCKED
        else if (content?.isLocked) {
          dispatch(showTestIsLockedBottomSheetAction(true));
        }
        // OPENING THE TEST STATS PAGE IF ALREADY ATTEMPTED
        else if (content?.scoredMarks || content?.scoredMarks === 0) {
          router.push(
            `/${router?.query?.courseId}/teststats/${content?.testId}/${content?.id}`
          );
        } else if (!content?.numberOfAttemptsRemaining) {
          dispatch(showViewsExhaustedBottomSheetAction(true));
        }
        // ELSE ATTEMPTING TEST
        else {
          handleViewContentItem(content);
        }
        break;
      }
    }
    console.log(content);
  };

  // // FUNCTION TO CHECK IF DOWNLOAD ICON HAS TO BE SHOWN
  // const showDownloadIcon = (content) => {
  //   if (isNaN(getOfflineDownloadedItemState(content?.url))) return true;
  //   switch (getOfflineDownloadedItemState(content?.url)) {
  //     case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_PAUSE:
  //     case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_FAILED:
  //     case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_REMOVE:
  //     case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_CANCEL:
  //     case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_UNKNOWN: {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // FUNCTION TO VIEW CONTENT ITEM
  const handleViewContentItem = (content) => {
    handleOpenContent({ ...content, courseId: +router?.query?.courseId });
  };

  // FUNCTION TO ATTEMPT / REATTEMPT TEST
  const handleAttemptTest = (e, content) => {
    e.stopPropagation();
    handleViewContentItem(content);
  };

  return (
    <div
      className={styles.contentList__item}
      ref={ref}
      onClick={() => handleItemClicked(content)}
    >
      <ListItemThumbnail content={content} />
      <div className={styles.contentList__item__content}>
        <ListItemDetails
          content={content}
          className={styles.contentList__item__content__text}
        />
        <div className={styles.contentList__item__content__button}>
          {content?.isLocked || isVideoExhausted(content) ? (
            <Image
              src={getAwsAssets("lockIcon.svg", "content")}
              alt="lockIcon"
              height={24}
              width={24}
            />
          ) : null}
          {isContentDownloadable(content) && !isVideoExhausted(content) && (
            <ContentDownloader
              content={content}
              getOfflineDownloadedItemProgress={
                getOfflineDownloadedItemProgress
              }
              getOfflineDownloadedItemState={getOfflineDownloadedItemState}
            />
          )}
          {content?.contentType === CONTENT_TYPE.TEST &&
          !content?.isLocked &&
          content?.numberOfAttemptsRemaining ? (
            content?.scoredMarks || content?.scoredMarks === 0 ? (
              <React.Fragment>
                <Button
                  small
                  outline
                  onClick={(e) => handleAttemptTest(e, content)}
                >
                  {t(
                    "components.tabs.content.components.contentList.listItem.reattemptText",
                    "Reattempt"
                  )}
                </Button>
                <React.Fragment>
                  {content?.numberOfAttemptsRemaining ? (
                    <div
                      className={
                        styles.contentList__item__content__button__attempts
                      }
                    >
                      *
                      {t(
                        "components.tabs.content.components.contentList.listItem.attemptsLeftText",
                        "Attempts left"
                      )}
                      : {content?.numberOfAttemptsRemaining}
                    </div>
                  ) : null}
                  {content?.totalAttempts == -1 && (
                    <div
                      className={`${styles.contentList__item__content__button__attempts} ${styles["contentList__item__content__button__attempts--unlimited"]}`}
                    >
                      {t(
                        "components.tabs.content.components.contentList.listItem.attemptsLeftText",
                        "Attempts left"
                      )}
                      :{" "}
                      <span>
                        {t(
                          "components.tabs.content.components.contentList.listItem.unlimitedText",
                          "Unlimited"
                        )}
                      </span>
                    </div>
                  )}
                </React.Fragment>
              </React.Fragment>
            ) : (
              <Button small onClick={(e) => handleAttemptTest(e, content)}>
                {t(
                  "components.tabs.content.components.contentList.listItem.attemptText",
                  "Attempt"
                )}
              </Button>
            )
          ) : null}
          {content?.contentType === CONTENT_TYPE.FOLDER && (
            <Image
              src={getAwsAssets("leftAngleIcon.svg", "content")}
              alt="leftAngleIcon"
              width={5}
              height={10}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ListItemDefault = React.forwardRef(ListItem);

export default ListItemDefault;
