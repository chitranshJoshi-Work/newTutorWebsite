import Image from "next/image";
import React from "react";

import ProfileIcon from "../../../Content/icons/ProfileIcon.svg";
import ClockIcon from "../../../Content/icons/ClockIcon.svg";
import { t } from "i18next";

function LiveClassRecordingCases({ content }) {
  return (
    <div style={{ marginTop: "5px" }}>
      <div className="CourseRecordings__Item__Content__Details">
        <Image src={ProfileIcon} alt="lockIcon" height={16} width={16} />
        <p>
          <span>
            {t(
              "components.tabs.content.components.contentList.liveClassRecordingCases.facultyText",
              "Faculty"
            )}
          </span>{" "}
          : {content?.tutorName}
        </p>
      </div>
      <div className="CourseRecordings__Item__Content__Details">
        <Image src={ClockIcon} alt="lockIcon" height={16} width={16} />
        <p>
          <span> {content?.emblem3?.text}</span>
        </p>
      </div>
    </div>
  );
}

export default LiveClassRecordingCases;
