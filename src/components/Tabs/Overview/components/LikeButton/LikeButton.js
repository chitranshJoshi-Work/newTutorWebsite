import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { postLikeAction } from "../../store/actions";
import { useRouter } from "next/router";
import LikedIcon from "src/components/AccentIcons/LikeIcon/index.jsx";

const LikeAnim =
  "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/SpeedAnimatedLike.gif";

const EmptyLike =
  "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/BeforeLike.svg";

const done =
  "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/DoneLike.svg";

const LikeButton = ({ value }) => {
  const dispatch = useDispatch();
  const isClicked = useRef();
  const likedValue = useRef(value);
  const overViewDetails = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  const router = useRouter();

  const [iconType, setIconType] = useState(
    overViewDetails?.metaData?.isLiked || 0
  );
  const [icon, setIcon] = useState(
    overViewDetails?.metaData?.isLiked ? done : EmptyLike
  );

  const handleLikeClick = () => {
    console.log(overViewDetails?.metaData?.isLiked);
    console.log(iconType);
    if (iconType === 0) {
      setIconType(1);
      isClicked.current = true;
      setIcon(done);
      dispatch(
        postLikeAction({ courseId: router?.query?.courseId, status: 1 })
      );
      likedValue.current = +likedValue.current + 1;
    }
    if (iconType === 1) {
      setIconType(0);
      setIcon(EmptyLike);
      isClicked.current = false;
      dispatch(
        postLikeAction({ courseId: router?.query?.courseId, status: 0 })
      );
      likedValue.current = +likedValue.current - 1;
    }
  };

  return (
    <>
      <div className="like--div" onClick={() => handleLikeClick()}>
        {iconType == 0 ? (
          <Image
            src={icon}
            alt="like"
            className={
              iconType === 1 && isClicked.current
                ? "like--div--img"
                : "like--div--img"
            }
            width={24}
            height={24}
          />
        ) : (
          <span className={"like--div--img--2"}>
            <LikedIcon
              className={isClicked.current ? "like--div--img--2" : ""}
            />
          </span>
        )}
        {/* <img
        src={icon}
        alt="sd"
        className={iconType == 1 ? "like--div--animated" : "like--div--img"}
      /> */}
      </div>
      <span className={iconType == 1 ? "like--text done" : "like--text"}>
        {likedValue?.current}
      </span>
    </>
  );
};

export default React.memo(LikeButton);
