import React, { useState } from "react";
import Description from "./Description";
import WhatElse from "./WhatElse";
import CourseDetails from "./CourseDetails";
import { useSelector } from "react-redux";
import Button from "@/UIElements/Button/index";
import RightArrowIcon from "../../../Content/icons/RightArrowIcon";
import Modal from "@/root/src/components/UIElements/Modal";
import BottomSheets from "@/root/src/components/BottomSheets";
import { useTranslation } from "react-i18next";

const AboutCourse = ({ overviewServerData }) => {
  const { t } = useTranslation();
  const state = useSelector((state) => {
    if (state?.overviewReducer?.overViewDetails?.course?.details?.name) {
      return state?.overviewReducer?.overViewDetails?.course;
    } else return overviewServerData?.course;
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <section className="AboutCourse">
      <div className="AboutCourse__Heading">
        {" "}
        {t(
          "components.tabs.overview.components.aboutCourse.aboutThisCourse.heading",
          "About This Course"
        )}
      </div>
      <div className="AboutCourse__Description">
        <Description
          desc={state?.auxiliaryData?.description}
          setShowModal={setShowModal}
        />
        {/* {state.details.name ? (
          <Button
            className="viewALLBtnMobile"
            onClick={() => {
              setShowModal(true);
            }}
            // outline
          >
            Read More
            <RightArrowIcon />
          </Button>
        ) : (
          ""
        )} */}
      </div>
      {state?.durationText ? <CourseDetails data={state} /> : null}
      {state?.whatsIncluded?.length > 0 ? (
        <WhatElse data={state?.whatsIncluded} />
      ) : null}
    </section>
  );
};

export default AboutCourse;
