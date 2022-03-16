import React from "react";
import styles from "../../styles/VideoPreviewShimmer.module.scss";

const VideoPreviewShimmer = () => {
  return (
    <div className={styles.videoPreviewShimmer}>
      <div
        className={`${styles.videoPreviewShimmer__featuredVideo} shine`}
      ></div>
      <div className={styles.videoPreviewShimmer__heading}>
        <div
          className={`${styles.videoPreviewShimmer__heading__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__heading__line} shine`}
        ></div>
      </div>
      <div className={styles.videoPreviewShimmer__description}>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
      </div>
      <div className={styles.videoPreviewShimmer__description}>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
        <div
          className={`${styles.videoPreviewShimmer__description__line} shine`}
        ></div>
      </div>
    </div>
  );
};

export default VideoPreviewShimmer;
