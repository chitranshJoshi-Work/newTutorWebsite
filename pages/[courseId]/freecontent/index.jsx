import React from "react";
import dynamic from "next/dynamic";

// import FreeContentPage from "@/tabs/Content/components/FreeContent/FreeContentPage";

import { useDispatch } from "react-redux";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";

const FreeContentPage = dynamic(() =>
  import("@/tabs/Content/components/FreeContent/FreeContentPage")
);

const CourseFreeContent = () => {
  // REDUX DISPATCH
  const dispatch = useDispatch();

  // SETTTING PAGE TITLE ON PAGE MOUNT
  React.useEffect(() => {
    dispatch(setPageHeadingAction("All Free Content"));
  }, []);

  return <FreeContentPage />;
};

// DEFINING LAYOUT PROPERTIES FOR THIS PAGE
CourseFreeContent.getLayoutProps = () => ({
  accent: true,
  noBuyNow: true,
  blockHeader: true,
});

export default CourseFreeContent;
