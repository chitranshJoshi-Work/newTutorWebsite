import React from "react";

import { CONTENT_TYPE } from "../../store/constants";
import FolderContentCases from "./FolderContentCases";
import TestContentCases from "./TestContentCases";
import VideoContentCases from "./VideoContentCases";

import LiveClassRecordingCases from "./LiveClassRecordingCases";
import { addPreviewVideoContentAction } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ListItemDetails = ({ content, className, itemDetails }) => {
  // REDUX DISPATCH
  const dispatch = useDispatch();

  // NEXTJS ROUTER
  const router = useRouter();

  // FUNCTION TO HANDLE WHEN VIDEO ITEM CLICKED
  const handleVideoItemClicked = (e, videoItem) => {
    // STOPPING BUBBLING OF ACTION IF CONTENT TYPE IS VIDEO
    if (videoItem?.contentType === CONTENT_TYPE.VIDEO) {
      e?.stopPropagation();
      // console.log("A______", videoItem);
      dispatch(addPreviewVideoContentAction(videoItem));
      router.push(`/${router?.query.courseId}/videopreview`);
    }
  };

  return (
    <div
      className={className}
      onClick={(e) => handleVideoItemClicked(e, content)}
    >
      <p>{content?.name}</p>

      {content?.contentType === CONTENT_TYPE.LIVE_CLASS && (
        <LiveClassRecordingCases content={content} />
      )}
      {content?.contentType === CONTENT_TYPE.FOLDER && (
        <FolderContentCases content={content} />
      )}
      {content?.contentType === CONTENT_TYPE.TEST && (
        <TestContentCases content={content} />
      )}
      {content?.contentType === CONTENT_TYPE.VIDEO && (
        <VideoContentCases content={content} />
      )}
    </div>
  );
};

export default ListItemDetails;
