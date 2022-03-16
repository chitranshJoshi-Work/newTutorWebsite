import React from "react";

const RightNavIcon = ({ stroke }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke || "#000000"}
    >
      <path
        d="M1.5 11L6.5 6L1.5 1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightNavIcon;
