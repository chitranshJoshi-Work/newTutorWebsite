import React, { useState } from "react";
import CloseIcon from "@/images/xCircle.svg";
import Image from "next/image";
import styles from "./FooterItem.module.scss";

const FooterItem = ({
  thumbnail,
  info,
  keyIcon,
  keyInfo,
  ValueInfo,
  buttonText,
  handleClose,
}) => {
  return (
    <div className={buttonText ? styles.Footer : styles.FooterWithoutButton}>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt="X"
          width="48px"
          height="36px"
          layout="fixed"
          objectFit="cover"
        />
      )}
      <div className={styles.Footer__detail}>
        <p className={styles.Footer__detail__Info}>{info}</p>

        <p className={styles.Footer__detail__event}>
          {keyIcon ? (
            <Image
              src={keyIcon}
              alt="X"
              width="14px"
              height="9.15px"
              layout="fixed"
              objectFit="cover"
            />
          ) : null}
          <div className={styles.Footer__detail__keyInfo}>{keyInfo}</div>
          {keyInfo ? ": " : null}
          {"  "}
          <div className={styles.Footer__detail__ValueInfo}>{ValueInfo}</div>
        </p>
      </div>

      {buttonText && (
        <button className={styles.Footer__Button}>{buttonText}</button>
      )}
      <Image
        src={CloseIcon}
        alt="X"
        width="24px"
        height="24px"
        layout="fixed"
        objectFit="cover"
      />
    </div>
  );
};

export default FooterItem;
