/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import InfoIcon from "@/TabIcons/InfoIcon";

import { showVideoRestrictionsBottomSheetAction } from "src/components/BottomSheets/store/actions.js";
import { useDispatch } from "react-redux";
const CourseDetails = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const renderCourseContentsDetails = () => {
    return (
      <>
        {data?.resources?.videos != 0
          ? data?.resources?.videos + " Video Lecture(s)"
          : null}
        {data?.resources?.tests != 0
          ? ", " + data?.resources?.tests + " Test(s)"
          : null}
        {data?.resources?.files != 0
          ? ", " + data?.resources?.files + " File(s)"
          : null}{" "}
      </>
    );
  };

  return (
    <div>
      <div className="CourseDetails__Validity">
        <div className="CourseDetails__Validity__Left">
          <Image
            src={
              "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/ValidityIcon.svg"
            }
            alt="s"
            height={24}
            width={24}
          />
        </div>
        <div className="CourseDetails__Validity__Right">
          <div className="CourseDetails__Validity__Right__Heading">
            {data?.durationText?.heading}
          </div>
          <div className="CourseDetails__Validity__Right__Description">
            {data?.durationText?.subHeading}
          </div>
        </div>
      </div>
      <div
        className="CourseDetails__Material"
        onClick={() => {
          router.push(`/${router?.query?.courseId}/2`);
        }}
      >
        <div className="CourseDetails__Material__Left">
          <Image
            src={
              "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/PlayContent.svg"
            }
            alt="dsf"
            height={24}
            width={24}
          />
        </div>
        <div className="CourseDetails__Material__Middle">
          <div className="CourseDetails__Material__Middle__Heading">
            {data?.resourseDataText?.heading}
          </div>
          <div className="CourseDetails__Material__Middle__Description">
            {data?.resourseDataText?.subHeading}
          </div>
          {data?.videoDisclaimer?.heading ? (
            <div className="CourseDetails__Material__Middle__VideoRestrictions">
              {/* <Image
                src={
                  "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/Info.svg"
                }
                alt="dsf"
                height={15}
                width={15}
              /> */}
              <InfoIcon />{" "}
              <span
                onClick={(e) => {
                  dispatch(showVideoRestrictionsBottomSheetAction(true));
                  e.stopPropagation();
                }}
              >
                Video Restrictions
              </span>
            </div>
          ) : null}
        </div>
        <div
          className="CourseDetails__Material__Right"
          onClick={() => {
            router.push(`/${router?.query?.courseId}/2`);
          }}
        >
          <Image
            src={
              "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/RightNav.svg"
            }
            alt="c"
            height={10}
            width={10}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetails);
