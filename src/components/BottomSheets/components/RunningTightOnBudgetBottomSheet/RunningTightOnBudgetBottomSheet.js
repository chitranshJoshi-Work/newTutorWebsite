import React from "react";
import styles from "./RunningTightOnBudgetBottomSheet.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import { tightOnBudgetBottomSheetCloseAction } from "src/components/Tabs/Overview/store/actions.js";
const RunningTightOnBudgetBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showRunningTightOnBudgetBottomSheet
  );
  const courseDetails = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  const data = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.installments
  );
  console.log(courseDetails, "runn");
  const handleClose = () => {
    dispatch(actionCreator.showRunningTightOnBudgetBottomSheetAction(false));
    dispatch(
      tightOnBudgetBottomSheetCloseAction({
        courseId: courseDetails?.metaData?.id,
        activeInstallmentId:
          courseDetails?.installments?.activeInstallmentId ||
          courseDetails?.installments?.installmentId,
      })
    );
  };
  return (
    <Modal
      showModal={state}
      handleClose={() => {
        handleClose();
      }}
    >
      <div className={styles.PaymentInstallment}>
        <div className={styles.PaymentInstallment__image}>
          <Image
            src={getAwsAssets("rupeeIcon.svg", "bottomSheets")}
            width="74px"
            height="74px"
            alt={t(
              "components.bottomSheets.components.runningTightOnBudgetBottomSheet.rupeeIcon",
              "rupeeIcon"
            )}
          />
        </div>
        <h1 className={styles.PaymentInstallment__heading}>
          {data?.installmentAlert?.heading}
        </h1>
        <p className={styles.PaymentInstallment__subtext}>
          {data?.installmentAlert?.text}
        </p>
        <Button>
          {t(
            "components.bottomSheets.components.runningTightOnBudgetBottomSheet.payInInstalments",
            "Pay in Instalments"
          )}
        </Button>

        <p
          className={styles.PaymentInstallment__goback}
          onClick={() => handleClose()}
        >
          {t(
            "components.bottomSheets.components.dueDatePaymentBottomSheet.goBackInstead",
            "Go back instead"
          )}
        </p>
      </div>
    </Modal>
  );
};

export default RunningTightOnBudgetBottomSheet;
