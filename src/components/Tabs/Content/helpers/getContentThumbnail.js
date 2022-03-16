import { getAwsAssets } from "@/utils/index";
import { CONTENT_TYPE } from "../store/constants";

const getAwsAssetThumbnail = (name) => {
  return getAwsAssets(`${name}Thumbnail.svg`, "content");
};

const getContentThumbnail = ({
  contentType,
  thumbnailUrl,
  format,
  url,
  typeOfTest,
}) => {
  switch (contentType) {
    case CONTENT_TYPE.FOLDER:
      return getAwsAssetThumbnail("folder");
    case CONTENT_TYPE.LIVE_CLASS:
    case CONTENT_TYPE.VIDEO:
      return thumbnailUrl && thumbnailUrl !== "undefined"
        ? thumbnailUrl
        : getAwsAssetThumbnail("default"); // video file
    case CONTENT_TYPE.DOCUMENT:
      switch (format) {
        case "jpg":
        case "png":
        case "jpeg":
          return url && url !== "undefined"
            ? url
            : getAwsAssetThumbnail("default"); // image file
        case "pdf":
          return getAwsAssetThumbnail("pdf");
        case "zip":
          return getAwsAssetThumbnail("zip");
      }
    case CONTENT_TYPE.TEST:
      switch (typeOfTest) {
        case 0:
          return getAwsAssetThumbnail("onlineTest");
        case 1:
          return getAwsAssetThumbnail("subjectiveTest");
      }
  }
};

export default getContentThumbnail;
