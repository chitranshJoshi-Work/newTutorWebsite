import toast from "react-hot-toast";
import { CONTENT_TYPE, CONTENT_DEEPLINK_ACTIONS } from "../store/constants";
import { handleStartDownloadContent } from "./handleDownloadContent";
import hitStoragePermissionRequiredAction from "./handleStoragePermissions";
import {
  hitContentDeeplinkNew,
  hitContentDeeplinkOld,
} from "./hitContentDeeplink";

const handleOpenContent = (contentObj) => {
  // alert(contentObj.contentType);
  switch (contentObj?.contentType) {
    case CONTENT_TYPE.LIVE_CLASS:
    case CONTENT_TYPE.VIDEO: {
      hitContentDeeplinkNew(
        CONTENT_DEEPLINK_ACTIONS.ACTION_PLAY_VIDEO,
        contentObj
      );
      break;
    }
    case CONTENT_TYPE.DOCUMENT: {
      switch (contentObj?.format) {
        case "jpg":
        case "png":
        case "jpeg":
        case "pdf":
          hitContentDeeplinkOld(CONTENT_DEEPLINK_ACTIONS.SCREEN_CONTENT, {
            paramOne: contentObj.url,
            paramTwo: contentObj.name,
            paramThree: contentObj.description,
          });
          break;
        case "zip":
          handleStartDownloadContent(contentObj);
          break;
      }
      break;
    }
    case CONTENT_TYPE.TEST: {
      hitStoragePermissionRequiredAction(attemptTestDeeplinkAction, contentObj);
    }
    default:
      return false;
  }
};

const attemptTestDeeplinkAction = (contentObj) => {
  // console.log("A________1", contentObj);
  if (contentObj?.scoredMarks || contentObj?.scoredMarks === 0) {
    hitContentDeeplinkNew(
      CONTENT_DEEPLINK_ACTIONS.ACTION_TEST_REATTEMPT,
      contentObj,
      true,
      true,
      contentObj.URL
    );
  } else {
    hitContentDeeplinkNew(
      CONTENT_DEEPLINK_ACTIONS.ACTION_TEST_ATTEMPT,
      contentObj,
      true,
      true,
      contentObj.URL
    );
  }
};

export default handleOpenContent;
