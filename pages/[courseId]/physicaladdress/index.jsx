// import PhysicalAddress from "@/root/src/components/PhysicalAddress";
import { setPageHeadingAction } from "@/root/src/layout/store/actions";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const PhysicalAddress = dynamic(() =>
  import("@/root/src/components/PhysicalAddress")
);

const CoursePhysicalAddress = () => {
  // NEXTJS ROUTER
  const router = useRouter();

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // SELECTORS
  const isEditMode = useSelector(
    (state) => state?.physicalShipmentReducer?.isEditMode
  );
  // SETTTING PAGE TITLE ON PAGE MOUNT
  React.useEffect(() => {
    dispatch(
      setPageHeadingAction(isEditMode ? "Update Address" : "Add New Address")
    );
  }, []);

  return <PhysicalAddress />;
};

// DEFINING LAYOUT PROPERTIES FOR THIS PAGE
CoursePhysicalAddress.getLayoutProps = () => ({
  accent: true,
  noBuyNow: true,
  blockHeader: true,
});

export default CoursePhysicalAddress;
