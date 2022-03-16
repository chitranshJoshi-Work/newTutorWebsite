import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

// import TabBar from "@/UIElements/TabBar";
// import SwitchTabs from "@/root/src/components/Tabs";
import { getCourseOverviewService } from "@/root/src/components/tabs/Overview/store/services";
import { executeQuery } from "@/root/src/graphApis/graph";

import { useDispatch, useSelector } from "react-redux";

import { getTabListAction } from "@/root/src/components/UIElements/TabBar/store/actions";
import { getTabListService } from "@/root/src/components/UIElements/TabBar/store/services";
import tranformTabList from "@/root/src/components/UIElements/TabBar/store/transformer";

import { store } from "@/root/store";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";
import {
  getCourseCouponListStudent,
  getCourseCouponStudentOverview,
} from "@/root/src/graphApis";
import { getAddressListAction } from "@/root/src/components/PhysicalAddress/store/actions";
import dynamic from "next/dynamic";
import TabShimmer from "@/root/src/components/UIElements/TabShimmer/TabShimmer";

const TabBar = dynamic(() => import("@/UIElements/TabBar"));
const SwitchTabs = dynamic(() => import("@/root/src/components/Tabs"));

const CourseTabHome = (props) => {
  // NEXTJS ROUTER
  const router = useRouter();
  // DISPATCH
  const dispatch = useDispatch();
  // LOCALSTATES
  const [activeTab, setActiveTab] = useState(1);
  // SELECTOR
  const tabList = useSelector((state) => {
    if (state?.tabBarReducer?.tabList?.length) {
      return state?.tabBarReducer?.tabList;
    } else {
      return props.tabListData;
    }
  });

  const courseName = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.details?.name
  );
  // FUNTIONS
  const changeTab = (value) => {
    if (activeTab === 1 && value < 0) {
      // router.push(`/${router?.query?.courseId}/${tabList?.length}`);
    } else if (activeTab === tabList?.length && value > 0) {
      // router.push(`/${router?.query?.courseId}/1`);
    } else {
      router.push(`/${router?.query?.courseId}/${activeTab + value}`);
    }
  };

  useEffect(() => {
    dispatch(
      getTabListAction({ courseId: router?.query?.courseId, skipLoader: true })
    );
    dispatch(getAddressListAction());
  }, [router?.query?.courseId]);

  // useEffect(() => {
  //   window.getList = (dataObj) => {
  //     let response = JSON.parse(JSON.stringify(dataObj || {}));
  //   };
  //   window.getList2 = (dataObj) => {
  //     let response = JSON.parse(dataObj || {});
  //   };
  // });

  useEffect(() => {
    setActiveTab(parseInt(router?.query?.tabId));
  }, [router.query.tabId]);

  const swipeActions = useSwipeable({
    onSwipedLeft: (e) => {
      let flag = true;
      const path =
        e?.event?.path || (e?.event.composedPath && e?.event.composedPath()); // COMPOSED PATH FOR iOS
      path?.forEach((ele) => {
        if (ele?.className?.includes("blockSlide")) flag = false;
      });
      if (flag) changeTab(1);
    },
    onSwipedRight: (e) => {
      let flag = true;
      const path =
        e?.event?.path || (e?.event.composedPath && e?.event.composedPath()); // COMPOSED PATH FOR iOS
      path?.forEach((ele) => {
        if (ele?.className?.includes("blockSlide")) flag = false;
      });
      if (flag) changeTab(-1);
    },
  });

  useEffect(() => {
    // try {
    //   window?.mobile?.performAction(
    //     `${DEEPLINK_ACTIONS.ACTION_GET_REFRESH_TOKEN}`,
    //     null
    //   );
    //   window?.webkit?.messageHandlers?.performAction?.postMessage(
    //     JSON.stringify({
    //       screen: `ACTION_GET_REFRESH_TOKEN`,
    //     })
    //   );
    // } catch (error) {
    //   alert("A_______1");
    //   console.log("tabId***** 91 yeh wala fata", error);
    // }

    return () => {
      dispatch(setPageHeadingAction(""));
    };
  }, []);

  // useEffect(() => {
  //   try {
  //     window.onRefreshAccessToken = (dataObj) => {
  //       alert(`onRefreshAccessToken`);
  //       alert(JSON.stringify(dataObj));
  //       console.log("A_________1", dataObj, typeof dataObj);
  //       // console.log("A_________2", JSON.parse(dataObj));
  //     };
  //   } catch (error) {
  //     alert("A_______2");
  //     console.log("tabId***** 107 yeh wala fata", error);
  //   }
  // });
  useEffect(() => {
    window.updateBuildInfo = (dataObj) => {
      JSON.parse(dataObj);
    };
  });

  useEffect(() => {
    if (courseName) {
      dispatch(setPageHeadingAction(courseName));
    }
  }, [courseName]);
  useEffect(() => {
    console.log(
      executeQuery({
        variables: {
          courseIds: ["1600"],
          isBundlingCourse: false,
        },
        query: getCourseCouponStudentOverview,
      }),
      "klop"
    );
  }, []);

  console.log(props, "[tabId]");
  return (
    <div className="SwipingPage">
      {tabList?.length ? (
        <TabBar
          list={tabList}
          active={activeTab}
          setTab={(e) => router.push(`/${router?.query?.courseId}/${e}`)}
        />
      ) : (
        <TabShimmer />
      )}

      <div {...swipeActions}>
        <SwitchTabs
          activeTab={activeTab}
          overviewServerData={props?.overviewData}
          getCourseCouponStudentOverviewData={
            props?.getCourseCouponStudentOverviewData
          }
          getCourseCouponListStudentData={props?.getCourseCouponListStudentData}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // REDIRECTING TO OVERVIEW TAB IF TAB ID IS GREATOR THAN 4
  if (context?.params?.tabId > 4 || isNaN(context?.params?.tabId)) {
    return {
      redirect: {
        permanent: true,
        destination: `/${context.params.courseId}/1`,
      },
    };
  }

  // SERVER SIDE RENDERING THE OVERVIEW AND TAB LIS IF TOKEN IS PRESENT IN URL
  if (context?.query?.token) {
    // FETCHING OVERVIEW AND TAB LIST DATA ON SERVER

    const [
      overviewData,
      tabListData,
      getCourseCouponListStudentData,
      getCourseCouponStudentOverviewData,
    ] = await Promise.all([
      getCourseOverviewService({
        courseId: context.params.courseId,
        token: context.query.token,
        region: context.query.region,
      }),
      getTabListService({
        courseId: context.params.courseId,
        token: context.query.token,
        region: context.query.region,
      }),
      executeQuery({
        variables: {
          courseId: context.params.courseId,
          token: context.query.token,
          region: context.query.region,
          courseId: "1690",
          limit: 20,
          offset: 0,
        },
        query: getCourseCouponListStudent,
      }),
      executeQuery({
        variables: {
          courseIds: [context.params.courseId],
          token: context.query.token,
          region: context.query.region,
          courseIds: ["1600"],
          isBundlingCourse: false,
        },
        query: getCourseCouponStudentOverview,
      }),
    ]);
    // PASSING DATA FETCHED ON SERVER VIA PROPS
    // console.log(getCourseCouponListStudent, q2, "[getCourseCouponListStudent,q2]");

    // return { props: { overviewData: overviewData?.data?.data } };
    return {
      props: {
        overviewData: overviewData?.data?.data,
        tabListData: tranformTabList(tabListData?.data?.data?.tabs),
        getCourseCouponListStudentData: getCourseCouponListStudentData?.data
          ?.data
          ? getCourseCouponListStudentData?.data?.data
          : {},
        getCourseCouponStudentOverviewData: getCourseCouponStudentOverviewData
          ?.data?.data
          ? getCourseCouponStudentOverviewData?.data?.data
          : {},
      },
    };
  }
  return { props: {} };
};
console.log(
  "PAGETITLE__HEADING",
  store?.getState()?.overviewReducer?.overViewDetails?.course?.details?.name
);
// LAYOUTPROPS
CourseTabHome.getLayoutProps = () => ({
  title:
    store?.getState()?.overviewReducer?.overViewDetails?.course?.details?.name,
});

export default CourseTabHome;
