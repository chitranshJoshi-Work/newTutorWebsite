import { setPageHeadingAction } from "@/root/src/layout/store/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/VideoPreview.module.scss";
import FeaturedVideo from "../ContentHome/FeaturedVideo";

const VideoPreview = () => {
  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING STATES FROM REDUCER
  const videoItem = useSelector(
    (state) => state?.courseContentReducer?.apiResADD_PREVIEW_VIDEO_CONTENT
  );

  // SETTTING PAGE TITLE ON PAGE MOUNT AND CLEARING ON UNMOUNT
  React.useEffect(() => {
    dispatch(setPageHeadingAction(videoItem?.name || ""));
    return () => {
      dispatch(setPageHeadingAction());
    };
  }, [videoItem?.name]);

  return (
    <div className={styles.videoPreview}>
      <FeaturedVideo videoItem={videoItem} expandedDesc />
    </div>
  );
};

export default VideoPreview;
