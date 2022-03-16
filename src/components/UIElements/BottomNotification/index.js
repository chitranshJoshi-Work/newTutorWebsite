import Image from "next/image";
import React from "react";

function BottomNotication({ children, backgroundColor, icon }) {
  return (
    <div
      className="BottomNotification"
      style={{ backgroundColor: backgroundColor }}
    >
      {icon ? <Image src={icon} alt="tag" width="12px" height="12px" /> : ""}
      <span style={{ marginLeft: "8px" }}>{children}</span>
    </div>
  );
}

export default BottomNotication;
