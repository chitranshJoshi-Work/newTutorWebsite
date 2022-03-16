import Modal from "@/src/components/UIElements/Modal";
import { getAwsAssets } from "@/root/src/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showApplyCouponBottomSheetAction } from "../../store/actions";
import { useTranslation } from "react-i18next";
import {
  applyCourseCouponAction,
  applyCouponFakeLoading,
  getGraphCoursePriceDetailsAction,
  removeCourseCouponAction,
} from "@/src/components/Tabs/Overview/store/actions";
import { useRouter } from "next/router";

const ApplyCouponBottomSheet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showApplyCouponBottomSheet
  );

  const graphCouponListData = useSelector(
    (state) => state?.overviewReducer?.graphCourseCouponListData
  );

  const [currentAppliedCoupon, setCurrentAppliedCoupon] = useState(null);

  const graphCouponList = graphCouponListData?.coupons;

  let studentCouponList = graphCouponList ? [...graphCouponList] : [];

  const [inputCouponCode, changeCouponCodeValue] = useState("");

  let couponsAvailableCount = `Available Coupons (${graphCouponListData?.totalCount})`;

  const router = useRouter();
  const handleCouponApply = (coupon, i, throughInput, close) => {
    //fake logic

    // dispatch(applyCouponFakeLoading());

    console.log("coupon111", coupon);
    if (throughInput) {
      coupon = { code: inputCouponCode };
    }

    dispatch(
      applyCourseCouponAction({
        variables: {
          courseId: router.query.courseId,
          code: coupon?.code,
        },
      })
    );

    setCurrentAppliedCoupon(coupon);

    if (close) {
      dispatch(showApplyCouponBottomSheetAction(false));
    }
  };

  let firstCouponCode = studentCouponList?.[0]?.coupon;

  useEffect(() => {
    console.log(studentCouponList, "+++++++graphCouponList");

    if (firstCouponCode?.redeemId) {
      changeCouponCodeValue(firstCouponCode?.code);
    }
  }, []);

  const handleCouponRemove = () => {
    dispatch(
      removeCourseCouponAction({
        variables: {
          code: firstCouponCode.code,
          redemptionId: firstCouponCode.redeemId,
        },
      })
    );
  };

  return (
    <Modal
      showModal={state}
      handleClose={() => {
        dispatch(showApplyCouponBottomSheetAction(false));
      }}
      header={
        <div className="couponModalHeader">
          <Image
            src={getAwsAssets("CouponList.svg", "Overview")}
            className="SVGCoupons"
            height="20px"
            width="20px"
            alt={t(
              "components.bottomSheets.components.applyCouponBottomSheet.couponlist",
              "couponlist"
            )}
          />
          <span className="couponModalHeader--title">
            {t(
              "components.bottomSheets.components.applyCouponBottomSheet.applyCoupons",
              "Apply Coupons"
            )}
          </span>
        </div>
      }
    >
      <div className="enterCoupon">
        <input
          className="enterCouponField"
          type="text"
          value={inputCouponCode}
          onChange={(e) => {
            changeCouponCodeValue(e.target.value.toUpperCase());
          }}
          placeholder={t(
            "components.bottomSheets.components.applyCouponBottomSheet.enterCouponCode",
            "Enter a coupon code"
          )}
        />

        <button
          // disabled={inputCouponCode.length > 3}
          style={{
            color:
              inputCouponCode?.length > 3 ? "var(--appAccentColor)" : "#999999",
          }}
          className="enterCouponButton"
          onClick={() => {
            if (firstCouponCode?.redeemId) {
              handleCouponRemove();
            } else {
              handleCouponApply({}, null, true);
            }

            // handleShowModal(false);
          }}
        >
          {!firstCouponCode?.redeemId
            ? t(
                "components.bottomSheets.components.applyCouponBottomSheet.apply",
                "APPLY"
              )
            : t(
                "components.bottomSheets.components.applyCouponBottomSheet.remove",
                "REMOVE"
              )}
        </button>
      </div>
      <div className="CouponModalLabel2">{couponsAvailableCount}</div>
      {studentCouponList &&
        studentCouponList.map(({ coupon }, i) => {
          // console.log("coupon111", coupon.code);

          return (
            <div
              key={i}
              className="couponModalDiv"
              onClick={() => {
                // this.handleCouponApply(couponList && couponList.coupon);
                //applyCoupon
              }}
            >
              <div key={i} className="CouponListItem">
                {coupon?.label ? (
                  <div className="CouponModalLabel">{coupon?.label}</div>
                ) : (
                  ""
                )}

                <div className="CouponModalRow1">
                  {coupon?.name ? (
                    <div className="CouponModalName">{coupon?.name}</div>
                  ) : (
                    ""
                  )}
                  {coupon?.expire ? (
                    <div className="CouponModalValid">
                      <Image
                        loading="lazy"
                        src={getAwsAssets("Clock.svg", "Overview")}
                        alt="lockIcon"
                        width="12px"
                        height="12px"
                      />

                      <span className="CouponModalValid--expire">
                        {coupon?.expire?.text
                          ? coupon?.expire?.text
                          : coupon.expire}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="CouponModalRow2">
                  {coupon?.code ? (
                    <div className="CouponModalCode">{coupon?.code}</div>
                  ) : (
                    ""
                  )}
                  <div
                    className="CouponModalLink"
                    onClick={() => handleCouponApply(coupon, i, false)}
                  >
                    {t(
                      "components.bottomSheets.components.applyCouponBottomSheet.apply",
                      "Apply"
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Modal>
  );
};

export default ApplyCouponBottomSheet;
