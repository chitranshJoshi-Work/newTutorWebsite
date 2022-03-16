import toast from "react-hot-toast";
import { CONTENT_DEEPLINK_ACTIONS } from "../store/constants";
import { hitContentDeeplinkNew } from "./hitContentDeeplink";

// HTTING DEEPLINK ON THE NATIVE APP TO CHECK STORAGE PERMISSION
export const hitCheckStoragePermissionDeeplink = () => {
  hitContentDeeplinkNew(
    CONTENT_DEEPLINK_ACTIONS.ACTION_CHECK_STORAGE_PERMISSION,
    null,
    false
  );
};

// HTTING DEEPLINK ON THE NATIVE APP TO REQUEST STORAGE PERMISSION
export const hitRequestStoragePermissionDeeplink = () => {
  hitContentDeeplinkNew(
    CONTENT_DEEPLINK_ACTIONS.ACTION_REQUEST_STORAGE_PERMISSION,
    null,
    false
  );
};

const hitStoragePermissionRequiredAction = (deeplinkCallback, contentObj) => {
  console.log("A___________2", contentObj);
  // IF DEVICE IS iOS HITTING THE DEEPLINK WITHOUT PERMISSION CHECK
  if (window?.webkit?.messageHandlers) {
    deeplinkCallback(contentObj);
  }
  // ELSE CHECKING IF USER HAS GIVEN STORAGE PERMISSION
  else {
    hitCheckStoragePermissionDeeplink();
    window.onPermissionUpdate = (dataObj) => {
      const parsedJSON = JSON.parse(dataObj);
      if (parsedJSON?.hasPermission) {
        // START DOWNLOADING IF USER HAS GIVEN STORAGE PERMISSION
        deeplinkCallback(contentObj);
      } else {
        // ASK FOR PERMISSION IF USER HAS NOT GIVEN STORAGE PERMISSION
        hitRequestStoragePermissionDeeplink();
      }
    };
    window.onRequestPermissionUpdate = (dataObj) => {
      const parsedJSON = JSON.parse(dataObj);
      if (parsedJSON?.hasPermission) {
        // START DOWNLOADING IF USER HAS GIVEN STORAGE PERMISSION
        deeplinkCallback(contentObj);
      } else {
        // SHOWING ERROR TOAST IF USER HAS NOT GIVEN STORAGE PERMISSION
        toast.error("Storage Permission required");
      }
    };
  }
};

export default hitStoragePermissionRequiredAction;
