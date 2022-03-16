import React, { useEffect } from "react";
import { connect } from "react-redux";
import withRouter from "react-router-dom/withRouter";
import { CourseModalType } from "../../../components/LiveVideo/constantsLiveVideo";
import withActiveCourse from "../components/HOC/withActiveCourse";
import { createLiveSessionAction } from "./actions";
import ENUMS from "./enums";
import goLiveUtil from "./utility";

function GoLiveButton(props) {
  const {
    activeCourseDetails,
    history,
    location,
    createLiveSession,
    user,
    goLiveCourseModalType,
    isEditingScheduledClass,
  } = props;

  const createSession = () => {
    createLiveSession({
      route: ENUMS?.OPEN_VIDU_NEW?.createRoute,
      onSuccess: (e) =>
        goLiveUtil(
          e,
          activeCourseDetails?.goLiveCard,
          props?.liveCard,
          location?.pathname,
          goLiveCourseModalType,
          isEditingScheduledClass,
          user?.mobile,
          redirect
        ),
      entityId: [52097],
      isSchedule: 0,
      isWeb: 0,
      scheduleTime: null,
      sendSms: 0,
      showVideoOnWeb: 0,
      title: "Sampling 91 - 24 Dec 21, 2:17 PM",
      type: 4,
    });
  };

  const redirect = (data) => {
    // history.push("/onlineclass", [data]);
  };

  const goLive = (res) => {
    let goLiveCard = activeCourseDetails && activeCourseDetails.goLiveCard;

    let liveCard = props && props.liveCard;

    let cta = {};
    let isAgora = 1;
    if (
      true
      // goLiveCourseModalType == CourseModalType.GoLive
    ) {
      cta = { ...goLiveCard.cta1 };
      isAgora = goLiveCard.cta1.isAgora;
    } else {
      cta = { ...goLiveCard.cta2 };
      isAgora = goLiveCard.cta2.isAgora;
    }

    if (
      true
      // !isEditingScheduledClass
    ) {
      liveCard = {
        cta,
        isAgora,
        ...goLiveCard,
      };
    }

    // if (liveCard && liveCard.isAgora == 0) {
    //     saveData({ ...res?.data?.session, mobile: user?.mobile });
    // } else {
    //     saveData({ ...res?.data, mobile: user?.mobile });
    // }

    // localStorage.setItem("routePath", location.pathname);
    // history.push("/onlineclass", [
    //     activeCourseDetails?.goLiveCard?.liveCard
    // ]);
  };

  return <div onClick={createSession}>GO LIVE</div>;
}

const mapStateToProps = (state) => {
  return {
    user: state.persistedData && state.persistedData.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLiveSession: (payload) => dispatch(createLiveSessionAction(payload)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withActiveCourse(GoLiveButton))
);
