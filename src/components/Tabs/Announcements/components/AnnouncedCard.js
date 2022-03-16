import React from "react";
import styles from "../styles/Announcements.module.scss";
import Image from "next/image";
import { setAnnouncementsAttachedList } from "../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useDispatch } from "react-redux";
import { showAnnouncementsAttachments } from "src/components/BottomSheets/store/actions.js";
const AnnouncedCard = ({ data }, ref) => {
  const dispatch = useDispatch();
  console.log(data);
  console.log(getAwsAssets("DownloadReceipt.svg", "content"));
  const handleDownloadAttachments = (data) => {
    dispatch(setAnnouncementsAttachedList(data));
    dispatch(showAnnouncementsAttachments(true));
  };
  return (
    <div className={styles.AnnouncedCard} ref={ref}>
      <div className={styles.AnnouncedCard__Header}>
        {new Date(data?.date)
          .toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          ?.replace(/ /g, " ")}
      </div>
      {data?.games?.map((data, i) => (
        <div className={styles.AnnouncedCard__Body} key={`${i}ann`}>
          <div className={styles.AnnouncedCard__Body__Left}>
            <Image
              src={getAwsAssets("comments.svg", "content")}
              className="SVGCoupons"
              height="20"
              width="20"
              alt="couponlist"
            />
          </div>
          <div className={styles.AnnouncedCard__Body__Right}>
            <div className={styles.AnnouncedCard__Body__Right__Description}>
              {data?.description}
            </div>
            <div className={styles.AnnouncedCard__Body__Right__Name}>
              By {data?.tutorName}
            </div>
            {data?.attachments?.length > 0 ? (
              <div className={styles.AnnouncedCard__Body__Right__Attachments}>
                <div
                  className={
                    styles.AnnouncedCard__Body__Right__Attachments__icon
                  }
                >
                  <Image
                    src={getAwsAssets(
                      "AnnouncementsAttachmentClip.svg",
                      "content"
                    )}
                    alt="c"
                    height={14}
                    width={13}
                    eager={true}
                    // placeholder="blur"
                    // blurDataURL={getAwsAssets(
                    //   "AnnouncementsAttachmentClip.svg",
                    //   "content"
                    // )}
                  />
                </div>
                <div
                  className={
                    styles.AnnouncedCard__Body__Right__Attachments__text
                  }
                  onClick={() => handleDownloadAttachments(data?.attachments)}
                >
                  Download Attachment
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
const AnnouncedCardList = React.forwardRef(AnnouncedCard);
export default AnnouncedCardList;
