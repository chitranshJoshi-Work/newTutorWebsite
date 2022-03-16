import React from "react";
import styles from "./InstallmentPendingBottomSheet.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import { directDeepLink } from "src/common/deepLinks/index.js";
const InstallmentPendingBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const state = useSelector(
    (state) => state.bottomSheetReducer?.showCourseLockedBottomSheet
  );
  const data = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.installments
  );
  const openInstallments = () => {
    directDeepLink(
      {},
      "UTIL_WEBVIEW",
      false
    )(data?.installmentAlert?.button?.deeplink);
  };

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(actionCreator.showCourseLockedBottomSheetAction(false));
      }}
    >
      <div className={styles.CourseLocked}>
        <div className={styles.CourseLocked__image}>
          <Image
            src={getAwsAssets("lockedIcon.svg", "bottomSheets")}
            width="68px"
            height="68px"
            alt={t(
              "components.bottomSheets.components.installmentPendingBottomSheet.lockedIcon",
              "lockedIcon"
            )}
          />
        </div>
        <h1 className={styles.CourseLocked__heading}>
          {data?.installmentAlert?.heading}
        </h1>
        <p className={styles.CourseLocked__subtext}>
          {data?.installmentAlert?.text}
        </p>
        <Button>{data?.installmentPaymentData?.purchaseText}</Button>
        <p
          className={styles.CourseLocked__viewAllInst}
          onClick={() => openInstallments()}
        >
          {t(
            "components.bottomSheets.components.installmentPendingBottomSheet.viewAllInstallmentsText",
            "View All Instalments"
          )}
        </p>
      </div>
    </Modal>
  );
};

export default InstallmentPendingBottomSheet;
