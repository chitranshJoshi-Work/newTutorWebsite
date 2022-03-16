import React from "react";
import styles from "./TabShimmer.module.scss";

const TabShimmer = () => {
  return (
    <div className={styles.TabShimmer}>
      <div className={`${styles.TabShimmer__item} shine`}></div>
      <div className={`${styles.TabShimmer__item} shine`}></div>
      {/* <div className={`${styles.TabShimmer__item} shine`}></div>
      <div className={`${styles.TabShimmer__item} shine`}></div> */}
    </div>
  );
};

export default TabShimmer;
