import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import dateFormatPrice from "./utility";
const d = [
  {
    key: "Total Amount",
    value: {
      text: "₹1,026.27",
      color: "#000000",
    },
  },
  {
    key: "Instalments Paid",
    value: {
      text: "3/11",
      color: "#000000",
    },
  },
  {
    key: "Next Instalment Due Date",
    value: {
      text: "11th Mar, 2022",
      color: "#000000",
    },
  },
];
const PaidSummary = ({ installmentData = false, data }) => {
  console.log(installmentData, "installmentData");

  if (installmentData) {
    return (
      <div className={styles.PaidSummaryContainer}>
        {d.map((d, i) => (
          <div className={styles.PaidSummary} key={`${i}paid`}>
            <div
              className={
                i == 0
                  ? styles.PaidSummary__Left__AmountPaid
                  : styles.PaidSummary__Left__Date
              }
            >
              {d?.key}
            </div>
            <div
              className={
                i == 0
                  ? styles.PaidSummary__Right__Amount
                  : styles.PaidSummary__Right__Date
              }
              style={{ color: d?.value?.color }}
            >
              {d?.value?.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (data) {
    return (
      <div className={styles.PaidSummaryContainer}>
        <div className={styles.PaidSummary}>
          <div className={styles.PaidSummary__Left__AmountPaid}>
            Amount Paid
          </div>
          <div className={styles.PaidSummary__Right__Amount}>
            {data?.amount}
          </div>
        </div>
        <div className={styles.PaidSummary}>
          <div className={styles.PaidSummary__Left__Date}>Purchased Date</div>
          <div className={styles.PaidSummary__Right__Date}>
            {/* {new Date(data?.receiptDate)} */}
            {dateFormatPrice(data?.receiptDate)}
          </div>
        </div>
        <div className={styles.PaidSummaryContainer__Saved}>
          {data?.discountText}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.PaidSummaryContainer}>
      <div className={styles.PaidSummary}>
        <div className={styles.PaidSummary__Left}>
          <div className={styles.PaidSummary__Left__AmountPaid}>
            Amount Paid
          </div>
          <div className={styles.PaidSummary__Left__Date}>Date</div>
          <div className={styles.PaidSummary__Left__Time}>Time</div>
        </div>
        <div className={styles.PaidSummary__Right}>
          <div className={styles.PaidSummary__Right__Amount}>₹2,919/-</div>
          <div className={styles.PaidSummary__Right__Date}>31 Dec, 2021</div>
          <div className={styles.PaidSummary__Right__Time}>06:02 PM</div>
        </div>
      </div>
      <div className={styles.PaidSummaryContainer__Saved}>
        You saved ₹1,080 on this course
      </div>
    </div>
  );
};

export default React.memo(PaidSummary);
