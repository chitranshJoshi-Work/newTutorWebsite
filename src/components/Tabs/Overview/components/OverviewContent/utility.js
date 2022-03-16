export const CONTENT_TYPE = {
  FOLDER: 1,
  VIDEO: 2,
  DOCUMENT: 3,
  TEST: 4,
  // ONLY 4 CONTENT_TYPES ARE AT BACKEND, REST ARE FOR FRONTENT
  IMAGE: 5,
  ZIP: 6,
  SUBJECTIVE_TEST: 7,
};
import { getAwsAssets } from "@/utils/index";
import { DEEPLINK_ACTIONS } from "@/utils/constants";
const playMobileVideo = (content) => {
  console.log("A_________playMobileVideo inner");
  if (content.url) {
    // alert("Play Video Clicked");
    window?.mobile?.performAction(
      `${DEEPLINK_ACTIONS.ACTION_PLAY_VIDEO}`,
      JSON.stringify(content)
    );
  }
};

const openDocument = (content) => {
  let url = {
    screen: `SCREEN_CONTENT`,
    paramOne: content.url,
    paramTwo: content.name,
    paramThree: content.description,
  };

  if (content.format == "pdf") {
    // alert("Open PDF");
    // window?.mobile?.performAction(
    //   `${DEEPLINK_ACTIONS.ACTION_OPEN_PDF}`,
    //   JSON.stringify(content)
    // );

    // alert("Download PDF");

    window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));
    // alert("now downloading....");
    // window?.mobile?.performAction(
    //   `${DEEPLINK_ACTIONS.ACTION_DOWNLOAD_FILE}`,
    //   JSON.stringify(content)
    // );
  } else if (content.format == "zip") {
    // alert("Download Zip");
    window?.mobile?.performAction(
      `${DEEPLINK_ACTIONS.ACTION_DOWNLOAD_FILE}`,
      JSON.stringify(content)
    );
  } else {
    // alert("Open Image");

    window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));
    // window?.mobile?.performAction(
    //   `${DEEPLINK_ACTIONS.ACTION_OPEN_IMAGE}`,
    //   JSON.stringify(content)
    // );
  }
};

const openTest = (content) => {
  // alert("Open Test");
  window?.mobile?.performAction(
    `${DEEPLINK_ACTIONS.ACTION_TEST_ATTEMPT}`,
    JSON.stringify(content)
  );
};

// HANDLING CLICK ON ITEM
const handleItemClicked = (content) => {
  console.log("A_________handleItemClicked");
  const { id, contentType } = content;
  switch (contentType) {
    case CONTENT_TYPE.FOLDER: {
      changeFolderRoute(id);
      break;
    }
    case CONTENT_TYPE.VIDEO: {
      // if (userDetails.type === USER_TYPES.TUTOR && !isProcessed) openCourseLockedModal(CONSTANTS.PROCESSING_COURSE_CONTENT);
      // if (userDetails.type === USER_TYPES.TUTOR && !isWebVideoAllowed) openCourseLockedModal(CONSTANTS.MOBILE_ONLY_COURSE_CONTENT);
      // if (userDetails.type === USER_TYPES.TUTOR && isReselling) openCourseLockedModal(CONSTANTS.MOBILE_ONLY_COURSE_CONTENT);
      // if (isVideoExhausted()) openCourseLockedModal(CONSTANTS.EXHAUSTED_COUNT_COURSE_CONTENT);
      // else openVideoModal();
      console.log("A_________playMobileVideo outer");
      playMobileVideo(content);
      break;
    }
    case CONTENT_TYPE.DOCUMENT: {
      openDocument(content);
      break;
    }
    case CONTENT_TYPE.TEST: {
      openTest(content);
      break;
    }
  }
};

export default handleItemClicked;
