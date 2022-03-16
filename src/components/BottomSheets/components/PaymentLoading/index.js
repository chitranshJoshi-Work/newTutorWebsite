import React from "react";
import CTA from "./CTA";
import { getAwsAssets } from "@/root/src/utils";
import Lottie from "react-lottie";
import * as animationData from "./LoadingLottie.json";

function PromptPlaceholder({ heading, children, button, onClick, className }) {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={
        className ? `PromtPlaceholder ${className}` : "PromtPlaceholder"
      }
    >
      <Lottie options={animationOptions} height={200} width={200} />
      <div className="PromtPlaceholder__Heading">{heading}</div>
      <div className="PromtPlaceholder__Body">{children}</div>

      {button ? (
        <div className="PromtPlaceholder__Action">
          <CTA label={button} onClick={onClick} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PromptPlaceholder;
