import React, { useState } from "react";

import Image from "next/image";
import { getAwsAssets } from "@/root/src/utils";

function Dropdown({ customClass, customProps, children, heading }) {
  const [showDetails, updateShowDetails] = useState(false);

  return (
    <div
      className={customClass ? `Dropdown ${customClass}` : "Dropdown"}
      {...customProps}
      onClick={() => updateShowDetails(!showDetails)}
    >
      <div className="Dropdown__Main">
        {heading}
        <div
          className={
            showDetails
              ? "Dropdown__Main--Toggle Dropdown__Main--Toggle--Show"
              : "Dropdown__Main--Toggle Dropdown__Main--Toggle--Hide"
          }
        >
          <Image
            className={
              showDetails
                ? "Dropdown__Main--Toggle--Verticle Dropdown__Main--Toggle--Verticle--Show"
                : "Dropdown__Main--Toggle--Verticle Dropdown__Main--Toggle--Verticle--Hide"
            }
            src={getAwsAssets("RightNav.svg", "content")}
            width="12px"
            height="12px"
            alt=">"
          />
        </div>
      </div>
      <div
        className={
          showDetails
            ? "Dropdown__Extended Dropdown__Extended--Show"
            : "Dropdown__Extended Dropdown__Extended--Hide"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
