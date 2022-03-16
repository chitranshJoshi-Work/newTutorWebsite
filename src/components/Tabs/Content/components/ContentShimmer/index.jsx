import React from "react";
import styles from "../../styles/ContentShimmer.module.scss";

const ContentShimmmer = ({ withHeader }) => {
  return (
    <div className={`${styles.contentShimmer}`}>
      {withHeader && (
        <div className={`${styles.contentShimmer__heading} shine`}></div>
      )}
      <div className={`${styles.contentShimmer__listItem}`}>
        <div
          className={`${styles.contentShimmer__listItem__thumbnail} shine`}
        ></div>
        <div className={`${styles.contentShimmer__listItem__content}`}>
          <div
            className={`${styles.contentShimmer__listItem__content__p} shine`}
          ></div>
          <div
            className={`${styles.contentShimmer__listItem__content__p} shine`}
          ></div>
        </div>
      </div>
      <div className={`${styles.contentShimmer__listItem}`}>
        <div
          className={`${styles.contentShimmer__listItem__thumbnail} shine`}
        ></div>
        <div className={`${styles.contentShimmer__listItem__content}`}>
          <div
            className={`${styles.contentShimmer__listItem__content__p} shine`}
          ></div>
          <div
            className={`${styles.contentShimmer__listItem__content__p} shine`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContentShimmmer;
