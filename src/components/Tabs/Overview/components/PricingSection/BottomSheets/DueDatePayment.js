import React, { useState } from "react";
import RupeeIcon from "@/images/Frame 2700.svg";
import styles from "../style.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";

const DueDatePayment = () => {
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
      <div className={styles.RemainingDueDateInstallment}>
        <div className={styles.RemainingDueDateInstallment__image}>
          <Image src={RupeeIcon} />
        </div>
        <h1 className={styles.RemainingDueDateInstallment__heading}>
          7 days left for the due date
        </h1>
        <p className={styles.RemainingDueDateInstallment__subtext}>
          Pay your 2nd instalment now to keep learning, otherwise your course
          will be locked.
        </p>
        <Button>Pay 2nd Instalment - ₹1,000/-</Button>
        <p className={styles.RemainingDueDateInstallment__viewAllInst}>
          View All Instalments
        </p>
      </div>
    </Modal>
  );
};

export default DueDatePayment;
