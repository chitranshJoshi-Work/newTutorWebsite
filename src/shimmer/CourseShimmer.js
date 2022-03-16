import React from "react";
// import './shimmer.css'

function CourseShimmer() {
  return (
    <div className="courseShimmer">
      <div className="courseShimmer__Body">
        <div className="courseShimmer__Body--Left">
          <div className="courseShimmer__Body--Left--Top">
            <div className="courseShimmer__Body--Left--Top--Item shine"></div>
            <div className="courseShimmer__Body--Left--Top--Item shine"></div>
            <div className="courseShimmer__Body--Left--Top--Item shine"></div>
          </div>
          <div className="courseShimmer__Body--Left--Bottom boxShadow">
            <div className="courseShimmer__Body--Left--Bottom--Item shine"></div>
            <div className="courseShimmer__Body--Left--Bottom--Item shine"></div>
            <div className="courseShimmer__Body--Left--Bottom--Item shine"></div>
          </div>
        </div>
        <div className="courseShimmer__Body--Right">
          <div className="courseShimmer__Body--Right--CourseOverview shine"></div>
        </div>
      </div>
    </div>
  );
}

export default CourseShimmer;
