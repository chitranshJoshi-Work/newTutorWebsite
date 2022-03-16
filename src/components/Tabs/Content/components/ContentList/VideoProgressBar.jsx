import React from "react";
import styles from "../../styles/VideoProgressBar.module.scss";

const VideoProgressBar = ({
  lastSeek,
  duration,
  videoMaxDuration,
  featuredVideo,
}) => {
  const [fillWidth, setFillWidth] = React.useState(0);

  React.useEffect(() => {
    const durationMillisecond = new Date(
      "1970-01-01T" + duration + "Z"
    ).getTime();
    setFillWidth((lastSeek / durationMillisecond) * 100);
  }, [lastSeek, duration]);

  return fillWidth ? (
    <div
      className={`${styles.videoProgressBar} ${
        featuredVideo && styles["videoProgressBar--featuredVideo"]
      }`}
    >
      <div
        className={styles.videoProgressBar__fill}
        style={{ width: `${fillWidth}%` }}
      ></div>
    </div>
  ) : null;
};

export default VideoProgressBar;
