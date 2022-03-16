import React from "react";
import { getAwsAssets } from "@/root/src/utils";
import styles from "../../../styles/DownloadCompletedIcon.module.scss";
import Image from "next/image";

const DownloadCompletedIcon = () => {
  return (
    <div className={styles.downloadCompletedIcon}>
      <Image
        src={getAwsAssets("checkIcon.svg", "content")}
        alt="checkIcon"
        height={8}
        width={7}
      />
    </div>
  );
};

export default DownloadCompletedIcon;
