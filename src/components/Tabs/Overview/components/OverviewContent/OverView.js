/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherTags from "./OtherTags";
import Image from "next/image";
import { CONTENT_TYPE } from "@/tabs/Content/store/constants";
import getContentThumbnail from "@/tabs/Content/helpers/getContentThumbnail";
import LikeButton from "../LikeButton/LikeButton";
import { useRouter } from "next/router";
import * as actions from "src/components/BottomSheets/store/actions.js";
import { getAwsAssets } from "@/root/src/utils";
import contentHasThumbnail from "src/components/Tabs/Content/helpers/contentHasThumbnail.js";
import handleOpenContent from "../../../Content/helpers/handleOpenContent";
import VideoProgressBar from "../../../Content/components/ContentList/VideoProgressBar";
import {
  installmentsAlertStateEnum,
  trackIDMap,
} from "src/components/Tabs/Overview/store/constants.js";
import {
  funnelTrackAction,
  funnelTrackHistoryObjectAction,
} from "src/components/Tabs/Overview/store/actions.js";
// eslint-disable-next-line react/display-name
const DescriptionImage = React.memo(
  ({ url, handleItemClickedDeeplinkExecute, isEmpty }) => {
    if (isEmpty) {
      return (
        <Image
          className=""
          src={
            url || getAwsAssets("FreeContentDefaultCourseImage.svg", "content")
          }
          alt="courseThumbnail"
          layout="fill"
          objectFit="fill"
          priority={true}
          loading="eager"
          width={300}
          height={300}
        />
      );
    }
    return (
      <Image
        className=""
        src={
          url || getAwsAssets("FreeContentDefaultCourseImage.svg", "content")
        }
        alt="courseThumbnail"
        layout="fixed"
        objectPosition={"50% 50%"}
        priority={true}
        loading="eager"
        objectFit="cover"
        width={200}
        height={160}
        onClick={() =>
          handleItemClickedDeeplinkExecute
            ? handleItemClickedDeeplinkExecute({
                contentType: 3,
                url: url,
                format: "jpg",
                name: state?.details?.name, //check async here
                description: "",
              })
            : null
        }
      />
    );
  },
  areMatchesEqual
);
const MemoizedOtherTags = React.memo(({ courseTagList }) => {
  return (
    <section className="OverView__OtherTags blockSlide">
      {courseTagList?.map((item, i) => (
        <OtherTags key={`sdf${i}`} data={item} />
      ))}
    </section>
  );
}, areMatchesEqual);
const OverView = ({ overviewServerData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isUnwantedFreeContentPresent = useRef(false);
  const [courseThumbnails, setCourseThumbnails] = useState([]);
  const state = useSelector((state) => {
    if (state?.overviewReducer?.overViewDetails?.course?.details?.name) {
      return state?.overviewReducer?.overViewDetails?.course;
    } else return overviewServerData?.course;
  });
  const funnelTrackObj = useSelector(
    (state) => state?.overviewReducer?.funnelTrackingHistoryObject
  );
  const bottomSheetData = useSelector((state) => state?.bottomSheetReducer);
  const renderCategories = () => {
    let names = state?.categories?.map((c, i) => c.name);
    return <p className="OverView__Categories__text">{names?.join(" • ")}</p>;
  };
  // console.log(state);
  let names = state?.categories?.map((c) => c.name);

  const setItemsForCourseThumbnails = () => {
    // console.log(state, "[[[[[[[[[[[[[[[");

    if (state?.freeContent) {
      // switch (format) {
      //   case value:
      //     CONTENT_TYPE.VIDEO;

      //     break;
      //   case CONTENT_TYPE.DOCUMENT:
      //     break;
      //   case CONTENT_TYPE.TEST:
      //     break;
      //   case CONTENT_TYPE.IMAGE:
      //     break;
      //   default:
      //     break;
      // }
      // let d = [];
      let lengthOfFreeContent = state?.freeContent?.length;
      // d = state?.freeContent?.slice(0, n);
      // console.log(d, "88888888888");
      console.log(state?.freeContent?.slice(0, 3), "check me");
      setCourseThumbnails([...state?.freeContent?.slice(0, 3)]);
      state?.freeContent.forEach((content) => {
        if (
          content?.contentType === CONTENT_TYPE.TEST ||
          content?.contentType === CONTENT_TYPE.SUBJECTIVE_TEST
        ) {
          isUnwantedFreeContentPresent.current = true;
        }
      });
    }
  };
  useEffect(() => {
    setItemsForCourseThumbnails();
  }, [state]);
  // console.log(courseThumbnails);
  courseThumbnails.map((c) => {
    // console.log(c, "==================");
    let a = getContentThumbnail(c);
    // console.log(a);
  });
  // const installmentsEnum = {
  //   0: "UNPAID",
  //   1: "PENDING",
  //   2: "DUE",
  //   3: "PAID",
  // };
  // const installmentsAlertStateEnum = {
  //   0: "NO_ALERT",
  //   1: "7_DAYS_LEFT_EXPIRE",
  //   2: "COURSE_LOCKED",
  //   3: "TIGHT_BUDGET",
  // };
  console.log(installmentsAlertStateEnum, "alertEnum");
  useEffect(() => {
    setTimeout(() => {
      console.log(state, "usef");
      if (
        state?.installments?.installmentAlert?.alertState ===
          installmentsAlertStateEnum.DAYS_LEFT_EXPIRE &&
        !bottomSheetData?.isShowDueDateBottomSheet
      ) {
        dispatch(actions.showDueDateBottomSheetAction(true));
      } else if (
        state?.installments?.installmentAlert?.alertState ===
        installmentsAlertStateEnum.COURSE_LOCKED
      ) {
        // dispatch(actions.showContentLockedBottomSheetAction(true));
      } else if (
        state?.installments?.installmentAlert?.alertState ===
        installmentsAlertStateEnum.TIGHT_BUDGET
      ) {
        // dispatch(actions.showRunningTightOnBudgetBottomSheetAction(true));
      }
    }, 0);
    if (!funnelTrackObj?.courseOverview) {
      dispatch(
        funnelTrackAction({
          type: trackIDMap.courseOverview,
          isPurchased:
            state?.installments?.paidInstallmentSummary?.isPaymentComplete ===
              1 || state?.metaData?.isPurchased === 1,
          courseId: router?.query?.courseId,
        })
      );
      dispatch(funnelTrackHistoryObjectAction({ courseOverview: true }));
    }
  }, []);
  const handleItemClickedDeeplinkExecute = (item) => {
    console.log(item, "this is item");
    handleOpenContent(item);
  };
  console.log(isUnwantedFreeContentPresent.current, "free", state);
  return (
    <div className="OverView">
      <div className="OverView__Heading">
        {console.log(
          state?.auxiliaryData?.imageUrl,
          "state?.auxiliaryData?.imageUrl"
        )}
        <div className="OverView__Heading__Left CourseName">
          {state?.details?.name}
        </div>
        <div className="OverView__Heading__Right">
          {/* <img src={state?.likes?.icon} alt="/" /> */}
          <LikeButton value={state?.likes?.value} />
        </div>
      </div>
      <section className="OverView__Categories">{renderCategories()}</section>
      <MemoizedOtherTags courseTagList={state?.courseTagList} />
      <section
        className={
          !state?.freeContent?.length > 0
            ? "OverView__Content__Images Empty"
            : "OverView__Content__Images blockSlide"
        }
      >
        <div
          className={
            !state?.freeContent?.length > 0
              ? "OverView__Content__Images__Empty"
              : "OverView__Content__Images__Wrapper"
          }
          // style={{
          //   backgroundImage: state?.auxiliaryData?.imageUrl
          //     ? `url(${state?.auxiliaryData?.imageUrl})`
          //     : `url(https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg)`,
          // }}
        >
          {!state?.freeContent?.length > 0 ? (
            <>
              {/* <Image
                className=""
                src={
                  state?.auxiliaryData?.imageUrl ||
                  getAwsAssets("FreeContentDefaultCourseImage.svg", "content")
                }
                alt="courseThumbnail"
                layout="fill"
                objectFit="fill"
                priority={true}
                loading="eager"
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL={
                  state?.auxiliaryData?.imageUrl ||
                  getAwsAssets("FreeContentDefaultCourseImage.svg", "content")
                }
              /> */}
              <DescriptionImage url={state?.auxiliaryData?.imageUrl} isEmpty />
            </>
          ) : (
            <DescriptionImage
              url={state?.auxiliaryData?.imageUrl}
              handleItemClickedDeeplinkExecute={
                handleItemClickedDeeplinkExecute
              }
            />
          )}
        </div>
        {/* <div className="OverView__Content__Images__Thumbnail courseImage">
          <Image
            className=""
            src={
              state?.auxiliaryData?.imageUrl ||
              `https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg`
            }
            alt="courseThumbnail"
            layout="fill"
            objectFit="contain"
            priority={true}
          loading="eager"
            placeholder="blur"
            blurDataURL={`https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg`}
          />
        </div> */}
        {/* <div className="OverView__Content__Images__Thumbnail">
          <Image
            className="OverView__Content__Images__Thumbnail courseImage"
            src={
              state?.auxiliaryData?.imageUrl ||
              `https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg`
            }
            alt="courseThumbnail"
            width={200}
            height={150}
            priority={true}
            eager={true}
            placeholder="blur"
            blurDataURL={
              state?.auxiliaryData?.imageUrl ||
              `https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg`
            }
          />
        </div> */}
        {console.log(state?.freeContent, "freeContent")}
        {state?.freeContent?.map((item, i) => (
          <div
            // className="OverView__Content__Images__Wrapper freeContent"
            key={`${i}34df_33)`}
          >
            {CONTENT_TYPE?.TEST === item?.contentType ? null : (
              <div
                className="OverView__Content__Images__Wrapper freeContent"
                key={`${i}34df_)`}
                style={
                  contentHasThumbnail(item)
                    ? { background: `url(${getContentThumbnail(item)})` }
                    : {}
                }
                onClick={() =>
                  handleItemClickedDeeplinkExecute({
                    ...(item.description = null),
                  })
                }
              >
                <div style={{ position: "relative", marginBottom: "10px" }}>
                  {!contentHasThumbnail(item) && (
                    <Image
                      src={
                        getContentThumbnail(item) ||
                        "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/FreeContentDefaultCourseImage.svg"
                      }
                      alt="desc"
                      width="48"
                      height="48"
                      // layout="fixed"
                      objectFit="contain"
                      // placeholder="blur"
                    />
                  )}
                </div>
                <div className="OverView__Content__Images__Wrapper freeContent__bottomText">
                  {item?.name}
                </div>

                {CONTENT_TYPE?.VIDEO === item?.contentType ? (
                  <div className="OverView__Content__freeContent__VideoPreview__play">
                    <div style={{ position: "relative" }}>
                      <Image
                        src={
                          "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/PlayWithWrapper.svg"
                        }
                        alt="a"
                        width="48px"
                        height="48px"
                        layout="fixed"
                        // objectFit="cover"
                      />
                    </div>
                  </div>
                ) : null}
                {CONTENT_TYPE?.VIDEO === item?.contentType && (
                  <div className="OverView__Content__Images__Wrapper__videoProgress">
                    <VideoProgressBar
                      lastSeek={item?.lastSeek}
                      duration={item?.duration}
                      videoMaxDuration={item?.videoMaxDuration}
                      featuredVideo
                    />
                  </div>
                )}
                <div className="OverView__Content__Images__Wrapper freeContent__bottomText">
                  {item?.name}
                </div>

                {CONTENT_TYPE?.VIDEO === item?.contentType ? (
                  <div className="OverView__Content__freeContent__VideoPreview__play">
                    <div style={{ position: "relative" }}>
                      <Image
                        src={
                          "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/PlayWithWrapper.svg"
                        }
                        alt="a"
                        width="48px"
                        height="48px"
                        layout="fixed"
                        // objectFit="cover"
                      />
                    </div>
                  </div>
                ) : null}
                {console.log(
                  CONTENT_TYPE?.VIDEO === item?.contentType &&
                    item?.duration !== undefined &&
                    item?.duration != "undefined",
                  "undefioned",
                  item?.duration
                )}
                {CONTENT_TYPE?.VIDEO === item?.contentType &&
                item?.duration !== undefined &&
                item?.duration != "undefined" ? (
                  <div className="OverView__Content__freeContent__VideoPreview__timer">
                    {item?.duration ? item?.duration : null}
                  </div>
                ) : null}
              </div>
            )}{" "}
          </div>
        ))}
        {state?.freeContent?.length >= 3 &&
        !isUnwantedFreeContentPresent.current ? (
          <div
            className="OverView__Content__showMore"
            onClick={() => router.push(`/${router.query.courseId}/freecontent`)}
          >
            <div className="OverView__Content__showMore__Arrow">
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "32px",
                }}
              >
                <Image
                  src={getAwsAssets("ShowMoreRightArrow.svg", "content")}
                  alt="desc"
                  layout={"intrinsic"}
                  height={"32px"}
                  width={"32px"}
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>
            <div className="OverView__Content__showMore__Text">View All</div>
            <div className="OverView__Content__showMore__Text__2">
              Free Content
            </div>
          </div>
        ) : null}
      </section>
      {state?.metaData?.isPurchased ||
      state?.installments?.purchasedViaInstallment === 1 ? null : (
        <div className="OverView__Content__Line" />
      )}
    </div>
  );
};
function areMatchesEqual(prevProps, nextProps) {
  console.log("waat", prevProps, nextProps);
  /**return (prevProps.match.MatchWinnerPrediction == nextProps.match.MatchWinnerPrediction && 
        prevProps.match.HomeGoalsPrediction == nextProps.match.HomeGoalsPrediction &&
        prevProps.match.AwayGoalsPrediction == nextProps.match.AwayGoalsPrediction);**/
  return false;
}
export default React.memo(OverView, areMatchesEqual);
