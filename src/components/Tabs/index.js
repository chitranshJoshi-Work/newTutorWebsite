import React, { useEffect } from "react";
import ContentHome from "./Content/components/ContentHome";
import LiveClasses from "./LiveClasses";
import OverView from "./Overview/components";
import ContentShimmmer from "./Overview/components/OverviewShimmer";
import Announcements from "./Announcements/";
import { getCourseDetailsAction } from "src/components/Tabs/Overview/store/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
function SwitchTabs({
  activeTab,
  overviewServerData,
  getCourseCouponListStudentData,
  getCourseCouponStudentOverviewData,
}) {
  const dispatch = useDispatch();

  const router = useRouter();
  const state = useSelector((state) => state?.overviewReducer);

  useEffect(() => {
    dispatch(
      getCourseDetailsAction({
        courseId: router?.query?.courseId,
        isLoading:
          overviewServerData && state?.overViewDetails?.course ? false : true,
      })
    );
  }, []);

  switch (activeTab) {
    case 1:
      return (
        <OverView
          overviewServerData={overviewServerData}
          getCourseCouponStudentOverviewData={
            getCourseCouponStudentOverviewData
          }
          getCourseCouponListStudentData={getCourseCouponListStudentData}
        />
      );
    case 2:
      return <ContentHome />;
    case 3:
      return (
        <LiveClasses
          liveClassServerData={
            overviewServerData?.course?.upcomingLiveClasses?.data
          }
        />
      );
    case 4:
      return <Announcements />;
    default:
      return <ContentShimmmer />;
  }
}

export default SwitchTabs;
