import React from "react";
import Modal from "../../../UIElements/Modal";
import UpcomingLiveCard from "../../../Tabs/Overview/components/UpcomingLive/UpcomingLiveCard/UpcomingLiveCard";
import Image from "next/image";
import { getAwsAssets } from "@/root/src/utils";
import { useDispatch, useSelector } from "react-redux";

import * as actionCreator from "../../store/actions";

const UpcomingLiveClassesBottomSheet = () => {
  const demoList = [
    {
      id: 2997626,
      entityId: 150872,
      title: "Class Count 1",
      scheduleTime: 1644415768000,
      isSchedule: 1,
      sessionStartTime: null,
      userId: 289994,
      orgId: 170,
      isTrial: 1,
      metadata: {
        canEdit: 1,
        canDelete: 1,
        canStartNew: 1,
        isExistingSession: 1,
      },
      liveCard: {
        imageUrl:
          "https://res.cloudinary.com/classplus/image/upload/v1585035324/test-portal/wfk5kejb1kxehv1nsufx.png",
        cta: {
          text: "Take Class",
          deeplink: {
            screen: "AGORA_SCHEDULED",
            paramOne: "1644415768",
            paramTwo: "2997626",
            paramThree:
              "Live class will start on Feb 9, 2022 at 07:39 PM. Check later",
            paramFour: "0",
            paramFive: "1",
          },
          isExistingSession: 0,
        },
        text: "Class Count 1",
        text1: "Class Count 1",
        text2: "by Gunjan Gupta ",
        emblem: {
          iconUrl:
            "https://res.cloudinary.com/classplus/image/upload/v1586271464/test-portal/gcoatzn3kbvlwvlofs0y.png",
          text: "Feb 9, 2022 07:39 PM",
          startDateEpoch: 1644415768000,
          color: "",
          scheduleTime: 1644415768,
        },
        emblem2: {
          iconUrl: "",
          text: "SCHEDULED",
          bgColor: "#FFEAED",
          color: "#FF4058",
        },
        isLiveClassEligible: 1,
        eligibilityText: "",
        showRechargeButton: 1,
        canEdit: 1,
        canStartnew: 1,
        canDelete: 1,
        liveSessionId: 2997626,
        scheduleTime: 1644415768000,
        isAgora: 1,
      },
      emblem1: {
        text: "LIVE NOW",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_live_now.png",
        bgColor: "#FF4058",
        color: "#FFFFFF",
      },
      emblem2: {
        text: "SCHEDULED",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_scheduled.png",
        bgColor: "#EDF2F6",
        color: "#333333",
      },
      emblem3: {
        text: "TRIAL",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_trial.png",
        bgColor: "#F3AA2B",
        color: "#FFFFFF",
      },
      courses: ["ENGLISH COMMUNICATION"],
      courseText: "in this course",
      isAnotherFaculty: "true",
      tutorName: "Gunjan Gupta ",
      socialLinks: {
        links: [
          {
            type: "WHATSAPP",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_whatsap.png",
            shareUrl:
              "https://api.whatsapp.com/send?text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "WhatsApp",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewWA",
            },
          },
          {
            type: "FACEBOOK",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_fb.png",
            shareUrl:
              "https://www.facebook.com/sharer/sharer.php?u=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Facebook",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewFB",
            },
          },
          {
            type: "TELEGRAM",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_telegram.png",
            shareUrl:
              "https://t.me/share/url?url=http://on-app.in/app/oc/52097/learn&text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Telegram",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewTG",
            },
          },
          {
            type: "LINKEDIN",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_linkedIn.png",
            shareUrl:
              "https://www.linkedin.com/shareArticle?mini=true&url=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "LinkedIn",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewLinkedin",
            },
          },
        ],
        copyUrl: "http://on-app.in/app/oc/52097/learn",
        moreAppsText:
          "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
        copyUrlDeeplink: {
          screen: "WEB_COURSE_OVERVIEW",
          paramOne: "WEB_COURSE_OVERVIEW",
          paramTwo: " ",
          paramThree: "",
          paramTracking: "WebCourseOverviewCopyLink",
        },
      },
    },
    {
      id: 2997628,
      entityId: 150873,
      title: "Class Count 2",
      scheduleTime: 1644588602000,
      isSchedule: 1,
      sessionStartTime: null,
      userId: 289994,
      orgId: 170,
      isTrial: 1,
      metadata: {
        canEdit: 1,
        canDelete: 1,
        canStartNew: 1,
        isExistingSession: 1,
      },
      liveCard: {
        imageUrl:
          "https://res.cloudinary.com/classplus/image/upload/v1585035324/test-portal/wfk5kejb1kxehv1nsufx.png",
        cta: {
          text: "Take Class",
          deeplink: {
            screen: "AGORA_SCHEDULED",
            paramOne: "1644588602",
            paramTwo: "2997628",
            paramThree:
              "Live class will start on Feb 11, 2022 at 07:40 PM. Check later",
            paramFour: "0",
            paramFive: "1",
          },
          isExistingSession: 0,
        },
        text: "Class Count 2",
        text1: "Class Count 2",
        text2: "by Gunjan Gupta ",
        emblem: {
          iconUrl:
            "https://res.cloudinary.com/classplus/image/upload/v1586271464/test-portal/gcoatzn3kbvlwvlofs0y.png",
          text: "Feb 11, 2022 07:40 PM",
          startDateEpoch: 1644588602000,
          color: "",
          scheduleTime: 1644588602,
        },
        emblem2: {
          iconUrl: "",
          text: "SCHEDULED",
          bgColor: "#FFEAED",
          color: "#FF4058",
        },
        isLiveClassEligible: 1,
        eligibilityText: "",
        showRechargeButton: 1,
        canEdit: 1,
        canStartnew: 1,
        canDelete: 1,
        liveSessionId: 2997628,
        scheduleTime: 1644588602000,
        isAgora: 1,
      },
      emblem1: {
        text: "LIVE NOW",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_live_now.png",
        bgColor: "#FF4058",
        color: "#FFFFFF",
      },
      emblem2: {
        text: "SCHEDULED",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_scheduled.png",
        bgColor: "#EDF2F6",
        color: "#333333",
      },
      emblem3: {
        text: "TRIAL",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_trial.png",
        bgColor: "#F3AA2B",
        color: "#FFFFFF",
      },
      courses: ["ENGLISH COMMUNICATION"],
      courseText: "in this course",
      isAnotherFaculty: "true",
      tutorName: "Gunjan Gupta ",
      socialLinks: {
        links: [
          {
            type: "WHATSAPP",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_whatsap.png",
            shareUrl:
              "https://api.whatsapp.com/send?text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "WhatsApp",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewWA",
            },
          },
          {
            type: "FACEBOOK",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_fb.png",
            shareUrl:
              "https://www.facebook.com/sharer/sharer.php?u=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Facebook",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewFB",
            },
          },
          {
            type: "TELEGRAM",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_telegram.png",
            shareUrl:
              "https://t.me/share/url?url=http://on-app.in/app/oc/52097/learn&text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Telegram",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewTG",
            },
          },
          {
            type: "LINKEDIN",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_linkedIn.png",
            shareUrl:
              "https://www.linkedin.com/shareArticle?mini=true&url=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "LinkedIn",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewLinkedin",
            },
          },
        ],
        copyUrl: "http://on-app.in/app/oc/52097/learn",
        moreAppsText:
          "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
        copyUrlDeeplink: {
          screen: "WEB_COURSE_OVERVIEW",
          paramOne: "WEB_COURSE_OVERVIEW",
          paramTwo: " ",
          paramThree: "",
          paramTracking: "WebCourseOverviewCopyLink",
        },
      },
    },
    {
      id: 2997631,
      entityId: 150875,
      title: "Class Count 3",
      scheduleTime: 1644675031000,
      isSchedule: 1,
      sessionStartTime: null,
      userId: 289994,
      orgId: 170,
      isTrial: 1,
      metadata: {
        canEdit: 1,
        canDelete: 1,
        canStartNew: 1,
        isExistingSession: 1,
      },
      liveCard: {
        imageUrl:
          "https://res.cloudinary.com/classplus/image/upload/v1585035324/test-portal/wfk5kejb1kxehv1nsufx.png",
        cta: {
          text: "Take Class",
          deeplink: {
            screen: "AGORA_SCHEDULED",
            paramOne: "1644675031",
            paramTwo: "2997631",
            paramThree:
              "Live class will start on Feb 12, 2022 at 07:40 PM. Check later",
            paramFour: "0",
            paramFive: "1",
          },
          isExistingSession: 0,
        },
        text: "Class Count 3",
        text1: "Class Count 3",
        text2: "by Gunjan Gupta ",
        emblem: {
          iconUrl:
            "https://res.cloudinary.com/classplus/image/upload/v1586271464/test-portal/gcoatzn3kbvlwvlofs0y.png",
          text: "Feb 12, 2022 07:40 PM",
          startDateEpoch: 1644675031000,
          color: "",
          scheduleTime: 1644675031,
        },
        emblem2: {
          iconUrl: "",
          text: "SCHEDULED",
          bgColor: "#FFEAED",
          color: "#FF4058",
        },
        isLiveClassEligible: 1,
        eligibilityText: "",
        showRechargeButton: 1,
        canEdit: 1,
        canStartnew: 1,
        canDelete: 1,
        liveSessionId: 2997631,
        scheduleTime: 1644675031000,
        isAgora: 1,
      },
      emblem1: {
        text: "LIVE NOW",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_live_now.png",
        bgColor: "#FF4058",
        color: "#FFFFFF",
      },
      emblem2: {
        text: "SCHEDULED",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_scheduled.png",
        bgColor: "#EDF2F6",
        color: "#333333",
      },
      emblem3: {
        text: "TRIAL",
        icon: "https://dtxqtzf8mpl38.cloudfront.net/cams/store/live/icon_trial.png",
        bgColor: "#F3AA2B",
        color: "#FFFFFF",
      },
      courses: ["ENGLISH COMMUNICATION"],
      courseText: "in this course",
      isAnotherFaculty: "true",
      tutorName: "Gunjan Gupta ",
      socialLinks: {
        links: [
          {
            type: "WHATSAPP",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_whatsap.png",
            shareUrl:
              "https://api.whatsapp.com/send?text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "WhatsApp",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewWA",
            },
          },
          {
            type: "FACEBOOK",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_fb.png",
            shareUrl:
              "https://www.facebook.com/sharer/sharer.php?u=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Facebook",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewFB",
            },
          },
          {
            type: "TELEGRAM",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_telegram.png",
            shareUrl:
              "https://t.me/share/url?url=http://on-app.in/app/oc/52097/learn&text=Hi%20Students,%20I%20am%20conducting%20a%20live%20class%20on%20ENGLISH%20COMMUNICATION.%20You%20can%20join%20and%20become%20a%20part%20of%20this%20live%20session.%20Hurry%20Up!%20Happy%20Learning%20with%20Learning%20Light.%20Click%20here%20to%20join%20-%20http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "Telegram",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewTG",
            },
          },
          {
            type: "LINKEDIN",
            iconUrl:
              "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_linkedIn.png",
            shareUrl:
              "https://www.linkedin.com/shareArticle?mini=true&url=http://on-app.in/app/oc/52097/learn",
            shareText:
              "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
            appName: "LinkedIn",
            deeplink: {
              screen: "WEB_COURSE_OVERVIEW",
              paramOne: "WEB_COURSE_OVERVIEW",
              paramTwo: " ",
              paramThree: "",
              paramTracking: "WebCourseOverviewLinkedin",
            },
          },
        ],
        copyUrl: "http://on-app.in/app/oc/52097/learn",
        moreAppsText:
          "Hi Students, I am conducting a live class on ENGLISH COMMUNICATION. You can join and become a part of this live session. Hurry Up! Happy Learning with Learning Light. Click here to join - http://on-app.in/app/oc/52097/learn",
        copyUrlDeeplink: {
          screen: "WEB_COURSE_OVERVIEW",
          paramOne: "WEB_COURSE_OVERVIEW",
          paramTwo: " ",
          paramThree: "",
          paramTracking: "WebCourseOverviewCopyLink",
        },
      },
    },
  ];

  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showUpcomingLiveClassesBottomSheet
  );
  // const [upcomingClasses, setUpcomingClasses] = useState([]);

  // const [offset, setOffset] = useState(0);
  // const [hasMore, setHasMore] = useState(true);
  // const observer = React.useRef();

  // let limit = 5;

  // const fetchData = () => {
  //   fetch(
  //     `https://api.classplusapp.com/v2/course/live/upcoming?courseId=52097&limit=${limit}&offset=${offset}&facultyClasses=0`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token":
  //           "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjg5OTk0LCJvcmdJZCI6MTcwLCJ0eXBlIjozLCJtb2JpbGUiOiI5MTk3MTExNTMwNzkiLCJuYW1lIjoiR3VuamFuIEd1cHRhICIsImVtYWlsIjoiZ3VuamFuQGNsYXNzcGx1c2FwcHAuY29tIiwiaXNJbnRlcm5hdGlvbmFsIjowLCJkZWZhdWx0TGFuZ3VhZ2UiOiJFTiIsImNvdW50cnlDb2RlIjoiSU4iLCJjb3VudHJ5SVNPIjoiOTEiLCJ0aW1lem9uZSI6IkdNVCs1OjMwIiwiaWF0IjoxNjQ0NDgwMjQyLCJleHAiOjE2NDUwODUwNDJ9.ULwjEt-qrI3OVDHoI8zrPY_-zinam-qcQUA0G8ZfjnLoB649TTGCzkNvQf4ZwwIR",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUpcomingClasses(data.data.list);
  //       setHasMore(offset < data.totalCount);
  //       setOffset(offset + limit);
  //     });
  // };

  // const lastRowRef = React.useCallback(
  //   (element) => {
  //     // if (contentLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && contentHasMore) {
  //         fetchData();
  //       }
  //     });
  //     if (element) observer.current.observe(element);
  //   },
  //   [hasMore, fetchData]
  // );

  // useEffect(() => {
  //   if (showModal) fetchData();
  // }, [showModal]);

  return (
    <Modal
      showModal={state}
      handleClose={() =>
        dispatch(actionCreator.showUpcomingLiveClassesBottomSheetAction(false))
      }
      header={
        <div className="UpcomingLive__ModalHeader">
          <Image
            src={getAwsAssets("upcomingClassIcon.svg", "bottomSheets")}
            alt="upcomingClassIcon"
            width="28px"
            height="28px"
          />
          Upcoming Live Classes
        </div>
      }
    >
      {demoList?.map((item, index) => {
        console.log("lksadjfs", item);
        return (
          <UpcomingLiveCard
            upcomingClass={item}
            key={index}
            index={index}
            totalUpcomingClassesCount={demoList.length}
          />
        );
      })}
    </Modal>
  );
};

export default UpcomingLiveClassesBottomSheet;
