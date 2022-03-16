import React, { useEffect, useState } from "react";
import Input from "../../UIElements/Input";
import { getAwsAssets } from "@/utils/index";

import styles from "./styles/LiveClasses.module.scss";
import UpcomingLive from "../Overview/components/UpcomingLive";

import CONSTANTS from "./store/constants";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "./store/actions";
import { useRouter } from "next/router";

import { getCourseDetailsAction } from "../Overview/store/actions";
import ContentList from "../Content/components/ContentList";
import { t } from "i18next";

const LiveClasses = ({ liveClassServerData }) => {
  // LIMIT
  const limit = 20;
  // ROUTER
  const router = useRouter();
  // DISPATCH
  const dispatch = useDispatch();

  const fetchLiveClassData = (
    actionType = CONSTANTS?.LIVECLASSES_VIDEOSDATA_GET,
    offset = 0
  ) => {
    dispatch(
      getApiData(actionType, {
        route: "course/live/list/videos",
        limit: limit,
        offset: offset,
        entityId: router?.query?.courseId,
        type: 2,
        currentList: liveClassList,
        searchParam: searchValue ? `&search=${searchValue}` : "",
      })
    );
  };

  const fetchMore = () => {
    fetchLiveClassData(CONSTANTS.LIVECLASSES_VIDEOSDATA_GET, offset + limit);
  };

  const fetchOverviewDetails = () => {
    dispatch(
      getCourseDetailsAction({
        courseId: router?.query?.courseId,
        isLoading: false,
      })
    );
  };
  // SELECTORS
  const offset = useSelector(
    (state) => state?.courseLiveClassReducer?.liveClassOffset
  );
  const totalCount = useSelector(
    (state) => state?.courseLiveClassReducer?.liveClassTotalCount
  );
  const liveClassList = useSelector((state) => {
    if (state?.courseLiveClassReducer?.liveClassList) {
      return state?.courseLiveClassReducer?.liveClassList;
    } else {
      return liveClassServerData;
    }
  });

  const loading = useSelector(
    (state) => state?.courseLiveClassReducer?.liveClassLoading
  );

  const courseId = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.metaData?.id
  );

  useEffect(() => {
    if (!courseId) {
      fetchOverviewDetails();
    }
  }, [courseId]);

  // STATE
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchLiveClassData();
  }, [searchValue]);

  const inputChangedHandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.LiveClasses}>
      <div className={styles.LiveClasses__Search}>
        <Input
          icon={getAwsAssets("searchIcon.svg", "content")}
          type="name"
          placeholder={t(
            "components.Tabs.LiveClasses.index.search",
            "Search Live Classes"
          )}
          value={searchValue}
          onChange={inputChangedHandler}
        />
      </div>

      <UpcomingLive
        heading={t(
          "components.Tabs.LiveClasses.index.heading",
          "All Live Classes"
        )}
        headingColor="#3C4852"
        viewAllText={t(
          "components.Tabs.LiveClasses.index.viewAll",
          "View Full Schedule"
        )}
        overViewHeadingBackgroundColor="fff"
        backgroundColor="#fff"
        subText={t(
          "components.Tabs.LiveClasses.index.subText",
          "Join live trial classes to learn more about the course"
        )}
        subTextColor="#7A8B94"
        dotClasses={`${styles.Dots} slick-dots`}
      />

      <div className={styles.LiveClasses__List}>
        <ContentList
          contentHeading={`${t(
            "components.Tabs.LiveClasses.index.contentHeading",
            "Class Recordings"
          )}  ${totalCount}`}
          contentList={liveClassList}
          contentLoading={loading}
          contentHasMore={offset + limit < totalCount}
          handleLoadMoreContent={fetchMore}
          contentListLength={totalCount}
        />
      </div>
    </div>
  );
};

export default LiveClasses;
