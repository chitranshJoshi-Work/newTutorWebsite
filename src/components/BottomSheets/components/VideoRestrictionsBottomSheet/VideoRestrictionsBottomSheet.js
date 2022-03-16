import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../UIElements/Modal";
import * as actionCreator from "../../store/actions";

const VideoRestrictionsBottomSheet = () => {
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showVideoRestrictionsBottomSheet
  );

  const dispatch = useDispatch();

  const videoDisclaimer = {
    duration: {
      subHeading: "Restriction on video duration",
      text: [
        "Video duration is dependent on the no. of minutes of the video that you have consumed.",
        "A video watched at 2x/ 3x/ 4x speed will be considered of same duration as of 1x.",
      ],
    },
    heading: "Video Restrictions",
    views: {
      subHeading: "Restriction on number of views",
      text: [
        "A video that has restricted number of views (eg. 5) can only be viewed (5) limited number of times.",
        "1 view will be counted irrespective of whether the video is watched partially or completely.",
      ],
    },
  };

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showVideoRestrictionsBottomSheetAction(false));
      }}
      header={
        <div className="AboutCourse__TempModalComponentData__Head">
          {videoDisclaimer?.heading}
        </div>
      }
    >
      <div className="VideoRestrictions">
        <div className="VideoRestrictions__item">
          {videoDisclaimer?.views?.subHeading}
          <div className="VideoRestrictions__item__heading"></div>
          <ol className="VideoRestrictions__item__list">
            {videoDisclaimer?.views?.text.map((text, i) => {
              return <li key={`${i}videoRules`}>{text}</li>;
            })}
          </ol>
        </div>
        <div className="VideoRestrictions__item">
          {videoDisclaimer?.duration?.subHeading}
          <div className="VideoRestrictions__item__heading"></div>
          <ol className="VideoRestrictions__item__list">
            {videoDisclaimer?.duration?.text.map((text, i) => {
              return <li key={`video${i}Rules`}>{text}</li>;
            })}
          </ol>
        </div>
      </div>
    </Modal>
  );
};

export default VideoRestrictionsBottomSheet;
