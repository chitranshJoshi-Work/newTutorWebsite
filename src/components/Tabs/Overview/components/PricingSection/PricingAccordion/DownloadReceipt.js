import React from "react";
import Image from "next/image";
import styles from "../style.module.scss";
import { directDeepLink } from "src/common/deepLinks/index.js";
import { handleStartDownloadContent } from "../../../../Content/helpers/handleDownloadContent";
let newObj = {
  id: 4151614,
  name: "?/*nmnmnn",
  description: "solve it\n\nhttps://www.linkedin.com/",
  url: "https://storage.googleapis.com/cp-prod-whitelabel-assets-as-sth1-gcs-dgte34/production/single/learn/10b66c36-159b-4cf7-9cb3-8aedbc19129f.xlsx",
  format: "xlsx",
  isLockedForStudent: 0,
  isContentLocked: 1,
  isLocked: 0,
  isLockEditable: 0,
  contentType: 3,
  isOwn: 1,
  isPreview: 0,
  isReselling: 0,
  isPurchased: 1,
  isDeletable: 0,
  isNameEditable: 0,
  isDescriptionEditable: 0,
  orderId: 10000,
  isDownloadable: 1,
  scheduledMessage: null,
  isScheduled: 0,
  scheduledToDate: null,
  scheduledFromDate: null,
  isSamplingEnabled: 1,
  samplingDuration: 120000,
};
const DownloadReceipt = ({ data }) => {
  const handleClick = () => {
    const deepLinkObj = {
      screen: "UTIL_DOWNLOAD",
      paramOne: data?.receiptUrl,
      paramTwo: data?.receiptUrl.substring(
        data?.receiptUrl.lastIndexOf("/") + 1
      ),
    };
    directDeepLink({}, "UTIL_DOWNLOAD", false)(deepLinkObj);
    // handleStartDownloadContent();
    //  window?.mobile?.performAction(
    //    `${"ACTION_DOWNLOAD_FILE"}`,
    //    JSON.stringify(newObj)
    //  );
  };
  return (
    <div className={styles.DownloadReceipt} onClick={() => handleClick()}>
      <div className={styles.DownloadReceipt__Left}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/DownloadReceipt.svg"
          }
          alt="c"
          height={14}
          width={13}
        />
      </div>
      <div className={styles.DownloadReceipt__Right}>Download Receipt</div>
    </div>
  );
};

export default DownloadReceipt;
