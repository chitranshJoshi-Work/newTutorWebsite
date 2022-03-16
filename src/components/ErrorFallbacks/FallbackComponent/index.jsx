import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import React from "react";
import Button from "@/UIElements/Button";
import styles from "./FallbackComponent.module.scss";

const FallbackComponent = ({
  errorMessage: { imageName, heading, text, buttonText },
}) => {
  // FUNCTION TO HANDLE TRY AGAIN BUTTON CLICKED
  const handleTryAgainClicked = () => {
    alert("handleTryAgainClicked");
  };

  return (
    <div className={styles.fallbackComponent}>
      {imageName && (
        <Image
          src={getAwsAssets(imageName, "errorFallbacks")}
          alt="errorThumbnail"
          width={154}
          height={158}
        />
      )}
      {heading && <h1>{heading}</h1>}
      {text && <p>{text}</p>}
      {buttonText && (
        <Button onClick={handleTryAgainClicked}>{buttonText}</Button>
      )}
    </div>
  );
};

export default FallbackComponent;
