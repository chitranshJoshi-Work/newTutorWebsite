import CONSTANTS from "./constants";
export const getTabListAction = (payload) => {
  // console.log(payload);
  // console.log("called action--------------------------");
  return {
    type: CONSTANTS.GET_TAB_LIST_DATA,
    payload,
  };
};
export const getCourseDetailsAction = (payload) => {
  console.log(payload);

  // console.log("called action--------------------------", payload);
  return {
    type: CONSTANTS.GET_OVERVIEW_DATA,
    payload,
  };
};
export const getPriceAction = (payload) => {
  console.log(payload);
  console.log("called action--------------------------");
  return {
    type: CONSTANTS.GET_COURSE_PRICE,
    payload,
  };
};
export const getUserDetailsAction = (payload) => {
  console.log(payload);
  console.log("called action--------------------------");
  return {
    type: CONSTANTS.GET_USER_DETAILS,
    payload,
  };
};
export const setOverviewDataDirectlyInStore = (payload) => {
  return {
    type: CONSTANTS.SET_OVERVIEW_DATA_DIRECTLY_IN_STORE,
    payload,
  };
};
export const getOrgDetailsAction = (payload) => {
  console.log(payload);
  console.log("called action--------------------------");
  return {
    type: CONSTANTS.GET_ORG_DETAILS,
    payload,
  };
};
export const postLikeAction = (payload) => {
  console.log(payload);
  console.log("called action--------------------------");
  return {
    type: CONSTANTS.POST_LIKE_COURSE,
    payload,
  };
};
export const postLikeResetAction = () => {
  return {
    type: CONSTANTS.POST_LIKE_COURSE_RESET,
  };
};

export const getGraphCoursePriceDetailsAction = (payload) => {
  // console.log('payload+++++source+++++source+++++source', payload);
  return {
    type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS,
    payload,
  };
};

export const getGraphCourseCouponsAction = (payload) => {
  console.log("payload", payload);
  return {
    type: CONSTANTS.GET_GRAPH_COUPONS_LIST,
    payload,
  };
};

export const applyCourseCouponAction = (payload) => {
  return {
    type: CONSTANTS.APPLY_COURSE_COUPON,
    payload,
  };
};

export const removeCourseCouponAction = (payload) => {
  return {
    type: CONSTANTS.REMOVE_COURSE_COUPON,
    payload,
  };
};

export const applyCouponFakeLoading = (payload) => {
  return {
    type: CONSTANTS.APPLY_COUPON_FAKE_LOADING,
    payload,
  };
};
export const tightOnBudgetBottomSheetCloseAction = (payload) => {
  return {
    type: CONSTANTS.TIGHT_BUDGET_BOTTOMSHEET_CLOSE,
    payload,
  };
};
export const setSelectedStateAction = (payload) => {
  return {
    type: CONSTANTS.SET_SELECTED_STATE,
    payload,
  };
};

export const handleShowCouponAppliedPopup = (payload) => {
  return {
    type: CONSTANTS.APPLY_COUPON_SUCCESS_POPUP,
    payload,
  };
};
export const funnelTrackAction = (payload) => {
  console.log(payload);

  return {
    type: CONSTANTS.FUNNEL_TRACKING,
    payload,
  };
};
export const funnelTrackHistoryObjectAction = (payload) => {
  console.log(payload);
  return {
    type: CONSTANTS.FUNNEL_TRACKING_HISTORY_OBJECT,
    payload,
  };
};
