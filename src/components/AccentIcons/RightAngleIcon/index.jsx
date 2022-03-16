import React from "react";
import { useSelector } from "react-redux";

const RightAngleIcon = ({ color }) => {
  // PASS HEX CODE FOR COLOR WITHOUT HASHTAG(#)

  // FETCHING STATES FROM REDUCER
  const appAccentColor = useSelector(
    (state) => state?.persistedDataReducer?.appAccent
  );

  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 11L6.5 6L1.5 1"
        stroke={`#${color?.replace("#", "") || appAccentColor}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightAngleIcon;
