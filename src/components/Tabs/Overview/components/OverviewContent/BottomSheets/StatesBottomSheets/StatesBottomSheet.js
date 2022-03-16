import Modal from "@/root/src/components/UIElements/Modal";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@/root/src/components/UIElements/Button";
import styles from "./StatesBottomSheet.module.scss";
import locationIcon from "@/images/mapPin.svg";
import { useSelector, useDispatch } from "react-redux";
import { showSelectStateBottomSheetAction } from "src/components/BottomSheets/store/actions.js";
import { setSelectedState } from "src/components/Tabs/Overview/store/actions.js";
const StatesBottomSheet = () => {
  const statesList = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.states
  );
  const dispatch = useDispatch();
  console.log(stateList, "stateList");
  const states = [
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "New Delhi" },
    { key: "1", name: "Madhya pradesh" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
    { key: "1", name: "Andaman Nicobar" },
  ];

  const inputChangedHandler = (e) => {
    // console.log("value", e.target.value);
    dispatch(setSelectedState(e.target.value));
  };

  const setAsDefaultHandler = (e) => {
    console.log("first", e.target.checked);
  };

  const [showModal, setShowModal] = useState(true);
  return (
    <div className={styles.AllStates}>
      <Modal
        showModal={showModal}
        handleClose={() => {
          dispatch(showSelectStateBottomSheetAction(false));
        }}
        header={
          <div className={styles.AllStates__header}>
            <Image src={locationIcon} />
            Select State
          </div>
        }
      >
        <div className={styles.AllStates__States}>
          <p className={styles.AllStates__States__detail}>
            {/* We require this to send you a GST payment invoice. */}
          </p>
          <h1 className={styles.AllStates__States__heading}>
            All States/Union Territories
          </h1>
          <div className={styles.AllStates__States__StateList}>
            {statesList.map((item, idx) => {
              return (
                <div
                  className={styles.AllStates__States__StateList__item}
                  key={idx}
                >
                  <p>{item.name}</p>
                  <input
                    type="radio"
                    name="selectedState"
                    id={item.name}
                    value={item.name}
                    onChange={(e) => inputChangedHandler(e)}
                  />
                </div>
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
          <label htmlFor="default">Set as default</label>
          <Button>Proceed to Payment</Button>
        </div>
      </Modal>
    </div>
  );
};

export default StatesBottomSheet;
