import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import LiveClassCard from "./LiveClassCard";
import TabSectionCard from "@/root/src/components/TabSectionCard";
import { showUpcomingLiveClassesBottomSheetAction } from "@/root/src/components/BottomSheets/store/actions";
import { useDispatch } from "react-redux";

function UpcomingLive({
  heading,
  headingColor,
  viewAllText,
  viewAllTextColor,
  subText,
  subTextColor,
  dotClasses,
  backgroundColor,
}) {
  // DISPATCH
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(showUpcomingLiveClassesBottomSheetAction(true));
  };
  // SELECTORS
  const list = useSelector(
    (state) =>
      state?.overviewReducer?.overViewDetails?.course?.upcomingLiveClasses?.data
  );

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: dotClasses || "UpcomingLive__Body__Dots slick-dots",
    touchThreshold: 10,
  };

  return (
    <div>
      {list?.length ? (
        <TabSectionCard
          mainHeading={heading}
          mainHeadingColor={headingColor}
          viewAllText={list?.length > 1 ? viewAllText : null}
          viewAllTextColor={viewAllTextColor}
          backgroundColor={backgroundColor}
          subText={subText}
          subTextColor={subTextColor}
          btnClickHandler={toggleModal}
          className="UpcomingLive"
        >
          <div className="UpcomingLive__Body blockSlide">
            <Slider {...settings}>
              {list?.slice(0, 5)?.map((item, i) => (
                <div key={i}>
                  <LiveClassCard
                    title={item?.title}
                    time={item?.liveCard?.emblem?.text}
                    scheduleTime={item?.scheduleTime}
                    index={i}
                    liveEmblem={item?.emblem1}
                    scheduleEmblem={item?.emblem2}
                    trialEmblem={item?.trialEmblem}
                    deeplink={item?.liveCard?.cta?.deeplink}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </TabSectionCard>
      ) : null}
    </div>
  );
}

export default UpcomingLive;
