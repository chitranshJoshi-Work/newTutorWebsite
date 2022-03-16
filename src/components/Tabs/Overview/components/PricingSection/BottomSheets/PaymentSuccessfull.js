import React, { useState } from "react";
import styles from "../style.module.scss";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { getAwsAssets } from "@/root/src/utils";

const PaymentSuccessfull = () => {
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
      <div className={styles.PaidInstallment}>
        <div className={styles.PaidInstallment__image}>
          <Image
            src={getAwsAssets("CouponSuccess.gif", "Overview")}
            className="GIFCoupons"
            width="80"
            height="80"
          />
        </div>
        <h1 className={styles.PaidInstallment__heading}>Congratulations!</h1>
        <p className={styles.PaidInstallment__subtext}>
          You have paid your 1st instalment for
          <span className={styles.PaidInstallment__subtext__bold}>
            “RRB NTPC CBT - 2 NEW BATCH BILINGUAL (TELUGU+ENGLISH) | ADVANCED
            LEVEL CLASSES”
          </span>
        </p>
        <p className={styles.PaidInstallment__subtext}>
          Start learning now. Your 2nd instalment is due on 8th Feb 2021.
        </p>
      </div>
    </Modal>
  );
};

export default PaymentSuccessfull;
