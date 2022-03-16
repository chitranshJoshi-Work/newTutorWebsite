import React from "react";
import styles from "./SelectAddressBottomSheet.module.scss";
import Image from "next/image";
import Modal from "@/UIElements/Modal";
import Button from "@/UIElements/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import AddressTemplate from "./AddressTemplate";
import { useEffect } from "react";
import {
  addressEditModeToggleAction,
  setActiveAddressAction,
} from "../../../PhysicalAddress/store/actions";
import DeleteAddress from "./DeleteAddress";
import { useRouter } from "next/router";

const SelectAddressBottomSheet = () => {
  // ROUTER
  const router = useRouter();
  // TRANSLATOR
  const { t } = useTranslation();
  // DISPATCH
  const dispatch = useDispatch();

  const selectDefault = (data) => {
    dispatch(setActiveAddressAction(data));
  };

  const addNewAddress = () => {
    dispatch(addressEditModeToggleAction(false));

    router.push(`/${router?.query.courseId}/physicaladdress`);
    dispatch(actionCreator.showSelectAddressBottomSheetAction(false));
  };
  // SELECTORS
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showSelectAddressBottomSheet
  );

  const addressList = useSelector(
    (state) => state?.physicalShipmentReducer?.addressList
  );

  useEffect(() => {
    let defaultAddress;
    if (addressList?.length) {
      defaultAddress = addressList?.filter((item) => item?.isDefault);
      selectDefault(...defaultAddress);
    }
  }, [addressList]);

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showSelectAddressBottomSheetAction(false));
      }}
      header={
        <div className="UpcomingLive__ModalHeader">
          <Image
            src={getAwsAssets("locationIcon.svg", "bottomSheets")}
            alt={t(
              "components.bottomSheets.components.selectAddressBottomSheet.locationIcon",
              "locationIcon"
            )}
            width="28px"
            height="28px"
          />
          {t(
            "components.bottomSheets.components.selectAddressBottomSheet.selectAddress",
            "Select Address"
          )}
        </div>
      }
    >
      <div className={styles.SelectAddressBottomSheet}>
        <p className={styles.SelectAddressBottomSheet__subtext}>
          {t(
            "components.bottomSheets.components.selectAddressBottomSheet.studyMaterialShipped",
            "Your Study materials will be shipped to this address"
          )}
        </p>
        <h1 className={styles.SelectAddressBottomSheet__heading}>
          {t(
            "components.bottomSheets.components.selectAddressBottomSheet.savedAddress",
            "Saved Addresses"
          )}
        </h1>

        <div className={styles.SelectAddressBottomSheet__AddressList}>
          {addressList?.map((item, i) => (
            <AddressTemplate {...item} key={i} />
          ))}
          <Button outline onClick={addNewAddress}>
            + Add a new Address
          </Button>
        </div>

        <div className={styles.SelectAddressBottomSheet__Footer}>
          <div className={styles.SelectAddressBottomSheet__Footer__Default}>
            <input type="checkbox" name="" id="" lable="Set as Default" /> Set
            as Default
          </div>

          <Button>Proceed to Payment</Button>
        </div>
      </div>

      <DeleteAddress />
    </Modal>
  );
};

export default SelectAddressBottomSheet;
