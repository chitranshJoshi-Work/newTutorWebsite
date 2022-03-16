import { getAwsAssets } from "@/utils/index";
import Image from "next/image";
import React from "react";
import styles from "../styles/Announcements.module.scss";

const NoContentScreen = () => {
  return (
    <div className={styles.noContentScreen}>
      <Image
        src={getAwsAssets("MegaphoneIcon.svg", "Overview")}
        alt="noContentScreenThumbnail"
        height={140}
        width={140}
      />
      <h4>No content here!</h4>
      <p>You don’t have any announcement to display here</p>
    </div>
  );
};

export default NoContentScreen;
