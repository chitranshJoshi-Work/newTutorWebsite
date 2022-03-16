import React from "react";
import styles from "./DueDatePaymentBottomSheet.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import { directDeepLink } from "src/common/deepLinks/index.js";
const DueDatePaymentBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state) => state?.bottomSheetReducer?.showDueDateBottomSheet
  );
  const openInstallments = () => {
    directDeepLink(
      {},
      "UTIL_WEBVIEW",
      false
    )(data?.installmentAlert?.button?.deeplink);
  };
  const data = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.installments
  );
  if (!data?.installmentAlert?.text) return null;
  return (
    <>
      {data?.installmentAlert?.text ? (
        <Modal
          showModal={isOpen}
          handleClose={() => {
            dispatch(actionCreator.showDueDateBottomSheetAction(false));
          }}
        >
          <div className={styles.RemainingDueDateInstallment}>
            <div className={styles.RemainingDueDateInstallment__image}>
              <Image
                src={getAwsAssets("rupeeIcon.svg", "bottomSheets")}
                alt={t(
                  "components.bottomSheets.components.dueDatePaymentBottomSheet.rupeeIcon",
                  "RupeeIcon"
                )}
                width="74px"
                height="74px"
              />
            </div>
            <h1 className={styles.RemainingDueDateInstallment__heading}>
              {data?.installmentAlert?.heading}
            </h1>
            <p className={styles.RemainingDueDateInstallment__subtext}>
              {data?.installmentAlert?.text}
            </p>
            <Button>{data?.installmentPaymentData?.purchaseText}</Button>
            <p
              className={styles.RemainingDueDateInstallment__viewAllInst}
              onClick={() => openInstallments()}
            >
              {t(
                "components.bottomSheets.components.dueDatePaymentBottomSheet.viewAllInstalment",
                "View All Instalments"
              )}
            </p>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default DueDatePaymentBottomSheet;
