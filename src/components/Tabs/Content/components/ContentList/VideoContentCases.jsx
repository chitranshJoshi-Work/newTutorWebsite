import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import React from "react";
import isVideoExhausted from "../../helpers/isVideoExhausted";
import styles from "../../styles/ContentList.module.scss";

const VideoContentCases = ({ content }) => {
  return (
    <React.Fragment>
      <div className={styles.contentList__item__content__limits}>
        {content?.leftViewsEmblem?.value &&
          content?.leftViewsEmblem?.value > 0 && (
            <div style={{ color: content?.leftViewsEmblem?.textColor }}>
              {content?.leftViewsEmblem?.icon[
                content?.leftViewsEmblem?.textColor
              ] && (
                <Image
                  src={
                    content?.leftViewsEmblem?.icon[
                      content?.leftViewsEmblem?.textColor
                    ]
                  }
                  alt="eyeIcon"
                  width={14}
                  height={14}
                />
              )}
              {content?.leftViewsEmblem?.text}:{" "}
              <span style={{ color: content?.leftViewsEmblem?.valueColor }}>
                {content?.leftViewsEmblem?.value}
              </span>
            </div>
          )}
        {content?.leftDurationEmblem?.value &&
          content?.leftDurationEmblem?.value !== -1 && (
            <div style={{ color: content?.leftDurationEmblem?.textColor }}>
              {content?.leftDurationEmblem?.icon[
                content?.leftDurationEmblem?.textColor
              ] && (
                <Image
                  src={
                    content?.leftDurationEmblem?.icon[
                      content?.leftDurationEmblem?.textColor
                    ]
                  }
                  alt="eyeIcon"
                  width={14}
                  height={14}
                />
              )}
              {content?.leftDurationEmblem?.text}:{" "}
              <span style={{ color: content?.leftDurationEmblem?.valueColor }}>
                {content?.leftDurationEmblem?.value}
              </span>
            </div>
          )}
        {isVideoExhausted(content) ? (
          <div
            className={styles.contentList__item__content__limits__exhausted}
            style={{ color: content?.thresholdColor }}
          >
            {content?.thresholdText}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default VideoContentCases;
