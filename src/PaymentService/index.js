import { store } from "@/root/store";
import { createOrderPostService, createCheckoutGetService } from "./services";
import { getPaymentObj } from "./getPaymentObj";
import {
  showFullScreenLoaderAction,
  showPaymentLoaderAction,
} from "@/src/components/BottomSheets/store/actions";

export const handleDeeplinkExecutedV2 = (jsonVal) => {
  // console.log(jsonVal)
  // alert("fired deeplink");
  //android
  window?.mobile?.onDeeplinkExecutedV2(jsonVal);
  //ios
  window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(jsonVal);
};

export const initialisePaymentService = async (payload) => {
  let storeState = store.getState();

  store.dispatch(showPaymentLoaderAction(true));

  let isCouponApplied = 0;
  let courseId =
    storeState?.overviewReducer?.overViewDetails?.course?.metaData?.id;
  let priceValue = storeState?.overviewReducer?.graphCourseData?.labelNew?.val;
  const graphCouponListData =
    storeState?.overviewReducer?.graphCourseCouponListData?.coupons;

  let firstCouponCode = graphCouponListData?.[0]?.coupon;

  if (firstCouponCode?.redeemId) {
    isCouponApplied = 1;
  }

  let paymentPayload = {
    courseList: [courseId],
    isCouponApplied: isCouponApplied,
    currentAmount: priceValue,
    couponCode: isCouponApplied ? firstCouponCode?.code : null,
    redemptionId: isCouponApplied ? firstCouponCode?.redeemId : null,
    state: "chatispur",
    deliveryAddressId: 0,
  };

  try {
    let createOrderPostServiceResponse = await createOrderPostService(
      paymentPayload
    );

    let orderId = createOrderPostServiceResponse?.data?.data?.orderId;
    let gatewayOrderId =
      createOrderPostServiceResponse?.data?.data?.gatewayOrderId;

    window.localStorage.setItem("orderId", orderId);

    let checkoutServiceResponse = await createCheckoutGetService(orderId);

    store.dispatch(showPaymentLoaderAction(false));

    if (checkoutServiceResponse?.data?.data?.notes) {
      handleDeeplinkExecutedV2(
        getPaymentObj(priceValue, gatewayOrderId, {
          ...checkoutServiceResponse?.data?.data?.notes,
        })
      );
    }

    console.log("checkoutServiceResponse", checkoutServiceResponse?.data?.data);
  } catch (err) {
    console.log("++++error", err);
  }
};
