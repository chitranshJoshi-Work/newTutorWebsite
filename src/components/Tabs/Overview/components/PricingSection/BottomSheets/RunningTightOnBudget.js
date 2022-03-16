import React, { useState } from "react";
import RupeeIcon from "@/images/Frame 2700.svg";
import styles from "../style.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import locationIcon from "@/images/mapPin.svg";

const RunningTightOnBudget = () => {
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
      <div className={styles.PaymentInstallment}>
        <div className={styles.PaymentInstallment__image}>
          <Image src={RupeeIcon} />
        </div>
        <h1 className={styles.PaymentInstallment__heading}>
          Running tight on budget?
        </h1>
        <p className={styles.PaymentInstallment__subtext}>
          Buy this course in 3 instalments and start learning now.
        </p>
        <Button>Pay in Instalments</Button>
      </div>
    </Modal>
  );
};

export default RunningTightOnBudget;
