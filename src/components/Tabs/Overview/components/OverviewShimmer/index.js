import React from "react";
import styles from "./OverviewShimmer.module.scss";

const ContentShimmmer = ({ withHeader }) => {
  return (
    <div className={`${styles.OverviewShimmer}`}>
      <div className={`${styles.OverviewShimmer__Description}`}>
        <div className={`${styles.OverviewShimmer__Description__Title}`}>
          <div
            className={`${styles.OverviewShimmer__Description__Title__text} shine`}
          ></div>
          <div
            className={`${styles.OverviewShimmer__Description__Title__like} shine`}
          ></div>
        </div>
      </div>
      <div className={`${styles.OverviewShimmer__Tags}`}>
        <div className={`${styles.OverviewShimmer__Tags__text__1} shine`}></div>
        <div className={`${styles.OverviewShimmer__Tags__text__2} shine`}></div>
        <div className={`${styles.OverviewShimmer__Tags__text__3} shine`}></div>
      </div>
      <div className={`${styles.OverviewShimmer__Thumbnails} shine`}></div>
      <div className={`${styles.OverviewShimmer__CouponsContainer}`}>
        <div className={`${styles.OverviewShimmer__Coupons} shine`}></div>
        <div className={`${styles.OverviewShimmer__Coupons} shine`}></div>
        <div className={`${styles.OverviewShimmer__Coupons} shine`}></div>
      </div>
      <div className={`${styles.OverviewShimmer__ContentDescription}`}>
        <div
          className={`${styles.OverviewShimmer__ContentDescription__text__1} shine`}
        ></div>
        <div
          className={`${styles.OverviewShimmer__ContentDescription__text__2} shine`}
        ></div>
        <div
          className={`${styles.OverviewShimmer__ContentDescription__text__3} shine`}
        ></div>
        <div className={`${styles.OverviewShimmer__ButtonWrapper} `}>
          <div
            className={`${styles.OverviewShimmer__ButtonWrapper__text} shine`}
          ></div>
          <div
            className={`${styles.OverviewShimmer__ButtonWrapper__button} shine`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContentShimmmer;
