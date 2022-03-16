import React, { useState } from "react";
import styles from "../style.module.scss";
import PricingDetails from "./PricingDetails";
import { useSelector } from "react-redux";
const mockData = {
  data: {
    coupons: [
      {
        coupon: {
          code: "TESTCOUPON15",
          label: "10% off up to ₹15",
          name: "TEST",
          expire: null,
        },
        priceDetails: [
          {
            label: "Course Price",
            value: "₹ 1,000/-",
            line: "doted",
            fontWeight: "bold",
            fontSize: "medium",
          },
          {
            label: "Discount",
            value: "- ₹ 10/-",
            line: "doted",
            fontWeight: "normal",
            fontSize: "small",
          },
          {
            label: "Coupon discount(TESTCOUPON15)",
            value: "- ₹ 15/-",
            line: "solid",
            fontWeight: "normal",
            fontSize: "small",
          },
          {
            label: "Amount Payable",
            value: "₹ 975.00/-",
            line: null,
            fontWeight: "bold",
            fontSize: "large",
          },
        ],
        priceBreackUp: [
          {
            label: "Course Price",
            value: "₹ 1000/-",
            line: "doted",
            fontWeight: "400",
            fontSize: "normal",
          },
          {
            label: "Discount 1.00%",
            color: "#FF392B",
            value: "- ₹ 10/-",
            line: "solid",
            fontWeight: "normal",
            fontSize: "small",
          },
          {
            label: "Coupon discount(TESTCOUPON15)",
            color: "#FF392B",
            value: "- ₹ 15/-",
            line: "solid",
            fontWeight: "normal",
            fontSize: "small",
            icon: "https://storage.googleapis.com/cp-prod-assets-public-as-sth1-gcs-w37fpj/cp-store-ui-revamp/couponTag.svg",
          },
        ],
        priceDetailNew: {
          label: "You Pay",
          finalPrice: "₹975/-",
          decoratedText: "₹ 1,000/-",
        },
      },
    ],
    label: {
      text: null,
      linkText: null,
      linkTextColor: "#009AE0",
      img: "",
      button: {
        text: "Buy Now for ₹975.00/-",
        val: 97500,
        color: "#009AE0",
      },
    },
    labelNew: {
      button: {
        bgColor: "#009AE0",
        text: "Buy Now",
        color: "#FAFAFA",
      },
      decoratedText: "",
      finalPrice: "₹975.00/-",
      discountPer: "2.50% OFF",
      val: 97500,
    },
  },
};
const PricingSection = () => {
  const [opened, setOpened] = useState(false);

  const pricingDetails = useSelector(
    (state) => state?.overviewReducer?.graphCourseData?.coupons?.[0]
  );
  const state = useSelector(
    (state) => state?.overviewReducer?.overViewDetails?.course
  );
  console.log("pricingDetails", pricingDetails);
  return (
    <>
      <div
        className={
          opened
            ? `${styles["accordion-item"]} ${styles["accordion-item--opened"]}`
            : styles["accordion-item"]
        }
        {...{
          onClick: () => {
            setOpened(!opened);
          },
        }}
      >
        <>
          <div {...{ className: styles["accordion-item__line"] }}>
            <span {...{ className: styles["accordion-item__title"] }}>
              {pricingDetails?.priceDetailNew?.label}
            </span>
            <div className={styles.Pricing__Heading__Pricing}>
              <span className={styles.Pricing__Heading__Pricing__ActualPrice}>
                {pricingDetails?.priceDetailNew?.decoratedText}
              </span>
              <span className={styles.Pricing__Heading__Pricing__DiscountPrice}>
                {pricingDetails?.priceDetailNew?.finalPrice}
              </span>
              <span {...{ className: styles["accordion-item__icon"] }} />
            </div>
          </div>
          <div {...{ className: styles["accordion-item__inner"] }}>
            <div {...{ className: styles["accordion-item__content"] }}>
              {state?.metaData?.isPurchased ? null : (
                <PricingDetails pricingDetails={pricingDetails} />
              )}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default PricingSection;
