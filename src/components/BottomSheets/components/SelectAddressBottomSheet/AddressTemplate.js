import React from "react";
import styles from "./SelectAddressBottomSheet.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addressEditModeToggleAction,
  setActionableAddressIdAction,
  setActiveAddressAction,
} from "../../../PhysicalAddress/store/actions";
import { useEffect } from "react";
import {
  showDeleteAddressPopupAction,
  showSelectAddressBottomSheetAction,
} from "../../store/actions";
import { useRouter } from "next/router";

function AddressTemplate({
  lable,
  address1,
  address2,
  city,
  id,
  isDefault,
  landmark,
  name,
  mobile,
  pinCode,
  state,
}) {
  // ROUTER
  const router = useRouter();
  // TRANSLATOR
  const { t } = useTranslation();
  //   DATA
  const data = {
    lable,
    address1,
    address2,
    city,
    id,
    isDefault,
    landmark,
    name,
    mobile,
    pinCode,
    state,
  };
  //   DISPATCH
  const dispatch = useDispatch();

  const selectAddress = () => {
    dispatch(setActiveAddressAction(data));
  };

  const deleteAddress = (id) => {
    dispatch(setActionableAddressIdAction(id));

    dispatch(showDeleteAddressPopupAction(true));
  };

  const editAddress = (data) => {
    dispatch(addressEditModeToggleAction(true));
    dispatch(setActiveAddressAction(data));
    dispatch(setActionableAddressIdAction(data?.id));

    router.push(`/${router?.query.courseId}/physicaladdress`);
    dispatch(showSelectAddressBottomSheetAction(false));
  };
  // SELECTORS
  const activeAddress = useSelector(
    (state) => state?.physicalShipmentReducer?.activeAddress
  );

  const showPopup = useSelector(
    (state) => state?.bottomSheetReducer?.showDeleteAddressPopup
  );

  useEffect(() => {
    console.log("OFFLINEMATERIAL--SHOWPOPUP", showPopup);
  }, [showPopup]);

  return (
    <div className={styles.SelectAddressBottomSheet__AddressList__Address}>
      <div
        className={
          styles.SelectAddressBottomSheet__AddressList__Address__heading
        }
        onClick={selectAddress}
      >
        <h1>
          {/* {t(
            "components.bottomSheets.components.selectAddressBottomSheet.address",
            lable
          )}{" "} */}
          {lable}
        </h1>
        <div>
          <input
            type="radio"
            name="address"
            checked={activeAddress?.id === id}
          />
        </div>
      </div>
      <hr
        className={
          styles.SelectAddressBottomSheet__AddressList__Address__horizontalLine
        }
        onClick={selectAddress}
      />
      <p
        className={
          styles.SelectAddressBottomSheet__AddressList__Address__detail
        }
        onClick={selectAddress}
      >
        {address1}, {address2 ? `${address2}, ` : ""}
        <br />
        {city}, {state}, {pinCode}
      </p>
      <p
        className={
          styles.SelectAddressBottomSheet__AddressList__Address__MobileNumber
        }
        onClick={selectAddress}
      >
        {t(
          "components.bottomSheets.components.selectAddressBottomSheet.phoneNumber",
          "Phone Number:"
        )}
        <span>{mobile}</span>
      </p>
      <div
        className={
          styles.SelectAddressBottomSheet__AddressList__Address__button
        }
      >
        <button onClick={() => editAddress(data)}>
          {t(
            "components.bottomSheets.components.selectAddressBottomSheet.edit",
            "Edit"
          )}
        </button>
        <button onClick={() => deleteAddress(id)}>
          {t(
            "components.bottomSheets.components.selectAddressBottomSheet.delete",
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
}

export default AddressTemplate;
