import React from "react";
import Image from "next/image";
const OtherTags = ({ data }) => {
  return (
    <div className="OtherTags">
      <Image src={data?.icon} alt="" width={"20"} height={20} />
      <span className="OtherTags__text">{data?.text}</span>
    </div>
  );
};

export default React.memo(OtherTags);
