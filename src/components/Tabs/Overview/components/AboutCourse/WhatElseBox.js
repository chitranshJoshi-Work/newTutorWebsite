import React from "react";
import Image from "next/image";
const WhatElseBox = ({ data }) => {
  return (
    <div className="WhatElseBox">
      <div className="WhatElseBox__Left">
        {data?.icon ? (
          <Image src={data?.icon} alt="l" width={20} height={20} />
        ) : null}
      </div>
      <div className="WhatElseBox__Right">
        <div className="WhatElseBox__Right__Heading">{data?.heading}</div>
        <div className="WhatElseBox__Right__Description">
          {data?.subHeading}
        </div>
      </div>
    </div>
  );
};

export default WhatElseBox;
