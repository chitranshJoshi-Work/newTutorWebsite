import React, { useEffect } from "react";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    window.getList = (dataObj) => {
      let response = JSON.parse(JSON.stringify(dataObj || {}));
      // alert(JSON.stringify(response));
    };
    window.getList2 = (dataObj) => {
      let response = JSON.parse(dataObj || {});
      // alert(JSON.stringify(response));
    };
    // makeDebugAPICall({ a: "App loaded" });
  });

  return (
    <div className="courseOverview">
      <div className="courseOverview__link">
        <Link href="/52097/overview">Go to CourseHome</Link>
      </div>
    </div>
  );
};

export default Home;
