import toast from "react-hot-toast";
import hitStoragePermissionRequiredAction from "./handleStoragePermissions";
import {
  hitContentDeeplinkNew,
  hitContentDeeplinkOld,
} from "./hitContentDeeplink";

const {
  CONTENT_TYPE,
  CONTENT_DEEPLINK_ACTIONS,
} = require("../store/constants");

// FUNCTION TO HIT START DOWNLOAD DEEPLINK ACTION
export const handleStartDownloadContent = (contentObj) => {
  console.log("A___________2", contentObj);
  hitStoragePermissionRequiredAction(handleDownloadContent, contentObj);
};

const handleDownloadContent = (contentObj) => {
  switch (contentObj?.contentType) {
    case CONTENT_TYPE.LIVE_CLASS:
    case CONTENT_TYPE.VIDEO: {
      console.log("A__________3", contentObj);
      hitContentDeeplinkNew(
        CONTENT_DEEPLINK_ACTIONS.ACTION_DOWNLOAD_VIDEO_OFFLINE,
        contentObj
      );
      break;
    }
    case CONTENT_TYPE.DOCUMENT: {
      hitContentDeeplinkNew(
        CONTENT_DEEPLINK_ACTIONS.ACTION_DOWNLOAD_FILE,
        contentObj,
        true,
        true,
        contentObj?.url,
        contentObj?.name
      );
      break;
    }
    default:
      return false;
  }
};

// FUNCTION TO HIT STOP DOWNLOAD DEEPLINK ACTION
export const handleStopDownloadContent = (contentObj) => {
  switch (contentObj?.contentType) {
    case CONTENT_TYPE.LIVE_CLASS:
    case CONTENT_TYPE.VIDEO: {
      hitContentDeeplinkNew(
        CONTENT_DEEPLINK_ACTIONS.ACTION_REMOVE_VIDEO_OFFLINE,
        contentObj
      );
      break;
    }
    default:
      return false;
  }
};

// FUNCTION TO HIT GET OFFLINE DOWNLOAD LIST DEEPLINK ACTION
export const hitGetOfflineDownloadedItemList = (courseId) => {
  // hitContentDeeplinkNew(CONTENT_DEEPLINK_ACTIONS.ACTION_GET_OFFLINE_DOWNLOAD_LIST,courseId)
  // alert(`deeplinkCourseId: ${courseId}`);
  try {
    window?.mobile?.performAction(
      `${CONTENT_DEEPLINK_ACTIONS.ACTION_GET_OFFLINE_DOWNLOAD_LIST}`,
      courseId
    );
    window?.webkit?.messageHandlers?.performAction?.postMessage(
      JSON.stringify({
        screen: CONTENT_DEEPLINK_ACTIONS.ACTION_GET_OFFLINE_DOWNLOAD_LIST,
        paramOne: courseId,
      })
    );
  } catch (error) {
    toast.error("Couldn't fetch offline download list...");
  }
};
