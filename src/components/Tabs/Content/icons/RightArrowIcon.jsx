import React from "react";

const RightArrowIcon = ({ stroke }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // stroke={stroke || "#000000"}
    >
      <path
        d="M4.16699 10H15.8337"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16699L15.8333 10.0003L10 15.8337"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowIcon;
