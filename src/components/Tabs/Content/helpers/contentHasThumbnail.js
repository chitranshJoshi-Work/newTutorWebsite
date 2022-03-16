import { CONTENT_TYPE } from "../store/constants";

const contentHasThumbnail = ({ contentType, format, url, thumbnailUrl }) => {
  // console.log("CONTENT", thumbnailUrl);
  switch (contentType) {
    case CONTENT_TYPE.VIDEO:
      if (thumbnailUrl) return true;
      else return false; // video file
    case CONTENT_TYPE.DOCUMENT:
      switch (format) {
        case "jpg":
        case "png":
        case "jpeg":
          if (url) return true;
          else return false;
      }
    case CONTENT_TYPE.LIVE_CLASS:
      // console.log("CONTENT__CASE", thumbnailUrl);
      if (thumbnailUrl) {
        // console.log("CONTENT__CASE1");
        return true;
      } else {
        // console.log("CONTENT__CASE2");
        return false;
      }
    default:
      return false;
  }
};

export default contentHasThumbnail;
