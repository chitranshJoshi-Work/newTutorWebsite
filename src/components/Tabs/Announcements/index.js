import React, { useState, useEffect, useRef, useCallback } from "react";
import Input from "../../UIElements/Input";
import { getAwsAssets } from "@/utils/index";
import styles from "./styles/Announcements.module.scss";
import { getAnnouncementsAction } from "./store/actions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AnnouncedCard from "./components/AnnouncedCard";
import NoContentScreen from "./components/NoContentScreen";
import Shimmer from "src/AnnouncementShimmer/AnnouncementShimmer.js";
import { CONTENT_LIMIT } from "./store/constants";
import { getCourseDetailsAction } from "src/components/Tabs/Overview/store/actions.js";
const Announcements = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const inputChangedHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const [announcedList, setAnnouncedList] = useState([]);
  // INTERSECTION OBSERVER TO LOAD MORE DATA ON CONTENT SCROLL REACHING THE END
  const observer = useRef();
  const overViewState = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  const state = useSelector((state) => state?.announcementsReducer);
  const { announcementsListLoader, hasMoreLists, offset } = state;
  console.log(offset, "offset is");
  const lastRowRef = useCallback(
    (element) => {
      // console.log(announcementsListLoader, observer,hasMoreLists,'lastRowRef');
      if (announcementsListLoader) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log(observer, entries, "in if 2", hasMoreLists);
        if (entries[0].isIntersecting && hasMoreLists) {
          console.log("in if", entries[0].isIntersecting, hasMoreLists);
          handleLoadMoreContent && handleLoadMoreContent();
        }
      });
      if (element) observer.current.observe(element);
    },
    [announcementsListLoader, hasMoreLists, handleLoadMoreContent, offset]
  );

  useEffect(() => {
    dispatch(
      getAnnouncementsAction({
        courseId: router?.query?.courseId,
        search: searchValue,
        offset: 0,
        hasMore: hasMoreLists,
        showLoader: true,
      })
    );
  }, [searchValue]);

  const handleLoadMoreContent = useCallback(() => {
    console.log("offs", offset, "inside handlemorecontent");
    dispatch(
      getAnnouncementsAction({
        courseId: router?.query?.courseId,
        search: searchValue,
        offset: offset,
        isMoreContentToAppend: true,
        showLoader: true,
      })
    );
  }, [offset]);

  useEffect(() => {
    if (state) {
      const groups = state?.announcementsList.reduce((groups, game) => {
        const date = game.createdAt.split("T")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(game);
        return groups;
      }, {});

      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          games: groups[date],
        };
      });
      setAnnouncedList([...groupArrays]);
    }
  }, [state]);
  console.log(announcedList, "list");
  // console.log(announcementsListLoader, observer, hasMoreLists, "lastRowRef");
  return (
    <>
      <>
        <div className={styles.Announcements__InputBox}>
          <Input
            icon={getAwsAssets("searchIcon.svg", "content")}
            type="name"
            placeholder="Search Announcements"
            value={searchValue}
            onChange={inputChangedHandler}
          />
        </div>
        <div className={styles.AnnouncementsContainer}>
          {state?.announcementsList.length > 0 ? (
            <div className={styles.Announcements}>
              {announcedList?.map((announcement, i) => {
                return (
                  <AnnouncedCard
                    data={announcement}
                    key={`${i}uyy`}
                    {...(i === announcedList?.length - 1
                      ? { ref: lastRowRef }
                      : {})}
                  />
                );
              })}
            </div>
          ) : state?.announcementsListLoader ? null : (
            <NoContentScreen />
          )}
        </div>
      </>
      {state?.announcementsListLoader ? <Shimmer /> : null}
    </>
  );
};

export default Announcements;
