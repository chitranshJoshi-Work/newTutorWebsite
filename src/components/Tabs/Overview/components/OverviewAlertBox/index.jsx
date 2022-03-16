import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import React from "react";
import styles from "./OverviewAlertBox.module.scss";

const OverviewAlertBox = ({ color = "#ff4058", icon }) => {
  // const OverviewAlertBox = () => {

  //     const color = "#ff4058";
  //     const icon = "https://dtxqtzf8mpl38.cloudfront.net/cams/store/icon/icon_whatsap.png";
  const heading = "Course Locked";
  const text =
    "Pay your pending instalments to unlock and access your course now.";

  return (
    <div className={styles.overviewAlertBox} style={{ background: color }}>
      <div className={styles.overviewAlertBox__icon}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/Overview/LockedAlertIcon.svg" ||
            icon ||
            getAwsAssets("LockedAlertIcon", "Overview")
          }
          alt="icon"
          width={32}
          height={32}
        />
      </div>
      <div className={styles.overviewAlertBox__text}>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default OverviewAlertBox;
