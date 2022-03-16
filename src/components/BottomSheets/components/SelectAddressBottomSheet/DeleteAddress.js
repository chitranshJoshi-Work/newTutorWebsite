import React from "react";
import Popup from "@/UIElements/Popup";
import { useSelector, useDispatch } from "react-redux";
import { showDeleteAddressPopupAction } from "../../store/actions";
import { deleteAddressDataAction } from "../../../PhysicalAddress/store/actions";
import { useEffect } from "react";
import Image from "next/image";
import { getAwsAssets } from "@/root/src/utils";

import style from "./SelectAddressBottomSheet.module.scss";

function DeleteAddress() {
  // DISPATCH
  const dispatch = useDispatch();

  const deleteAddress = (id) =>
    dispatch(deleteAddressDataAction({ addressId: id }));
  // SELECTORS
  const showPopup = useSelector(
    (state) => state?.bottomSheetReducer?.showDeleteAddressPopup
  );

  const actionableAddressId = useSelector(
    (state) => state?.physicalShipmentReducer?.actionableAddressId
  );

  useEffect(() => {
    console.log("OFFLINEMATERIAL--ACTIONID", actionableAddressId);
  }, [actionableAddressId]);

  return (
    <Popup
      showPopup={showPopup}
      handleClose={() => dispatch(showDeleteAddressPopupAction(false))}
    >
      <div className={style.DeleteAddress}>
        <Image
          src={getAwsAssets("ClosePrompt.svg", "bottomSheets")}
          className="SVGCoupons"
          height="48"
          width="48"
          alt="X"
        />

        <h2>Delete Address</h2>
        <p>Are you sure you want to delete this address?</p>
        <p>
          Please note: Deleting this address will not delete any pending orders
          neing shipped to this address
        </p>
        <button onClick={() => deleteAddress(actionableAddressId)}>DONE</button>
      </div>
    </Popup>
  );
}

export default DeleteAddress;
