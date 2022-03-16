import Button from "@/UIElements/Button";
import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/FreeContentOverview.module.scss";
import ContentList from "../../ContentList";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { COURSE_TABS_ENUMS } from "@/utils/constants";
import { getAppConfigObject } from "@/root/src/utils/getAxiosConfig";
import RightArrowIcon from "@/AccentIcons/RightArrowIcon";

const FreeContentOverview = () => {
  // FETCHING DATA FROM REDUCER
  const freeContent = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.freeContent
  );
  const freeContentLen = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.freeContentCount
  );

  const contentTabId = useSelector(
    (state) =>
      state?.tabBarReducer?.tabList?.find?.(
        (tab) => tab?.enumKey === COURSE_TABS_ENUMS.CONTENT
      )?.id
  );

  // NEXTJS ROUTER
  const router = useRouter();

  // RETURNING NULL IF NO FREE CONTENT
  if (!freeContent?.length) return null;

  return (
    <div className={styles.freeContentOverview}>
      <div className={styles.freeContentOverview__header}>
        <div className={styles.freeContentOverview__header__heading}>
          {freeContentLen} Free Content
        </div>
        <div className={styles.freeContentOverview__header__highlightedText}>
          <Link href={`/${router?.query?.courseId}/${contentTabId}`}>
            <a>View Full Syllabus</a>
          </Link>
          <RightArrowIcon />
        </div>
      </div>
      <ContentList contentList={freeContent} />
      <div className={styles.freeContentOverview__footer}>
        <Link href={`/${router?.query?.courseId}/freecontent`}>
          <Button outline bRadius4 style={{ padding: "8px" }}>
            View All Free Content
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FreeContentOverview;
