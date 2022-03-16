import React from "react";
// import './shimmer.css'

function HomeShimmer() {
  return (
    <div className="HomeShimmer">
      <div className="HomeShimmer__Banner boxShadow">
        <div className="HomeShimmer__Banner--Item shine"></div>
        <div className="HomeShimmer__Banner--Item shine"></div>
      </div>

      <div className="HomeShimmer__Trending boxShadow">
        <div className="HomeShimmer__Trending--Item shine"></div>
        <div className="HomeShimmer__Trending--Item shine"></div>
        <div className="HomeShimmer__Trending--Item shine"></div>
      </div>

      <div className="HomeShimmer__CourseList boxShadow">
        <div className="HomeShimmer__CourseList--Top">
          <div className="HomeShimmer__CourseList--Top--YouMay">
            Course you may like
          </div>
          <div className="HomeShimmer__CourseList--Top--View">View All</div>
        </div>
        <div className="HomeShimmer__CourseList--Body">
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
        </div>
        <div className="HomeShimmer__CourseList--Body">
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
          <div className="HomeShimmer__CourseList--Body--Item shine"></div>
        </div>
      </div>

      <div className="HomeShimmer__Download boxShadow">
        <div className="HomeShimmer__Download--Left shine"></div>
        <div className="HomeShimmer__Download--Right">
          <div className="HomeShimmer__Download--Right--Row shine"></div>
          <div className="HomeShimmer__Download--Right--Row shine"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeShimmer;
