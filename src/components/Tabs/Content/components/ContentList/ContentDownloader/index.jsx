import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import {
  handleStartDownloadContent,
  handleStopDownloadContent,
} from "../../../helpers/handleDownloadContent";
import { CONTENT_DOWNLOAD_STATUS } from "../../../store/constants";
import DownloadCompletedIcon from "./DownloadCompletedIcon";
// import DownloadIcon from "./DownloadIcon";
import DownloadProgressIcon from "./DownloadProgressIcon";

// const DownloadCompletedIcon = dynamic(() => import('./DownloadCompletedIcon'));
const DownloadIcon = dynamic(() => import("./DownloadIcon"));
// const DownloadProgressIcon = dynamic(() => import('./DownloadProgressIcon'));

const ContentDownloader = ({
  content,
  getOfflineDownloadedItemProgress,
  getOfflineDownloadedItemState,
}) => {
  // NEXTJS ROUTER
  const router = useRouter();

  // FUNCTION TO CHECK IF DOWNLOAD ICON HAS TO BE SHOWN
  const showDownloadIcon = (content) => {
    if (isNaN(getOfflineDownloadedItemState(content?.url))) return true;
    switch (getOfflineDownloadedItemState(content?.url)) {
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_PAUSE:
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_FAILED:
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_REMOVE:
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_CANCEL:
      case CONTENT_DOWNLOAD_STATUS.DOWNLOAD_UNKNOWN: {
        return true;
      }
    }
    return false;
  };

  // HANDLE START DOWNLOADING CLICKED
  const handleStartDownloadClicked = (content) => {
    console.log("A___________1", content);
    handleStartDownloadContent({
      ...content,
      courseId: +router?.query?.courseId,
    });
  };

  // HANDLE STOP DOWNLOADING CLICKED
  const handleStopDownloadClicked = (content) => {
    handleStopDownloadContent({
      ...content,
      courseId: +router?.query?.courseId,
    });
  };

  return (
    <React.Fragment>
      {/*<p>{`P - ${getOfflineDownloadedItemProgress(content?.url) || 0} ** S -${
        getOfflineDownloadedItemState(content?.url) || 0
      }`}</p>*/}
      {(getOfflineDownloadedItemState(content?.url) ===
        CONTENT_DOWNLOAD_STATUS.DOWNLOAD_IN_PROGRESS ||
        getOfflineDownloadedItemState(content?.url) ===
          CONTENT_DOWNLOAD_STATUS.DOWNLOAD_QUEUED) && (
        <DownloadProgressIcon
          onClick={() => handleStopDownloadClicked(content)}
          progress={getOfflineDownloadedItemProgress(content?.url)}
        />
      )}
      {getOfflineDownloadedItemState(content?.url) ===
        CONTENT_DOWNLOAD_STATUS.DOWNLOAD_QUEUED && <p>Q</p>}
      {getOfflineDownloadedItemState(content?.url) ===
        CONTENT_DOWNLOAD_STATUS.DOWNLOAD_SUCCESS && <DownloadCompletedIcon />}
      {showDownloadIcon(content) && (
        <DownloadIcon onClick={() => handleStartDownloadClicked(content)} />
      )}
    </React.Fragment>
  );
};

export default ContentDownloader;
