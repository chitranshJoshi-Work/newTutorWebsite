import React from "react";
import { getAwsAssets } from "@/utils/index";
import contentHasThumbnail from "../../helpers/contentHasThumbnail";
import getContentThumbnail from "../../helpers/getContentThumbnail";
import isContentVideo from "../../helpers/isContentVideo";
import styles from "../../styles/ContentList.module.scss";
import Image from "next/image";
import VideoProgressBar from "./VideoProgressBar";
import isVideoExhausted from "../../helpers/isVideoExhausted";

const ListItemThumbnail = ({ content }) => {
  return (
    <div
      className={`${styles.contentList__item__thumbnail} ${
        isVideoExhausted(content) &&
        styles["contentList__item__thumbnail--exhausted"]
      }`}
      style={
        contentHasThumbnail(content)
          ? { background: `url(${getContentThumbnail(content)})` }
          : {}
      }
    >
      {/* <p>{`hello${contentHasThumbnail(content)}`}</p> */}
      {!contentHasThumbnail(content) && (
        <Image
          src={getContentThumbnail(content)}
          alt="thumbnail"
          width={38}
          height={38}
        />
      )}
      {isContentVideo(content?.contentType) && (
        <Image
          src={getAwsAssets("playIcon.svg", "content")}
          alt="playIcon"
          width={20}
          height={20}
        />
      )}
      {isContentVideo(content?.contentType) &&
        content?.duration &&
        content.duration !== "undefined" && (
          <div className={styles.contentList__item__thumbnail__durationBar}>
            {content?.duration}
          </div>
        )}
      {isContentVideo(content?.contentType) && (
        <VideoProgressBar
          lastSeek={content?.lastSeek}
          duration={content?.duration}
          videoMaxDuration={content?.videoMaxDuration}
        />
      )}
    </div>
  );
};

export default ListItemThumbnail;
