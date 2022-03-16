import React, { useState } from "react";
import ClockIcon from "@/images/clock.svg";
import styles from "./ExpirySoon.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";

const ExpirySoon = ({ buttonShow, subTextBelowBtn }) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <Modal
      showModal={showModal}
      handleClose={() => {
        setShowModal(false);
      }}
      header={true}
      showBottomLine={false}
    >
      <div className={styles.ExpirySoon}>
        <div className={styles.ExpirySoon__image}>
          <Image src={ClockIcon} />
        </div>
        <h1 className={styles.ExpirySoon__heading}>Expiring Soon :(</h1>
        <p className={styles.ExpirySoon__subtext}>
          Your course is ending on <span> 08/01/2022.</span> Finish soon.
        </p>
        {buttonShow && <Button>Continue Learning</Button>}
        {subTextBelowBtn ? (
          <p className={styles.ExpirySoon__viewAllInst}>
            Explore similar courses
          </p>
        ) : (
          <p className={styles.ExpirySoon__viewAllInst}></p>
        )}
      </div>
    </Modal>
  );
};

export default ExpirySoon;
