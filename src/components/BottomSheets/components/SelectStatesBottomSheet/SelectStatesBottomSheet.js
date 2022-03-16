import Modal from "@/root/src/components/UIElements/Modal";
import Image from "next/image";
import React from "react";
import Button from "@/root/src/components/UIElements/Button";
import styles from "./SelectStatesBottomSheet.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { setSelectedStateAction } from "src/components/Tabs/Overview/store/actions.js";
const SelectStatesBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const statesList = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.states
  );
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showSelectStateBottomSheet
  );
  console.log(statesList);
  const selectedState = useSelector(
    (state) => state?.overviewReducer?.stateSelected
  );
  const inputChangedHandler = (e) => {
    console.log("value", e.target.value);
    dispatch(setSelectedStateAction(e.target.value));
  };

  const setAsDefaultHandler = (e) => {
    console.log("first", e.target.checked);
  };
  const handleBuyNow = () => {
    console.log(selectedState);
    if (selectedState) {
      dispatch(actionCreator.showSelectStateBottomSheetAction(false));
    } else {
      toast.info("Please select a state");
    }
  };
  return (
    <div className={styles.AllStates}>
      <Modal
        showModal={state}
        handleClose={() => {
          dispatch(actionCreator.showSelectStateBottomSheetAction(false));
        }}
        header={
          <div className={styles.AllStates__header}>
            <Image
              src={getAwsAssets("locationIcon.svg", "bottomSheets")}
              alt={t(
                "components.bottomSheets.components.selectStateBottomSheet.locationIcon",
                "locationIcon"
              )}
              width="28px"
              height="28px"
            />
            {t(
              "components.bottomSheets.components.selectStateBottomSheet.selectState",
              "Select State"
            )}
          </div>
        }
      >
        <div className={styles.AllStates__States}>
          <p className={styles.AllStates__States__detail}>
            {t(
              "components.bottomSheets.components.selectStateBottomSheet.gstPaymentInvoice",
              "We require this to send you a GST payment invoice."
            )}
          </p>
          <h1 className={styles.AllStates__States__heading}>
            {t(
              "components.bottomSheets.components.selectStateBottomSheet.allStateUnionTerritories",
              "All States/Union Territories"
            )}
          </h1>
          <div className={styles.AllStates__States__StateList}>
            {statesList?.map((item, idx) => {
              return (
                <label
                  className={styles.AllStates__States__StateList__item}
                  key={idx}
                  htmlFor={item.name}
                >
                  <p>{item.name}</p>
                  <input
                    type="radio"
                    name="selectedState"
                    id={item.name}
                    value={item.name}
                    checked={item.name === selectedState}
                    onChange={inputChangedHandler}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.AllStates__ModalFooter}>
          <input
            type="checkbox"
            name="default"
            id="default"
            onChange={setAsDefaultHandler}
          />
          <label htmlFor="default">
            {t(
              "components.bottomSheets.components.selectStateBottomSheet.setAsDefault",
              "Set as default"
            )}
          </label>
          <Button onClick={() => handleBuyNow()}>
            {t(
              "components.bottomSheets.components.selectStateBottomSheet.proceedToPayment",
              "Proceed to Payment"
            )}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SelectStatesBottomSheet;
