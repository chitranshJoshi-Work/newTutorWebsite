import React from "react";
import { useSelector } from "react-redux";

const RightArrowIcon = ({ color }) => {
  // PASS HEX CODE FOR COLOR WITHOUT HASHTAG(#)

  // FETCHING STATES FROM REDUCER
  const appAccentColor = useSelector(
    (state) => state?.persistedDataReducer?.appAccent
  );

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16699 10H15.8337"
        stroke={`#${color?.replace("#", "") || appAccentColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16699L15.8333 10.0003L10 15.8337"
        stroke={`#${color?.replace("#", "") || appAccentColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowIcon;
