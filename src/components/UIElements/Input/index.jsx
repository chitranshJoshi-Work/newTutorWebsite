import React from "react";
import { getAwsAssets } from "@/utils/index";
import styles from "./Input.module.scss";
import Image from "next/image";

const Input = ({ icon, ...inputProps }) => {
  return (
    <div className={styles.inputContainer}>
      {icon && (
        <div className={styles.inputContainer__icon}>
          <Image src={icon} alt="inputIcon" width={18} height={18} />
        </div>
      )}
      <input {...inputProps} />
    </div>
  );
};

export default Input;
