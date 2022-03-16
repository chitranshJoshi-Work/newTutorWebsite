import React from "react";
import ExpirySoonBottomSheet from "../ExpirySoonBottomSheet/ExpirySoonBottomSheet";
import * as actionCreator from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const PaymentProcessingBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showPaymentProcessingBottomSheet
  );
  return (
    <ExpirySoonBottomSheet
      mainText={t(
        "components.bottomSheets.components.paymentProcessingBottomSheet.paymentProcessing",
        "Payment Processing"
      )}
      detailText={t(
        "components.bottomSheets.components.paymentProcessingBottomSheet.paymentUnderProcessing",
        "Your payment is currently under processing. Please wait for sometime."
      )}
      showButton={false}
      subTextBelowBtn={false}
      state={state}
      dispatcher={() =>
        dispatch(actionCreator.showPaymentProcessingBottomSheetAction(false))
      }
    />
  );
};

export default PaymentProcessingBottomSheet;
