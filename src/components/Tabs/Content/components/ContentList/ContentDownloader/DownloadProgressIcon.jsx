import React from "react";
import { getAwsAssets } from "@/root/src/utils";
import styles from "../../../styles/DownloadProgressIcon.module.scss";
import Image from "next/image";

const DownloadProgressIcon = ({ progress, onClick }) => {
  // HANDLE ICON CLICKED
  const handleIconClicked = (e) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <div
      className={styles.downloadProgressIcon}
      onClick={handleIconClicked}
      style={{
        "--progressDeg": `${(parseInt(progress) || 0) * 3.6}deg`,
      }}
    >
      <div className={styles.downloadProgressIcon__content}>
        <Image
          src={getAwsAssets("crossIcon.svg", "content")}
          alt="crossIcon"
          height={12}
          width={12}
        />
      </div>
    </div>
  );
};

export default DownloadProgressIcon;
