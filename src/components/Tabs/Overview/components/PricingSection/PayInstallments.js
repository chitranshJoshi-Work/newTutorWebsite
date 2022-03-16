import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { directDeepLink } from "src/common/deepLinks/index.js";
import { useSelector } from "react-redux";
const PayInstallments = () => {
  const handleInstallmentCardClick = () => {
    directDeepLink(
      {},
      "UTIL_WEBVIEW",
      false
    )(data?.installmentAlert?.button?.deeplink);
  };
  const data = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course?.installments
  );

  return (
    <div
      className={styles.PayInstallments}
      onClick={() => {
        handleInstallmentCardClick();
      }}
    >
      <div className={styles.PayInstallments__Left}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/PaymentInstallmentPie.svg"
          }
          alt="c"
          height={"46px"}
          width={"46px"}
          priority={true}
          loading="eager"
        />
      </div>
      <div className={styles.PayInstallments__Middle}>
        <div className={styles.PayInstallments__Middle__Heading}>
          Pay in Instalments
        </div>
        <div className={styles.PayInstallments__Middle__SubHeading}>
          Running tight on budget? Pay course fees in easy instalments and start
          learning now.
        </div>
      </div>
      <div className={styles.PayInstallments__Right}>
        <Image
          src={
            "https://cp-assets-web.s3.ap-south-1.amazonaws.com/courseWebview/content/RightNav.svg"
          }
          alt="c"
          height={8}
          width={8}
        />
      </div>
    </div>
  );
};

export default PayInstallments;
