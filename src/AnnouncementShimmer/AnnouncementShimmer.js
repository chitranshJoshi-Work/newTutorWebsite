import React from "react";
import styles from "./AnnouncementShimmer.module.scss";

const AnnouncementShimmer = () => {
  return (
    <>
      <div className={`${styles.AnnouncementShimmer}`}>
        <h1 className={`${styles.AnnouncementShimmer__heading} shine`}></h1>
        <div className={`${styles.AnnouncementShimmer__details}`}>
          <div
            className={`${styles.AnnouncementShimmer__details__icon} shine`}
          ></div>
          <div className={`${styles.AnnouncementShimmer__details__AllInfo}`}>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__info} shine`}
            ></div>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__info} shine`}
            ></div>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__author} shine`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`${styles.AnnouncementShimmer}`}>
        <h1 className={`${styles.AnnouncementShimmer__heading} shine`}></h1>
        <div className={`${styles.AnnouncementShimmer__details}`}>
          <div
            className={`${styles.AnnouncementShimmer__details__icon} shine`}
          ></div>
          <div className={`${styles.AnnouncementShimmer__details__AllInfo}`}>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__info} shine`}
            ></div>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__info} shine`}
            ></div>
            <div
              className={`${styles.AnnouncementShimmer__details__AllInfo__author} shine`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementShimmer;
