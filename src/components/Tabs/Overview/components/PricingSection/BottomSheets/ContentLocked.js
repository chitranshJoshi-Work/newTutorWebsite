import React, { useState } from "react";
import RupeeIcon from "@/images/Frame 2700.svg";
import styles from "../style.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import lockedIcon from "@/images/Frame 2700(1).svg";

const ContentLocked = () => {
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
      <div className={styles.CourseLocked}>
        <div className={styles.CourseLocked__image}>
          <Image src={lockedIcon} />
        </div>
        <h1 className={styles.CourseLocked__heading}>Uh oh, course locked!</h1>
        <p className={styles.CourseLocked__subtext}>
          Pay your pending instalments to unlock and access your course now.
        </p>
        <Button>Pay Pending Instalment - ₹1,000/-</Button>
        <p className={styles.CourseLocked__viewAllInst}>View All Instalments</p>
      </div>
    </Modal>
  );
};

export default ContentLocked;
