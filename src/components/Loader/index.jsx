import React from "react";
import styles from "./Loader.module.scss";

const InPlaceLoader = ({ minHeight, minWidth }) => {
  return (
    <div
      className={styles.inPlaceLoader}
      style={{
        minHeight: `${minHeight || 48}px`,
        minWidth: `${minWidth || 48}px`,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default InPlaceLoader;
