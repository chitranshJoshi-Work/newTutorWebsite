import React from "react";
import { getAwsAssets } from "@/root/src/utils";
import styles from "../../../styles/DownloadIcon.module.scss";
import Image from "next/image";

const DownloadIcon = ({ onClick }) => {
  const handleDownloadClicked = (e) => {
    e?.stopPropagation();
    onClick && onClick();
  };

  return (
    <div className={styles.downloadIcon} onClick={handleDownloadClicked}>
      <Image
        src={getAwsAssets("downArrowIcon.svg", "content")}
        alt="downArrowIcon"
        height={8}
        width={8}
      />
    </div>
  );
};

export default DownloadIcon;
