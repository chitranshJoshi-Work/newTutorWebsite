import { CONTENT_TYPE } from "../store/constants";

const isContentDownloadable = ({ contentType, isDownloadable, format }) => {
  if (isDownloadable == 0) return false;
  switch (contentType) {
    case CONTENT_TYPE.FOLDER: {
      return false;
    }
    case CONTENT_TYPE.VIDEO: {
      return true;
    }
    case CONTENT_TYPE.DOCUMENT: {
      switch (format) {
        case "jpg":
        case "png":
        case "jpeg":
        case "zip":
          return false;
      }
      return true;
    }
    case CONTENT_TYPE.TEST: {
      return false;
    }
    case CONTENT_TYPE.LIVE_CLASS:
      return true;
    default:
      return false;
  }
};

export default isContentDownloadable;
