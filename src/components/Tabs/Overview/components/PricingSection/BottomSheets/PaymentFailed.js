import Button from "@/root/src/components/UIElements/Button";
import Modal from "@/root/src/components/UIElements/Modal";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../style.module.scss";
import RupeeIcon from "@/images/Frame 2700.svg";

const PaymentFailed = () => {
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
      <div className={styles.PaymentFailed}>
        <div className={styles.PaymentFailed__image}>
          {/* todo change the image icon to gif */}
          <Image src={RupeeIcon} />
        </div>
        <h1 className={styles.PaymentFailed__heading}>Payment failed!</h1>
        <p className={styles.PaymentFailed__subtext}>
          Your payment for this course could not be completed. Please retry
          again. Don’t worry in case money has been deducted from your account.
          They are safe.
        </p>
        <Button>Retry Payments</Button>
      </div>
    </Modal>
  );
};

export default PaymentFailed;
