import { CONTENT_LIMIT, CONTENT_TYPE } from "../store/constants";

// GET FEATURED VIDEO FROM CONTENT LIST
const getFeaturedVideo = (contentList) => {
  return contentList
    .slice(0, CONTENT_LIMIT)
    .find((content) => content?.contentType === CONTENT_TYPE.VIDEO);
};

export default getFeaturedVideo;
