/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CouponData from "./staticData";
// import TempModal from "@/pages/[courseId]/[tabId]/TempModalComponent";
import Popup from "@/UIElements/Popup";
import Button from "@/UIElements/Button/index";
import RightArrowIcon from "@/src/components/Tabs/Content/icons/RightArrowIcon";

import Image from "next/image";
import { getAwsAssets } from "@/root/src/utils";
import ApplyCouponBottomSheet from "@/root/src/components/BottomSheets/components/ApplyCouponBottomSheet/ApplyCouponBottomSheet";
import BottomSheets from "@/root/src/components/BottomSheets";

import { showApplyCouponBottomSheetAction } from "@/root/src/components/BottomSheets/store/actions";
import {
  applyCourseCouponAction,
  applyCouponFakeLoading,
  getGraphCoursePriceDetailsAction,
  handleShowCouponAppliedPopup,
  removeCourseCouponAction,
} from "@/src/components/Tabs/Overview/store/actions";
import { useRouter } from "next/router";

const Coupon = () => {
  //   const [apiCouponList, setApiResponse] = useState(
  //     CouponData.data.coupons.map((item, i) => {
  //       return {
  //         ...item.coupon,
  //         isApplied: 0,
  //       };
  //     })
  //   );

  const showApplyCouponPopup = useSelector(
    (state) => state?.overviewReducer?.showApplyCouponPopup
  );

  const [currentAppliedCoupon, setCurrentAppliedCoupon] = useState(null);
  const [inputCouponCode, changeCouponCodeValue] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const graphCouponListData = useSelector(
    (state) => state?.overviewReducer?.graphCourseCouponListData
  );

  const graphCouponList = graphCouponListData?.coupons;

  let studentCouponList = graphCouponList ? [...graphCouponList] : [];

  console.log("++studentCouponList", studentCouponList);

  const handleCouponApply = (coupon, i, close) => {
    //fake logic

    // dispatch(applyCouponFakeLoading());

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
      handleShowModal(false);
    }
  };

  const handleCouponRemove = (coupon) => {
    dispatch(
      removeCourseCouponAction({
        variables: {
          code: coupon.code,
          redemptionId: coupon.redeemId,
        },
      })
    );
  };

  console.log("++++showApplyCouponPopup, ", showApplyCouponPopup);

  let couponsAvailableCount = `Available Coupons (${graphCouponListData?.totalCount})`;
  return (
    <div className="couponsDiv ">
      {showApplyCouponPopup ? (
        <Popup
          showPopup={showApplyCouponPopup}
          handleClose={() => {
            handleShowCouponAppliedPopup(false);
          }}
        >
          <div className="couponsAppliedPopup">
            <Image
              src={getAwsAssets("CouponSuccess.gif", "Overview")}
              className="GIFCoupons"
              width="80"
              height="80"
            />
            <div className="couponSuccessApplied">Coupon code Applied!</div>
            <div className="couponSuccessAppliedText">
              Your coupon{" "}
              <span>
                {`"`}
                {currentAppliedCoupon?.code}
                {`"`}
              </span>{" "}
              has been successfully applied.
            </div>
            <Button
              className="viewALLBtnMobile"
              onClick={() => {
                //   dispatch(applyCouponFakeLoading());

                dispatch(
                  getGraphCoursePriceDetailsAction({
                    courseIds: [`${router.query.courseId}`],
                    isBundlingCourse: false,
                  })
                );
                dispatch(handleShowCouponAppliedPopup(false));
              }}
              style={{ marginTop: "25px", fontWeight: "600" }}
              // outline
            >
              Done
            </Button>
          </div>
        </Popup>
      ) : null}
      <div className="CouponTop blockSlide">
        <div className="Label">Available Offers</div>
        {studentCouponList && studentCouponList.length > 4 ? (
          <Button
            className="viewALLBtnMobile"
            onClick={() => {
              // handleShowModal(true);
              dispatch(showApplyCouponBottomSheetAction(true));
            }}
            // outline
          >
            View All
            <RightArrowIcon />
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="CouponBottom blockSlide">
        {studentCouponList &&
          studentCouponList.map(({ coupon }, i) => {
            if (i <= 7) {
              return (
                <div
                  key={i}
                  className={
                    coupon.redeemId ? "coupon couponApplied" : "coupon"
                  }
                  onClick={() => {
                    if (coupon.redeemId) {
                      handleCouponRemove(coupon);
                    } else {
                      handleCouponApply(coupon, i);
                    }

                    //applyCoupon
                  }}
                >
                  {!coupon.redeemId ? (
                    <Image
                      src={getAwsAssets("couponUnappliead.svg", "Overview")}
                      className="SVGCoupons"
                      height="16"
                      width="16"
                    />
                  ) : (
                    <Image
                      src={getAwsAssets("couponApplied.svg", "Overview")}
                      className="SVGCoupons"
                      height="16"
                      width="16"
                    />
                  )}
                  <div style={{ marginLeft: "12px" }}>
                    <div className="couponLabel">{coupon?.code}</div>
                    <div className="couponName">{coupon?.label}</div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default React.memo(Coupon);
