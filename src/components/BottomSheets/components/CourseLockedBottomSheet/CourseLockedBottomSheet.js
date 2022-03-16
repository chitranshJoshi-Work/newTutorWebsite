import React from "react";
import styles from "./CourseLockedBottomSheet.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const CourseLockedBottomSheet = ({
  src,
  mainText,
  subText,
  btnText,
  closeOnBtnText,
  viewAllSubText,
  boldSubText,
  state = false,
  dispatcher = false,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const courseData = useSelector(
    (state) => state.bottomSheetReducer?.showCourseLockedBottomSheet
  );

  const handleClose = () => {
    if (dispatcher) {
      dispatcher();
    } else {
      dispatch(actionCreator.showCourseLockedBottomSheetAction(false));
    }
  };

  return (
    <Modal showModal={state} handleClose={handleClose}>
      <div className={styles.CourseLocked}>
        <div className={styles.CourseLocked__image}>
          <Image
            src={src || getAwsAssets("lockedIcon.svg", "bottomSheets")}
            width="68px"
            height="68px"
            alt={t(
              "components.bottomSheets.components.courseLockedBottomSheet.lockedIcon",
              "lockedIcon"
            )}
          />
        </div>
        <h1 className={styles.CourseLocked__heading}>
          {mainText ||
            t(
              "components.bottomSheets.components.courseLockedBottomSheet.courseLocked",
              "Uh oh, course locked!"
            )}
        </h1>
        <p className={styles.CourseLocked__subtext}>
          {subText ||
            t(
              "components.bottomSheets.components.courseLockedBottomSheet.payPendingInstalmentsToUnlockCourse",
              "Pay your pending instalments to unlock and access your course now."
            )}
          {boldSubText && <span>{boldSubText}</span>}
        </p>
        {btnText ? (
          <Button {...(closeOnBtnText ? { onClick: handleClose } : {})}>
            {btnText}
          </Button>
        ) : (
          <Button>
            {t(
              "components.bottomSheets.components.courseLockedBottomSheet.payPendingInstalments",
              "Pay Pending Instalment"
            )}{" "}
            - ₹1,000/-
          </Button>
        )}
        {viewAllSubText ? (
          <p className={styles.CourseLocked__viewAllInst} onClick={handleClose}>
            {viewAllSubText}
          </p>
        ) : (
          <p className={styles.CourseLocked__viewAllInst}></p>
        )}
      </div>
    </Modal>
  );
};

export default CourseLockedBottomSheet;
