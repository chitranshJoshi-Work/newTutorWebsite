import React from "react";
import styles from "./style.module.scss";
import PricingAccordion from "./PricingAccordion";

import PayInstallments from "./PayInstallments";
import StateSelection from "./StateSelection";
import DownloadReceipt from "./PricingAccordion/DownloadReceipt";
import PaidSummary from "./PaidSummary";
import { useSelector } from "react-redux";
import { directDeepLink } from "src/common/deepLinks/index.js";
import RightArrowIcon from "@/root/src/components/AccentIcons/RightArrowIcon";
import { installmentsAlertStateEnum } from "src/components/Tabs/Overview/store/constants.js";
const PricingSection = () => {
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  console.log(state, "state----");
  const openInstallments = () => {
    directDeepLink({}, "UTIL_WEBVIEW", false)();
  };
  const handleTC = () => {
    directDeepLink(
      {},
      "UTIL_BROWSER",
      false
    )({ shareUrl: state?.details?.tncUrl });
  };
  return (
    <div className={styles.PricingSection}>
      {state?.metaData?.isPurchased && state?.paymentSummary?.receiptUrl ? (
        <div className={styles.PricingSection__Heading}>
          <span>Pricing Details</span>
          <span>
            <DownloadReceipt data={state?.paymentSummary} />
          </span>
        </div>
      ) : null}
      {state?.paymentSummary ||
      state?.installments?.paidInstallmentSummary?.isPaymentComplete ==
        0 ? null : (
        <PricingAccordion />
      )}

      {state?.installments?.isInstallmentActive &&
      !state?.metaData?.isPurchased ? (
        <PayInstallments />
      ) : null}
      {state?.metaData?.isPurchased ||
      state?.installments?.installmentAlertState ===
        installmentsAlertStateEnum.COURSE_LOCKED ? null : (
        <StateSelection />
      )}
      {state?.paymentSummary ||
      state?.installments?.paidInstallmentSummary?.isPaymentComplete == 0 ||
      state?.metaData?.isPurchased ? (
        <PaidSummary
          installmentData={state?.installments?.paidInstallmentSummary?.info}
          data={state?.paymentSummary}
        />
      ) : null}
      {state?.installments?.paidInstallmentSummary?.isPaymentComplete == 0 ? (
        <div className={styles.ViewAllInstallmentsWrapper}>
          <div
            onClick={() => openInstallments()}
            className={styles.ViewAllInstallments}
          >
            <span>View All Installments</span>
            <RightArrowIcon />
          </div>
        </div>
      ) : null}
      {state?.metaData?.isPurchased ? (
        <div className={styles.TC}>
          * Amount paid was inclusive of taxes. Read{" "}
          <span onClick={() => handleTC()}>Terms & Conditions</span> here
        </div>
      ) : (
        <div className={styles.TC}>
          * Amount payable is inclusive of taxes.
          <span onClick={() => handleTC()}>Terms & Conditions</span> apply
        </div>
      )}
    </div>
  );
};

export default PricingSection;
