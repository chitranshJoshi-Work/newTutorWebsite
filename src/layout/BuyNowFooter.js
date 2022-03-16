import React from "react";

import Button from "@/UIElements/Button";
import styles from "./Layout.module.scss";
import Loader from "@/src/components/Loader";
import { initialisePaymentService } from "@/src/PaymentService";

import { useSelector } from "react-redux";
function BuyNowFooter({
  children,
  isInstallment,
  isInstallmentCompleted,
  buttonText,
}) {
  const pricingDetails = useSelector(
    (state) => state?.overviewReducer?.graphCourseData?.coupons?.[0]
  );

  const pricingDetailsLoading = useSelector(
    (state) => state?.overviewReducer?.graphCourseDataLoading
  );

  console.log("+++pricingDetailsLoading", pricingDetailsLoading);

  if (isInstallment) {
    return (
      <>
        {children}
        <div className={`${styles.layout__footer__buyNow}`}>
          <div
            className={`${styles.layout__footer__buyNow__button} ${styles.fullWidth}`}
          >
            <Button customClassName="buttonShine buyNowShine">
              {buttonText}
            </Button>
          </div>
        </div>
      </>
    );
  }
  console.log(
    pricingDetails?.discountBreackUp?.[0]?.label,
    "price",
    pricingDetails?.discountBreackUp?.[0]
  );
  return (
    <>
      {children}
      <div className={styles.layout__footer__buyNow}>
        {pricingDetailsLoading ? (
          <Loader minHeight={52} minWidth={144} />
        ) : (
          <div className={styles.layout__footer__buyNow__price}>
            <h3>{pricingDetails?.priceDetailNew?.finalPrice}</h3>
            {pricingDetails?.discountBreackUp?.length > 0 ? (
              <div className={styles.layout__footer__buyNow__price__discount}>
                {pricingDetails?.priceDetailNew?.decoratedText ? (
                  <p> {pricingDetails?.priceDetailNew?.decoratedText}</p>
                ) : (
                  ""
                )}
                <span>
                  {
                    pricingDetails?.discountBreackUp?.[0]?.label?.split(
                      " "
                    )?.[1]
                  }{" "}
                  OFF
                </span>
              </div>
            ) : null}
          </div>
        )}
        {
          //TODO BUY NOW BUTTON NOT CLICKABLE IN LOADING
        }
        <div className={styles.layout__footer__buyNow__button}>
          <Button
            customClassName="buttonShine buyNowShine"
            onClick={() => {
              initialisePaymentService();
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default BuyNowFooter;
