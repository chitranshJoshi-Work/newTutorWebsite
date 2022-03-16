import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { useRouter } from "next/router";

import { wrapper, makeStore } from "@/store/index";

import OverView from "@/tabs/Overview/components/OverviewContent/OverView";
import AboutCourse from "@/tabs/Overview/components/AboutCourse/AboutCourse";
import FreeContent from "@/tabs/Content/components/FreeContent/FreeContentOverview";
import ChatComponent from "@/tabs/Overview/components/ChatComponent/index.js";
import Coupons from "@/tabs/Overview/components/Coupons/index";
import {
  getTabListAction,
  getCourseDetailsAction,
  postLikeResetAction,
} from "@/tabs/Overview/store/actions";
import OverviewShimmmer from "@/tabs/Overview/components/OverviewShimmer";
import UpcomingLive from "./UpcomingLive";
import PricingSection from "@/tabs/Overview/components/PricingSection";
import RightArrow from "@/images/arrow-right.svg";
import { getCourseContentAction } from "../../Content/store/actions";
import { CONTENT_LIMIT } from "../../Content/store/constants";
import { executeQuery } from "@/src/graphApis/graph";
import { getCourseCouponStudentOverview } from "@/src/graphApis/index";
import FullScreenLoader from "../../../FullScreenLoader";
import OverviewAlertBox from "./OverviewAlertBox";
import { installmentsAlertStateEnum } from "src/components/Tabs/Overview/store/constants.js";
const OverViewPage = ({
  overviewServerData,
  getCourseCouponListStudentData,
  getCourseCouponStudentOverviewData,
}) => {
  const router = useRouter();

  const state = useSelector((state) => state?.overviewReducer);
  const applyCouponLoading = useSelector(
    (state) => state?.applyCouponDataLoading
  );
  const graphCouponLists = useSelector(
    (state) => state?.overviewReducer?.graphCourseCouponListData?.coupons
  );
  const contentListLength = useSelector(
    (state) => state?.courseContentReducer?.apiResGET_COURSE_CONTENT?.length
  );

  // let applyCouponLoading = true;
  useEffect(() => {
    if (router?.query?.courseId && router?.query?.tabId == 1) {
      dispatch(
        getCourseDetailsAction({
          courseId: router?.query?.courseId,
          isLoading: false,
        })
      );
      if (!contentListLength) {
        dispatch(
          getCourseContentAction({
            courseId: router.query.courseId,
            limit: CONTENT_LIMIT,
            folderId: 0,
            skipLoader: true,
          })
        );
      }
    }

    // else dispatch(getCourseDetails({ courseId: 5209, isLoading: true }));
  }, [router?.query?.tabId]);

  // useEffect(() => {
  //   console.log("ran useeffect---------", state);
  //   if (state?.postLikeCourseSuccess) {
  //     setTimeout(() => {
  //       dispatch(
  //         getCourseDetailsAction({
  //           courseId: router?.query?.courseId,
  //           isLoading: false,
  //         })
  //       );
  //       dispatch(postLikeResetAction());
  //     }, 0);
  //   }
  // }, [state?.postLikeCourseSuccess]);

  const dispatch = useDispatch();

  console.log(state, "============!!!!!!!!!!!!2222");
  return (
    <div className="OverviewWrapper">
      {router?.isFallback ||
      (state?.overViewDetailsLoading &&
        !overviewServerData?.course?.details?.name) ? (
        <OverviewShimmmer />
      ) : (
        <>
          {state?.overViewDetails?.course?.installments?.installmentAlert
            ?.alertState === installmentsAlertStateEnum.COURSE_LOCKED ||
          overviewServerData?.course?.installments?.installmentAlert
            ?.alertState === installmentsAlertStateEnum.COURSE_LOCKED ? (
            <OverviewAlertBox />
          ) : null}
          <OverView
            overviewServerData={overviewServerData}
            overViewClientData={state?.overViewDetails?.course}
          />
          {state?.overViewDetails?.course?.metaData?.isPurchased ||
          state?.overViewDetails?.course?.installments
            ?.purchasedViaInstallment === 1 ? null : graphCouponLists?.length >
            0 ? (
            <Coupons
              overviewServerData={overviewServerData}
              getCourseCouponStudentOverviewData={
                getCourseCouponStudentOverviewData
              }
              getCourseCouponListStudentData={getCourseCouponListStudentData}
            />
          ) : null}
          <AboutCourse overviewServerData={overviewServerData} />
          <FreeContent />
          <UpcomingLive
            heading="Live Classes"
            headingColor="#fff"
            viewAllText="View Full Schedule"
            viewAllTextColor="#fff"
            overViewHeadingBackgroundColor="#021927"
            backgroundColor="#021927"
            subText="Join live trial classes to learn more about the course"
            subTextColor="#fff"
            dotClasses="UpcomingLive__Body__Dots slick-dots"
          />
          <ChatComponent />
          <PricingSection
            getCourseCouponStudentOverviewData={
              getCourseCouponStudentOverviewData
            }
            getCourseCouponListStudentData={getCourseCouponListStudentData}
          />
          {applyCouponLoading ? <FullScreenLoader /> : null}
        </>
      )}
    </div>
  );
};

// export const getStaticProps = wrapper.getStaticProps(
//   (store) => async (context) => {
//     // store.dispatch(serverRenderClock(true));
//     // store.dispatch(getTabListAction());
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   }
// );

export default OverViewPage;
