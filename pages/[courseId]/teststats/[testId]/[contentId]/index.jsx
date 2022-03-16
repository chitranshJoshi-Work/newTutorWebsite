// import TestStats from "@/tabs/Content/components/TestStats";
import React from "react";

import dynamic from "next/dynamic";

const TestStats = dynamic(() => import("@/tabs/Content/components/TestStats"));

const TestStatsPage = () => {
  return <TestStats />;
};

// DEFINING LAYOUT PROPERTIES FOR THIS PAGE
TestStatsPage.getLayoutProps = () => ({
  noBuyNow: true,
  blockHeader: true,
});

export default TestStatsPage;
