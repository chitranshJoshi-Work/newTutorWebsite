import React from "react";
import styles from "../style.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  showSelectAddressBottomSheetAction,
  showSelectStateBottomSheetAction,
} from "src/components/BottomSheets/store/actions.js";
import { useRouter } from "next/router";
const State = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const hasOfflineMaterial = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.physicalShipment
  );

  const addressList = useSelector(
    (state) => state?.physicalShipmentReducer?.addressList
  );
  const overviewData = useSelector((state) => state?.overviewReducer);
  const handleStatesClick = () => {
    hasOfflineMaterial
      ? checkPhysicalAddress()
      : dispatch(showSelectStateBottomSheetAction(true));
  };
  const checkPhysicalAddress = () => {
    addressList?.length
      ? dispatch(showSelectAddressBottomSheetAction(true))
      : router?.push(`/${router?.query?.courseId}/physicaladdress`);
  };

  return (
    <div className={styles.StateInputDiv} onClick={() => handleStatesClick()}>
      <div className={styles.StateInputDiv__Left}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/MapPin.svg"
          }
          alt="c"
          height={20}
          width={20}
          priority={true}
          loading="eager"
          // placeholder="blur"
          // blurDataURL={`https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/MapPin.svg`}
        />
      </div>
      <div className={styles.StateInputDiv__Middle}>
        {overviewData?.stateSelected
          ? `Purchasing in ${overviewData?.stateSelected}`
          : hasOfflineMaterial
          ? `Select Address`
          : `Select State`}
      </div>
      <div className={styles.StateInputDiv__Right}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/RightNav.svg"
          }
          alt="c"
          height={12}
          width={12}
        />
      </div>
    </div>
  );
};

export default State;
