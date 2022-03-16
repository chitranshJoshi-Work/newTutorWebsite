import React from "react";
import styles from "./PaymentSuccessfullBottomSheet.module.scss";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { getAwsAssets } from "@/root/src/utils";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { useTranslation } from "react-i18next";

const PaymentSuccessfullBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showCongratulationsBottomSheet
  );
  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showCongratulationsBottomSheetAction(false));
      }}
    >
      <div className={styles.PaidInstallment}>
        <div className={styles.PaidInstallment__image}>
          <Image
            src={getAwsAssets("CouponSuccess.gif", "Overview")}
            className="GIFCoupons"
            width="80"
            height="80"
            alt={t(
              "components.bottomSheets.components.paymentSuccessfullBottomSheet.couponSuccess",
              "CouponSuccess"
            )}
          />
        </div>
        <h1 className={styles.PaidInstallment__heading}>
          {t(
            "components.bottomSheets.components.paymentSuccessfullBottomSheet.congratulations",
            "Congratulations!"
          )}
        </h1>
        <p className={styles.PaidInstallment__subtext}>
          {t(
            "components.bottomSheets.components.paymentSuccessfullBottomSheet.youhavePaidFirstInstallment",
            "You have paid your 1st instalment for"
          )}
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

export default PaymentSuccessfullBottomSheet;
