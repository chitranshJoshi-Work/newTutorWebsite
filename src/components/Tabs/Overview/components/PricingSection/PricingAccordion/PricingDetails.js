import React from "react";
import styles from "../style.module.scss";
import Image from "next/image";

const PricingDetails = ({ pricingDetails }) => {
  return (
    <div className={styles.PricingDetails}>
      {pricingDetails?.priceBreackUp?.map((item, i) => (
        <div className={styles.PricingDetails__CoursePrice} key={`pricee${i}`}>
          <div
            className={styles.PricingDetails__CoursePrice__Text}
            style={{
              color: item?.color,
            }}
          >
            {item?.icon ? (
              <div className={styles.PricingDetails__Coupon__Text__Img}>
                <Image src={item?.icon} alt="c" height={16} width={16} />
              </div>
            ) : null}
            {item?.label}
          </div>
          <div className={styles.PricingDetails__CoursePrice__Price}>
            {item?.value}
          </div>
        </div>
      ))}

      {pricingDetails?.discountBreackUp?.length > 0 ? (
        <div className={styles.PricingDetails__Discount}>
          {pricingDetails?.discountBreackUp?.map((item, i) => {
            return (
              <div className={styles.PricingDetails__Coupon} key={`${i}coupo`}>
                <div className={styles.PricingDetails__Coupon__Text}>
                  {item?.icon ? (
                    <div className={styles.PricingDetails__Coupon__Text__Img}>
                      <Image src={item?.icon} alt="c" height={16} width={16} />
                    </div>
                  ) : null}
                  <div
                    className={styles.PricingDetails__Coupon__Text__CouponCode}
                  >
                    {item?.label}
                  </div>
                </div>
                <div className={styles.PricingDetails__Coupon__Price}>
                  {item?.value}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PricingDetails;
