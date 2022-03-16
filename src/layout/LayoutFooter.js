import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import BottomNotication from "../components/UIElements/BottomNotification";
import Footer from "../components/UIElements/Footer";
import { getAwsAssets } from "../utils";
import BuyNowFooter from "./BuyNowFooter";
import { installmentsAlertStateEnum } from "src/components/Tabs/Overview/store/constants.js";
function LayoutFooter() {
  // ROUTER
  const router = useRouter();
  // SELECTORS
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );

  const loading = useSelector(
    (state) => state?.overviewReducer?.overViewDetailsLoading
  );

  const currentCouponCode = useSelector(
    (state) => state?.overviewReducer?.currentCouponCode
  );

  // FOOTER CONDITION
  const checkForBuyNow = () => {
    console.log("check");
    if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 0 &&
      state?.metaData?.isPurchased === 0
    ) {
      console.log("check");

      return false;
    } else if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 0 &&
      state?.metaData?.isPurchased === 1
    ) {
      console.log("check");

      return false;
    } else if (
      state?.installments?.paidInstallmentSummary?.isPaymentComplete === 1 ||
      state?.metaData?.isPurchased === 1
    ) {
      return true;
    } else if (state?.metaData?.isPurchased) {
      return true;
    }
    return false;
  };

  // FOOTER CONTENT
  const renderNotification = () => {
    console.log(state?.installments, "noti");
    if (currentCouponCode && router?.query?.tabId === 1) {
      return (
        <BottomNotication
          icon={getAwsAssets("CouponList.svg", "Overview")}
          backgroundColor="#E8F7FF"
        >
          {currentCouponCode?.code} coupon applied
        </BottomNotication>
      );
    } else if (
      state?.installments?.installmentAlertState ===
      installmentsAlertStateEnum.COURSE_LOCKED
    ) {
      return (
        <BottomNotication
          icon={getAwsAssets("NotificationStripClock.svg", "content")}
          backgroundColor="#FF4058" //greeen
        >
          Due date:{" "}
          {state?.installments?.paidInstallmentSummary?.info?.[2]?.value?.text}
        </BottomNotication>
      );
    } else if (
      state?.installments?.installmentAlertState ===
      installmentsAlertStateEnum.DAYS_LEFT_EXPIRE
    ) {
      return (
        <BottomNotication
          icon={getAwsAssets("NotificationStripClock.svg", "content")}
          backgroundColor="#5AB369" //red
        >
          Missed Due date:{" "}
          {state?.installments?.paidInstallmentSummary?.info?.[2]?.value?.text}
        </BottomNotication>
      );
    }
  };

  return checkForBuyNow() ? (
    <Footer />
  ) : state?.metaData?.id ? (
    <BuyNowFooter
      isInstallmentCompleted={
        state?.installments?.paidInstallmentSummary?.isPaymentComplete
      }
      isInstallment={state?.installments?.purchasedViaInstallment}
      buttonText={state?.installments?.installmentPaymentData?.purchaseText}
    >
      {renderNotification()}
    </BuyNowFooter>
  ) : null;
}

export default LayoutFooter;
