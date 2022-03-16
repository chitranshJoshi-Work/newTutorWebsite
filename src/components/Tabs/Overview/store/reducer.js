import CONSTANTS from "./constants";
const initialState = {
  tabListLoading: false,
  tabListFailure: false,
  tabListData: {},

  overViewDetailsLoading: false,
  overViewDetailsFailure: false,
  overViewDetails: {},

  priceDetailsLoading: false,
  priceDetailsFailure: false,
  priceDetails: {},

  userDetailsLoading: false,
  userDetailsFailure: false,
  userDetails: {},

  postLikeCourseSuccess: false,
  postLikeCourseError: false,
  isCourseLiked: false,
  //price Details
  graphCourseData: {},
  graphCourseDataStatus: "",
  graphCourseDataLoading: false,
  graphCourseDataError: false,

  //coupon Details
  graphCourseCouponListData: {},
  graphCourseCouponListDataStatus: "",
  graphCourseCouponListDataLoading: false,
  graphCourseCouponListDataError: false,

  showCouponsEverywhere: false,
  multipleCouponsConditions: 2,
  currentCouponCode: {},

  //apply Coupon
  applyCouponData: {},
  applyCouponDataStatus: "",
  applyCouponDataLoading: false,
  applyCouponDataError: false,

  //remove Coupon
  removeCoupon: {},
  removeCouponStatus: "",
  removeCouponLoading: false,
  removeCouponError: false,

  stateSelected: "",
  showApplyCouponPopup: "",
};

const addTabListsFn = (state, action) => {
  // console.log(action.payload, state, "addTabListsFn--------------------");
  // console.log({ ...state, tabListData: action.payload }, "state--");
  return {
    ...state,
    tabListData: action.payload,
    tabListLoading: false,
    tabListFailure: false,
  };
};
const selectedState = (state, action) => {
  return {
    ...state,
    stateSelected: action?.payload,
  };
};
const priceDetailsFn = (state, action) => {
  return {
    ...state,
    priceDetails: action.payload,
    priceDetailsLoading: false,
    priceDetailsFailure: false,
  };
};

const overViewDetailsFn = (state, action) => {
  return {
    ...state,
    overViewDetails: action.payload,
    overViewDetailsLoading: false,
    overViewDetailsFailure: false,
  };
};
const userDetailsFn = (state, action) => {
  return {
    ...state,
    userDetailsFailure: false,
    userDetailsLoading: false,
    userDetails: action.payload,
  };
};

const getGraphCourseFn = (state, action) => {
  return {
    ...state,
    graphCourseDataLoading: action.graphCourseDataLoading,
    graphCourseDataStatus: action.graphCourseDataStatus,
  };
};

const getGraphCourseSuccessFn = (state, action) => {
  return {
    ...state,
    graphCourseData: action.graphCourseData,
    graphCourseDataLoading: action.graphCourseDataLoading,
    graphCourseDataError: action.graphCourseDataError,
    graphCourseDataStatus: action.graphCourseDataStatus,
    currentCouponCode: action.currentCouponCode,
  };
};

const getGraphCourseFailureFn = (state, action) => {
  return {
    ...state,
    graphCourseData: action.graphCourseData,
    graphCourseDataLoading: action.graphCourseDataLoading,
    graphCourseDataError: action.graphCourseDataError,
    graphCourseDataStatus: action.graphCourseDataStatus,
  };
};

const getGraphCouponListFn = (state, action) => {
  return {
    ...state,
    graphCourseCouponListDataLoading: true,
    graphCourseCouponListDataStatus: "",
  };
};

const getGraphCouponListSuccessFn = (state, action) => {
  let { showCouponsEverywhere, multipleCouponsConditions } = state;
  let { graphCourseCouponListData } = action;

  if (graphCourseCouponListData) {
    // console.log(graphCourseCouponListData.totalCount, '%%%%%totalCount');
    if (graphCourseCouponListData.totalCount > 0) {
      showCouponsEverywhere = true;
      if (graphCourseCouponListData.inVisibleCouponCount >= 1) {
        multipleCouponsConditions = 1;
      } else {
        multipleCouponsConditions = 2;
      }
    } else if (graphCourseCouponListData.inVisibleCouponCount >= 1) {
      showCouponsEverywhere = true;
      multipleCouponsConditions = 3;
    } else if (
      graphCourseCouponListData.totalCount == 0 &&
      graphCourseCouponListData.inVisibleCouponCount == 0
    ) {
      showCouponsEverywhere = false;
    }
  }
  return {
    ...state,
    graphCourseCouponListData: action.graphCourseCouponListData,
    graphCourseCouponListDataLoading: action.graphCourseCouponListDataLoading,
    graphCourseCouponListDataError: action.graphCourseCouponListDataError,
    graphCourseCouponListDataStatus: action.graphCourseCouponListDataStatus,
    showCouponsEverywhere,
    multipleCouponsConditions,
  };
};

const getGraphCouponListFailureFn = (state, action) => {
  return {
    ...state,
    graphCourseCouponListData: action.graphCourseCouponListData,
    graphCourseCouponListDataLoading: action.graphCourseCouponListDataLoading,
    graphCourseCouponListDataError: action.graphCourseCouponListDataError,
    graphCourseCouponListDataStatus: action.graphCourseCouponListDataStatus,
  };
};

const applyCouponFn = (state, action) => {
  return {
    ...state,
    applyCouponDataLoading: true,
  };
};

const applyCouponSuccessFn = (state, action) => {
  return {
    ...state,
    applyCouponDataLoading: false,
    applyCouponData: action.payload,
    applyCouponDataError: false,
    showApplyCouponPopup: true,
  };
};

const applyCouponFailureFn = (state, action) => {
  return {
    ...state,
    applyCouponDataLoading: false,
    applyCouponDataError: true,
  };
};

const applyCouponPopupFn = (state, action) => {
  return { ...state, showApplyCouponPopup: action.payload };
};
const funnelTrackingHistoryObjectFn = (state, action) => {
  return {
    ...state,
    funnelTrackingHistoryObject: {
      ...state?.funnelTrackingHistoryObject,
      ...action.payload,
    },
  };
};
const reducer = (state = initialState, action) => {
  // console.log(action, "00000-0=");
  switch (action.type) {
    case CONSTANTS.GET_TAB_LIST_DATA_LOADER:
      return { ...state, tabListLoading: true, tabListFailure: false };
    case CONSTANTS.GET_TAB_LIST_DATA_FAILURE:
      return { ...state, tabListFailure: true, tabListLoading: false };
    case CONSTANTS.GET_TAB_LIST_DATA_SUCCESS:
      return addTabListsFn(state, action);

    //
    case CONSTANTS.GET_OVERVIEW_DATA_LOADER:
      return {
        ...state,
        overViewDetailsLoading: true,
        overViewDetailsFailure: false,
      };
    case CONSTANTS.GET_OVERVIEW_DATA_FAILURE:
      return {
        ...state,
        overViewDetailsFailure: true,
        overViewDetailsLoading: false,
      };
    case CONSTANTS.SET_OVERVIEW_DATA_DIRECTLY_IN_STORE:
      return {
        ...state,
        overViewDetails: { ...action.payload },
        overViewDetailsLoading: false,
      };
    case CONSTANTS.GET_OVERVIEW_DATA_SUCCESS:
      return overViewDetailsFn(state, action);
    //
    case CONSTANTS.GET_COURSE_PRICE_SUCCESS:
      return priceDetailsFn(state, action);

    //
    case CONSTANTS.GET_USER_DETAILS_LOADER:
      return {
        ...state,
        userDetailsLoading: true,
        userDetailsFailure: false,
      };
    case CONSTANTS.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        userDetailsFailure: true,
        userDetailsLoading: false,
      };
    case CONSTANTS.GET_USER_DETAILS_SUCCESS:
      return userDetailsFn(state, action);
    case CONSTANTS.POST_LIKE_COURSE_ERROR:
      return {
        ...state,
        postLikeCourseError: true,
        postLikeCourseSuccess: false,
      };
    case CONSTANTS.POST_LIKE_COURSE_SUCCESS:
      return {
        ...state,
        postLikeCourseError: false,
        postLikeCourseSuccess: true,
      };
    case CONSTANTS.POST_LIKE_COURSE_RESET: {
      return {
        ...state,
        postLikeCourseError: false,
        postLikeCourseSuccess: false,
      };
    }

    case CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_LOADER:
      return getGraphCourseFn(state, action);
    case CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_SUCCESS:
      return getGraphCourseSuccessFn(state, action);
    case CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_FAILURE:
      return getGraphCourseFailureFn(state, action);

    case CONSTANTS.GET_GRAPH_COUPONS_LIST_LOADER:
      return getGraphCouponListFn(state, action);
    case CONSTANTS.GET_GRAPH_COUPONS_LIST_SUCCESS:
      return getGraphCouponListSuccessFn(state, action);
    case CONSTANTS.GET_GRAPH_COUPONS_LIST_FAILURE:
      return getGraphCouponListFailureFn(state, action);

    case CONSTANTS.APPLY_COURSE_COUPON_LOADER:
      return applyCouponFn(state, action);
    case CONSTANTS.APPLY_COURSE_COUPON_SUCCESS:
      return applyCouponSuccessFn(state, action);
    case CONSTANTS.APPLY_COURSE_COUPON_FAILURE:
      return applyCouponFailureFn(state, action);
    case CONSTANTS.SET_SELECTED_STATE:
      return selectedState(state, action);
    case CONSTANTS.APPLY_COUPON_SUCCESS_POPUP:
      return applyCouponPopupFn(state, action);
    case CONSTANTS.FUNNEL_TRACKING_HISTORY_OBJECT:
      return funnelTrackingHistoryObjectFn(state, action);
    default:
      return state;
  }
};
export default reducer;
