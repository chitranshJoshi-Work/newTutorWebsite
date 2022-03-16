import Button from "@/root/src/components/UIElements/Button";
import Modal from "@/root/src/components/UIElements/Modal";
import Image from "next/image";
import React from "react";
import styles from "./PaymentFailedBottomSheet.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const PaymentFailedBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showPaymentFailedBottomSheet
  );

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showPaymentFailedBottomSheetAction(false));
      }}
    >
      <div className={styles.PaymentFailed}>
        <div className={styles.PaymentFailed__image}>
          {/* todo change the image icon to gif */}
          <Image
            src={getAwsAssets("rupeeIcon.svg", "bottomSheets")}
            alt={t(
              "components.bottomSheets.components.paymentFailedBottomSheet.rupeeIcon",
              "RupeeIcon"
            )}
            width="74px"
            height="74px"
          />
        </div>
        <h1 className={styles.PaymentFailed__heading}>
          {t(
            "components.bottomSheets.components.paymentFailedBottomSheet.paymentFailed",
            "Payment failed!"
          )}
        </h1>
        <p className={styles.PaymentFailed__subtext}>
          {t(
            "components.bottomSheets.components.paymentFailedBottomSheet.paymentNotCompleted",
            "Your payment for this course could not be completed. Please retry again. Don’t worry in case money has been deducted from your account. They are safe."
          )}
        </p>
        <Button>
          {t(
            "components.bottomSheets.components.paymentFailedBottomSheet.retryPayments",
            "Retry Payments"
          )}
        </Button>
      </div>
    </Modal>
  );
};

export default PaymentFailedBottomSheet;
