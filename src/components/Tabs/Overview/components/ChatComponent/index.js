import React, { useState, useEffect } from "react";
import styles from "./Chat.module.scss";
import { directDeepLink } from "@/deepLinks/index.js";
// import deepLinks from "../../../../../common/deepLinks/index.js";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

// import { ReactComponent as RightNavIcon }  from '@/images/RightNav.svg';
import { useRouter } from "next/router";
import RightNavIcon from "@/TabIcons/RightNav";
import parseToken from "@/utils/parseToken";
import { getUserToken } from "@/utils/getAxiosConfig";
const ChatComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  const userDetails = useSelector(
    (state) => state?.overviewReducer?.userDetails
  );
  const handleDescriptionClick = () => {
    let deepLinkObject = {
      screen: "CHAT_DETAILS_CREATE_V2",
      paramOne: +`${state?.auxiliaryData?.tutorId}`, //tutor id 289994
      paramTwo: `${state?.auxiliaryData?.tutorName}`, //tutor name Gunjan Gupta
      paramThree: "Hi, I am using the app",
      paramFour: 3, //conversation_source
      paramFive: router?.query?.courseId, //courseId 192
    };

    // for talk to tutor
    // conversation_source = 3
    // converstion_source_id = ${courseId}
    // console.log(directDeepLink());
    console.log(
      directDeepLink(deepLinkObject, "CHAT_DETAILS_CREATE_V2", true)()
    );
    // deepLinks;
  };
  useEffect(() => {}, []);
  console.log(userDetails);
  return (
    <div className={styles.ChatRow} suppressHydrationWarning={true}>
      <div className={styles.ChatRow__Left}>
        <div style={{ position: "relative", width: "48px", height: "38px" }}>
          <Image
            src={
              "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/ChatQuestion.svg"
            }
            alt="cloud"
            width="48"
            height="38"
            placeholder="blur"
            priority={true}
            loading="eager"
            blurDataURL={`https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/ChatQuestion.svg`}
          />
        </div>
      </div>
      <div className={styles.ChatRow__Right} suppressHydrationWarning={true}>
        {typeof window !== "undefined" ? (
          <div
            className={styles.ChatRow__Right__Heading}
            suppressHydrationWarning={true}
          >
            Facing any difficulties,{" "}
            {userDetails?.responseData?.user?.name
              ? userDetails?.responseData?.user?.name
              : parseToken(getUserToken())?.name?.split(" ")?.[0]}
            ?
          </div>
        ) : null}
        <div className={styles.ChatRow__Right__Description}>
          <span
            className={styles.ChatRow__Right__Description__Text}
            onClick={handleDescriptionClick}
          >
            Talk to me instantly
          </span>
          <div
            style={{
              position: "relative",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            {/* <Image
              alt="chevron"
              src={
                "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/RightNav.svg"
              }
              width="10"
              height="10"
            /> */}
            <RightNavIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatComponent);
