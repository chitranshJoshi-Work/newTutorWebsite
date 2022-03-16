import React from "react";
import { useSelector } from "react-redux";

const InfoIcon = ({ color }) => {
  // PASS HEX CODE FOR COLOR WITHOUT HASHTAG(#)

  // FETCHING STATES FROM REDUCER
  const appAccentColor = useSelector(
    (state) => state?.persistedDataReducer?.appAccent
  );

  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0.5C3.14037 0.5 0 3.64037 0 7.5C0 11.3596 3.14037 14.5 7 14.5C10.8596 14.5 14 11.3596 14 7.5C14 3.64037 10.8596 0.5 7 0.5ZM6.125 4.875C6.125 4.392 6.517 4 7 4C7.48343 4 7.875 4.39157 7.875 4.875C7.875 5.35843 7.483 5.75 7 5.75C6.517 5.75 6.125 5.358 6.125 4.875ZM6.125 7.5C6.125 7.01657 6.517 6.625 7 6.625C7.48343 6.625 7.875 7.017 7.875 7.5V10.125C7.875 10.608 7.483 11 7 11C6.517 11 6.125 10.608 6.125 10.125V7.5ZM1.3125 7.5C1.3125 10.636 3.86357 13.1875 7 13.1875C10.136 13.1875 12.6875 10.636 12.6875 7.5C12.6875 4.364 10.136 1.8125 7 1.8125C3.86357 1.8125 1.3125 4.364 1.3125 7.5Z"
        fill={`#${color?.replace("#", "") || appAccentColor}`}
      />
    </svg>
  );
};

export default InfoIcon;
