/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  GET_ORG_DETAILS: "GET_ORG_DETAILS",
  GET_ORG_DETAILS_SUCCESS: "GET_ORG_DETAILS_SUCCESS",
  GET_ORG_DETAILS_FAILURE: "GET_ORG_DETAILS_FAILURE",
  GET_ORG_DETAILS_LOADER: "GET_ORG_DETAILS_LOADER",

  GET_OVERVIEW_DATA: "GET_OVERVIEW_DATA",
  GET_OVERVIEW_DATA_LOADER: "GET_OVERVIEW_DATA_LOADER",
  GET_OVERVIEW_DATA_SUCCESS: "GET_OVERVIEW_DATA_SUCCESS",
  GET_OVERVIEW_DATA_FAILURE: "GET_OVERVIEW_DATA_FAILURE",

  GET_TAB_LIST_DATA: "GET_TAB_LIST_DATA",
  GET_TAB_LIST_DATA_SUCCESS: "GET_TAB_LIST_DATA_SUCCESS",
  GET_TAB_LIST_DATA_FAILURE: "GET_TAB_LIST_DATA_FAILURE",
  GET_TAB_LIST_LOADER: "GET_TAB_LIST_LOADER",

  GET_COURSES_LIST_DATA: "GET_COURSES_LIST_DATA",
  GET_COURSES_LIST_DATA_SUCCESS: "GET_COURSES_LIST_DATA_SUCCESS",
  GET_COURSES_LIST_DATA_FAILURE: "GET_COURSES_LIST_DATA_FAILURE",

  GET_COURSE_PRICE: "GET_COURSE_PRICE",
  GET_COURSE_PRICE_SUCCESS: "GET_COURSE_PRICE_SUCCESS",
  GET_COURSE_PRICE_FAILURE: "GET_COURSE_PRICE_FAILURE",
  GET_COURSE_PRICE_LOADER: "GET_COURSE_PRICE_LOADER",

  POST_LIKE_COURSE: "POST_LIKE_COURSE",
  POST_LIKE_COURSE_SUCCESS: "POST_LIKE_COURSE_SUCCESS",
  POST_LIKE_COURSE_ERROR: "POST_LIKE_COURSE_ERROR",
  POST_LIKE_COURSE_RESET: "POST_LIKE_COURSE_RESET",

  GET_USER_DETAILS: "GET_USER_DETAILS",
  GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
  GET_USER_DETAILS_ERROR: "GET_USER_DETAILS_ERROR",
  GET_USER_DETAILS_LOADING: "GET_USER_DETAILS_LOADING",
  SET_OVERVIEW_DATA_DIRECTLY_IN_STORE: "SET_OVERVIEW_DATA_DIRECTLY_IN_STORE",

  GET_ORG_DETAILS: "GET_ORG_DETAILS",
  GET_ORG_DETAILS_SUCCESS: "GET_ORG_DETAILS_SUCCESS",
  GET_COURSE_PRICE_FAILURE: "GET_COURSE_PRICE_FAILURE",

  //GET GRAPH COURSE PRICE
  GET_GRAPH_COURSE_PRICE_DETAILS: "GET_GRAPH_COURSE_PRICE_DETAILS",
  GET_GRAPH_COURSE_PRICE_DETAILS_LOADER: `GET_GRAPH_COURSE_PRICE_DETAILS_LOADER`,
  GET_GRAPH_COURSE_PRICE_DETAILS_SUCCESS: `GET_GRAPH_COURSE_PRICE_DETAILS_SUCCESS`,
  GET_GRAPH_COURSE_PRICE_DETAILS_FAILURE: `GET_GRAPH_COURSE_PRICE_DETAILS_FAILURE`,

  //GET GRAPH COUPONS LIST
  GET_GRAPH_COUPONS_LIST: "GET_GRAPH_COUPONS_LIST",
  GET_GRAPH_COUPONS_LIST_LOADER: `GET_GRAPH_COUPONS_LIST_LOADER`,
  GET_GRAPH_COUPONS_LIST_SUCCESS: `GET_GRAPH_COUPONS_LIST_SUCCESS`,
  GET_GRAPH_COUPONS_LIST_FAILURE: `GET_GRAPH_COUPONS_LIST_FAILURE`,

  //APPLY GRAPH COUPON
  APPLY_COURSE_COUPON: "APPLY_COURSE_COUPON",
  APPLY_COURSE_COUPON_LOADER: `APPLY_COURSE_COUPON_LOADER`,
  APPLY_COURSE_COUPON_SUCCESS: `APPLY_COURSE_COUPON_SUCCESS`,
  APPLY_COURSE_COUPON_FAILURE: `APPLY_COURSE_COUPON_FAILURE`,

  //REMOVE GRAPH COUPON
  REMOVE_COURSE_COUPON: "REMOVE_COURSE_COUPON",
  REMOVE_COURSE_COUPON_LOADER: `REMOVE_COURSE_COUPON_LOADER`,
  REMOVE_COURSE_COUPON_SUCCESS: `REMOVE_COURSE_COUPON_SUCCESS`,
  REMOVE_COURSE_COUPON_FAILURE: `REMOVE_COURSE_COUPON_FAILURE`,

  //SHOW FAKE LOADING
  APPLY_COUPON_FAKE_LOADING: "APPLY_COUPON_FAKE_LOADING",

  TIGHT_BUDGET_BOTTOMSHEET_CLOSE: "TIGHT_BUDGET_BOTTOMSHEET_CLOSE",
  SET_SELECTED_STATE: "SET_SELECTED_STATE",

  //APPLY_COUPON
  APPLY_COUPON_SUCCESS_POPUP: "APPLY_COUPON_SUCCESS_POPUP",
  FUNNEL_TRACKING: "FUNNEL_TRACKING",
  FUNNEL_TRACKING_HISTORY_OBJECT: "FUNNEL_TRACKING_HISTORY_OBJECT",
};
// export const installmentsEnum = {
//   0: "UNPAID",
//   1: "PENDING",
//   2: "DUE",
//   3: "PAID",
// };
export const installmentsAlertStateEnum = {
  NO_ALERT: 0,
  DAYS_LEFT_EXPIRE: 1,
  COURSE_LOCKED: 2,
  TIGHT_BUDGET: 3,
};
export const trackIDMap = {
  appLaunch: 1,
  cardClick: 2,
  storeOverview: 3, //done
  courseOverview: 4, //done
  contentList: 5, //done
  contentView: 6, //done
  buyNow: 7, //done
  verifyOTP: 8, //done
  addToCart: 9, //done
  paymentFailed: 10, //done
  subscribeCourse: 11, //done
  courseList: 12,
  buyNowPage: 13,
};
