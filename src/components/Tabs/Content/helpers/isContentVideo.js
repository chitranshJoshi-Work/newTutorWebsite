import { CONTENT_TYPE } from "../store/constants";

const isContentVideo = (contentType) => {
  return (
    contentType === CONTENT_TYPE.VIDEO ||
    contentType === CONTENT_TYPE.LIVE_CLASS
  );
};

export default isContentVideo;
