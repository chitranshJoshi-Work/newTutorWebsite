import React from "react";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch, useSelector } from "react-redux";

import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import styles from "./AnnouncementsAttachments.module.scss";
import DownloadIcon from "src/components/Tabs/Content/components/ContentList/ContentDownloader/DownloadIcon.jsx";
import getAwsAssetThumbnail from "src/components/Tabs/Content/helpers/getContentThumbnail.js";
import { handleStartDownloadContent } from "../../../Tabs/Content/helpers/handleDownloadContent";
import { CONTENT_TYPE } from "../../../tabs/Content/store/constants";
import handleOpenContent from "../../../tabs/Content/helpers/handleOpenContent";
const Header = () => {
  return (
    <div className={styles.AnnouncementsAttachments__Header}>
      <div className={styles.AnnouncementsAttachments__Header__image}>
        <Image
          src={getAwsAssets("AttachmentsIcon.svg", "content")}
          alt="downArrowIcon"
          height={24}
          width={24}
          eager={true}
          // placeholder="blur"
          // blurDataURL={getAwsAssets("AttachmentsIcon.svg", "content")}
        />
      </div>
      <div className={styles.AnnouncementsAttachments__Header__text}>
        Attachements
      </div>
    </div>
  );
};
const AnnouncementsAttachments = () => {
  const dispatch = useDispatch();

  const xl = getAwsAssets("AttachmentsExcel.svg", "content");
  const ppt = getAwsAssets("AttachmentsPPT.svg", "content");

  const attachedLists = useSelector(
    (state) => state?.announcementsReducer?.announcementsCurrentAttachedList
  );
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showAnnouncementsAttachments
  );
  //,.doc,.pdf,.xls,.docx,.xlsx,.ppt,.pptx
  const renderImage = (format, url) => {
    if (
      format === "jpg" ||
      format === "png" ||
      format === "jpeg" ||
      format === "gif" ||
      format === "svg"
    ) {
      return (
        <Image
          src={url}
          alt="downArrowIcon"
          height={30}
          width={30}
          eager={true}
          // placeholder="blur"
          // blurDataURL={url}
          objectFit="contain"
        />
      );
    } else if (format === "pdf") {
      return (
        <Image
          src={getAwsAssets("pdfThumbnail.svg", "content")}
          alt="downArrowIcon"
          height={40}
          width={30}
          eager={true}
          // placeholder="blur"
          // blurDataURL={getAwsAssets("docs.svg", "Overview")}
        />
      );
    } else if (format === "doc" || format === "docx") {
      return (
        <Image
          src={getAwsAssets("docs.svg", "Overview")}
          alt="downArrowIcon"
          height={40}
          width={30}
          eager={true}
          // placeholder="blur"
          // blurDataURL={getAwsAssets("docs.svg", "Overview")}
        />
      );
    } else if (format === "xls" || format === "xlsx") {
      return (
        <Image
          src={xl}
          alt="downArrowIcon"
          height={40}
          width={30}
          eager={true}
          // placeholder="blur"
          // blurDataURL={xl}
        />
      );
    } else if (format === "ppt" || format === "pptx") {
      return (
        <Image
          src={ppt}
          alt="downArrowIcon"
          height={40}
          width={30}
          eager={true}
          // placeholder="blur"
          // blurDataURL={ppt}
        />
      );
    } else {
      return (
        <Image
          src={getAwsAssets("docs.svg", "Overview")}
          alt="downArrowIcon"
          height={40}
          width={30}
          priority={true}
          eager={true}
          // placeholder="blur"
          // blurDataURL={getAwsAssets("docs.svg", "Overview")}
        />
      );
    }
  };
  console.log(attachedLists);
  const d = {
    type: CONTENT_TYPE.DOCUMENT,
    id: 50304,
    fileName: "file_example_XLSX_5000.xlsx",
    format: "xlsx",
    public_id: "eq3oM1b5X3dU2bmAwWNU",
    url: "https://storage.googleapis.com/cp-prod-whitelabel-assets-as-sth1-gcs-dgte34/production/single/learn/10b66c36-159b-4cf7-9cb3-8aedbc19129f.xlsx",
  };
  // let url = {
  //   screen: `SCREEN_CONTENT`,
  //   paramOne: content.url,
  //   paramTwo: content.name,
  //   paramThree: content.description,
  // };
  //  window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));

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
  //   {
  //     "id": 50304,
  //     "fileName": "file_example_XLSX_5000.xlsx",
  //     "format": "xlsx",
  //     "public_id": "eq3oM1b5X3dU2bmAwWNU",
  //     "url": "https://storage.googleapis.com/cp-prod-whitelabel-assets-as-sth1-gcs-dgte34/production/single/learn/10b66c36-159b-4cf7-9cb3-8aedbc19129f.xlsx"
  // }
  // handleOpenContent
  const handleClick = (obj) => {
    // handleStartDownloadContent(newObj);

    console.log(obj);
    let url = {
      screen: `SCREEN_CONTENT`,
      paramOne: obj?.url,
      paramTwo: obj?.fileName,
      paramThree: "",
    };
    //  window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));
    //  window?.mobile?.performAction(JSON.stringify(newObj));
    console.log(url);
    window?.webkit?.messageHandlers?.performAction?.postMessage(
      JSON.stringify(url)
    );
    window?.mobile?.performAction(
      `${"ACTION_DOWNLOAD_FILE"}`,
      JSON.stringify(newObj)
    );
  };
  const handleDownload = (obj) => {
    let url = {
      screen: `ACTION_DOWNLOAD_FILE`,
      paramOne: obj?.url,
      paramTwo: obj?.fileName,
      paramThree: "",
    };
    console.log(url);
    window?.mobile?.performAction(
      `${"ACTION_DOWNLOAD_FILE"}`,
      JSON.stringify(url)
    );
    window?.mobile?.performAction(
      `${"ACTION_DOWNLOAD_FILE"}`,
      JSON.stringify(url)
    );
    window?.webkit?.messageHandlers?.performAction?.postMessage(
      JSON.stringify(url)
    );
  };
  return (
    <Modal
      showModal={state}
      handleClose={() => {
        if (dispatch) {
          dispatch(actionCreator.showAnnouncementsAttachments(false));
        } else {
        }
      }}
      header={<Header />}
    >
      <div className={styles.AnnouncementsAttachments__Body}>
        {attachedLists?.map((item, index) => (
          <div
            className={styles.AnnouncementsAttachments__List}
            key={`${index}attac`}
            onClick={() => handleClick(item)}
          >
            <div className={styles.AnnouncementsAttachments__List__Left}>
              {renderImage(item?.format, item?.url)}
            </div>
            <div className={styles.AnnouncementsAttachments__List__Middle}>
              {item?.fileName}
            </div>
            <div className={styles.AnnouncementsAttachments__List__Right}>
              {/* <Image
                src={getAwsAssets("ChatQuestion.svg", "content")}
                alt="downArrowIcon"
                height={8}
                width={8}
              /> */}
              <DownloadIcon onClick={() => handleDownload(item)} />
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default AnnouncementsAttachments;
