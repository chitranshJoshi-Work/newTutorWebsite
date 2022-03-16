import React from "react";
import styles from "./UpcomingLiveClassShimmer.module.scss";

const UpcomingLiveClassShimmer = () => {
  return (
    <div className={styles.UpcomingLiveClassShimmer}>
      <div
        className={`${styles.UpcomingLiveClassShimmer__Calender} shine`}
      ></div>
      <div className={styles.UpcomingLiveClassShimmer__Details}>
        <div
          className={`${styles.UpcomingLiveClassShimmer__Details__info1} shine`}
        ></div>
        <div
          className={`${styles.UpcomingLiveClassShimmer__Details__info2} shine`}
        ></div>
      </div>
      <div
        className={`${styles.UpcomingLiveClassShimmer__JoinClass} shine`}
      ></div>
    </div>
  );
};

export default UpcomingLiveClassShimmer;
