import React from "react";
import styles from "./FullScreenLoader.module.scss";

const FullScreenLoader = () => {
  return (
    <div className={styles.fullScreenLoader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FullScreenLoader;
