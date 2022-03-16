import Modal from "@/UIElements/Modal";
import upcomingClassIcon from "@/images/Vector2.svg";
import UpcomingLiveCard from "@/tabs/Overview/components/UpcomingLive/UpcomingLiveCard/UpcomingLiveCard";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingClassesAction } from "./store/actions";
import { showUpcomingLiveClassesBottomSheetAction } from "../../store/actions";
import { useTranslation } from "react-i18next";

const UpcomingClassModal = ({ className }) => {
  const { t } = useTranslation();
  // LIMIT
  let limit = 20;
  // ROUTER
  const router = useRouter();
  // DISPATCH
  const dispatch = useDispatch();

  const fetchUpcomingClasses = (offset = 0) => {
    dispatch(
      getUpcomingClassesAction({
        courseId: router?.query?.courseId,
        limit: limit,
        offset: offset,
        facultyClasses: 0,
        currentList: upcomingClasses,
      })
    );
  };

  const fetchMore = () => {
    fetchUpcomingClasses(offset + limit);
  };

  const toggleModal = () => {
    dispatch(showUpcomingLiveClassesBottomSheetAction(false));
  };
  // SELECTORS
  const offset = useSelector(
    (state) => state?.upcomingClassesReducer?.upcomingClassOffset
  );
  const totalCount = useSelector(
    (state) => state?.upcomingClassesReducer?.upcomingClassTotalCount
  );
  const upcomingClasses = useSelector(
    (state) => state?.upcomingClassesReducer?.upcomingClassList
  );
  const loading = useSelector(
    (state) => state?.upcomingClassesReducer?.upcomingClassListLoading
  );
  const showModal = useSelector(
    (state) => state?.bottomSheetReducer?.showUpcomingLiveClassesBottomSheet
  );

  // INFINITESCROLL
  const observer = React.useRef();

  const lastRowRef = React.useCallback(
    (element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && offset + limit < totalCount) {
          fetchMore();
        }
      });
      if (element) observer.current.observe(element);
    },
    [offset < totalCount, fetchMore]
  );

  useEffect(() => {
    if (showModal) fetchUpcomingClasses();
  }, [showModal]);

  return (
    <Modal
      handleClose={toggleModal}
      header={
        <div className={className}>
          <Image src={upcomingClassIcon} alt="upcomingClassIcon" />
          {t(
            "components.bottomSheets.components.upcomingLiveClassBottomSheet.upcomingLiveClasses",
            "Upcoming Live Classes"
          )}
        </div>
      }
    >
      <div className="UpcomingLiveModal">
        {upcomingClasses?.map((item, i) => {
          return (
            <div
              key={i}
              className="UpcomingLiveModal__ListItem"
              {...(i === upcomingClasses?.length - 1 && fetchMore
                ? { ref: lastRowRef }
                : {})}
            >
              <UpcomingLiveCard
                upcomingClass={item}
                index={i}
                deeplink={item?.liveCard?.cta?.deeplink}
              />
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default UpcomingClassModal;
