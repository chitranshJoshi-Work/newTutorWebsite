import React from "react";
import styles from "../../styles/TestStatsShimmer.module.scss";

const TestStatsShimmer = () => {
  return (
    <div className={styles.testStatsShimmer}>
      <div className={styles.testStatsShimmer__test}>
        <div className={`${styles.testStatsShimmer__test__item1} shine`}></div>
        <div className={styles.testStatsShimmer__test__itemTopic}>
          <div
            className={`${styles.testStatsShimmer__test__itemTopic__item} shine`}
          ></div>
          <div
            className={`${styles.testStatsShimmer__test__itemTopic__item} shine`}
          ></div>
        </div>
      </div>
      <h1 className={`${styles.testStatsShimmer__heading} shine`}></h1>
      <div className={`${styles.testStatsShimmer__scoreCard} shine`}></div>
      <h1 className={`${styles.testStatsShimmer__heading} shine`}></h1>
      <div className={`${styles.testStatsShimmer__scoreCard} shine`}></div>
    </div>
  );
};

export default TestStatsShimmer;
