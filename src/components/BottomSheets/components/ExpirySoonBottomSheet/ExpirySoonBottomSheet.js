import React from "react";
import styles from "./ExpirySoonBottomSheet.module.scss";
import Button from "@/root/src/components/UIElements/Button";
import Image from "next/image";
import Modal from "@/root/src/components/UIElements/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";
import { directDeepLink } from "@/root/src/common/deepLinks";

const ExpirySoonBottomSheet = ({
  mainText,
  detailText,
  showButton = true,
  subTextBelowBtn = true,

  dispatcher = false,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state) => state?.bottomSheetReducer?.showExpirySoonBottomSheet
  );
  const state = useSelector(
    (state) => state?.overViewReducer?.overViewDetails?.course
  );
  return (
    <Modal
      showModal={isOpen}
      handleClose={() => {
        if (dispatch) {
          dispatch(actionCreator.showExpirySoonBottomSheetAction(false));
        }
      }}
      header={"about to expire"}
    >
      <div className={styles.ExpirySoonBottomSheet}>
        <div className={styles.ExpirySoonBottomSheet__image}>
          <Image
            src={getAwsAssets("clockIcon.svg", "bottomSheets")}
            width="74px"
            height="74px"
            alt={t(
              "components.bottomSheets.components.expirySoonBottomSheet.clockIcon",
              "ClockIcon"
            )}
          />
        </div>
        <h1 className={styles.ExpirySoonBottomSheet__heading}>
          {state?.expiryPopup?.heading || "Expiring Soon :("}
        </h1>

        <p className={styles.ExpirySoonBottomSheet__subtext}>
          {state?.expiryPopup?.text}
        </p>

        <Button
          onClick={() =>
            directDeepLink(
              "",
              "SCREEN_STORE_LISTING"
            )({
              screen: "SCREEN_STORE_LISTING",
              paramOne: `tabCategoryId=2&categoryId=[${_.pluck(
                categories,
                "id"
              )}]&notInCourse=[${course.id}]&limit=8`,
              paramTwo: "",
              paramThree: "",
              paramFour: "",
            })
          }
        >
          {state?.expiryPopup?.cta1?.text}
        </Button>

        <p
          className={styles.ExpirySoonBottomSheet__viewAllInst}
          onClick={() =>
            directDeepLink(
              "",
              "SCREEN_STORE_LISTING"
            )({
              screen: "SCREEN_STORE_LISTING",
              paramOne: `tabCategoryId=2&categoryId=[${_.pluck(
                categories,
                "id"
              )}]&notInCourse=[${course.id}]&limit=8`,
              paramTwo: "",
              paramThree: "",
              paramFour: "",
            })
          }
        >
          {state?.expiryPopup?.cta2?.text}
        </p>
      </div>
    </Modal>
  );
};

export default ExpirySoonBottomSheet;
