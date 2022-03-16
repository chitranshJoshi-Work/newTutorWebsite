import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import CONSTANTS from "./constants";
import BOTTOMSHEETCONSTANTS from "@/root/src/components/BottomSheets/store/constants";
import {
  getTabListService,
  getPriceActionService,
  getCourseOverviewService,
  postLikeCourseService,
  getUserDetailsActionService,
  getOrgDetailsService,
  postTightOnBudgetBottomSheetClose,
  funnelTrackingService,
} from "./services";

import {
  getCourseCouponStudentOverview,
  getCourseCouponListStudent,
  applyCourseCouponStudent,
  removeCourseCouponStudent,
} from "@/src/graphApis/index";
import { executeQuery } from "@/src/graphApis/graph";
import { store } from "@/root/store";
import { applyCouponFakeLoading, tightOnBudgetBottomsheet } from "./actions";
import toast from "react-hot-toast";

function* getTabListsSaga(data) {
  // console.log("in tablist saga------------------------------");
  yield put({
    type: CONSTANTS.GET_TAB_LIST_LOADER,
    tabListLoading: true,
  });
  try {
    const response = yield call(getTabListService, {
      data,
    });
    // console.log(response.data.data, "------------------------------------");
    yield put({
      type: CONSTANTS.GET_TAB_LIST_LOADER,
      tabListLoading: false,
    });
    yield put({
      type: CONSTANTS.GET_TAB_LIST_DATA_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    // console.log(error, "===========");
    yield put({
      type: CONSTANTS.GET_TAB_LIST_DATA_FAILURE,
      tabListLoading: false,
      tabListFailure: true,
    });
  }
}

function* getPriceActionSaga(data) {
  console.log("in price saga------------------------------");

  yield put({
    type: CONSTANTS.GET_COURSE_PRICE_LOADER,
    priceDetailsLoading: true,
  });
  try {
    const response = yield call(getPriceActionService, {});
    console.log(response.data.data, "------------------------------------");
    yield put({
      type: CONSTANTS.GET_COURSE_PRICE_LOADER,
      priceDetailsLoading: false,
    });
    yield put({
      type: CONSTANTS.GET_COURSE_PRICE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    // console.log(error, "===========");
    yield put({
      type: CONSTANTS.GET_COURSE_PRICE_FAILURE,
      priceDetailsLoading: false,
      priceDetailsFailure: true,
    });
  }
}

function* getCourseOverviewSaga(data) {
  console.log("in course overview saga------------------------------", data);
  console.log(data);
  // console.log(getCourseOverviewService);
  if (data?.payload?.isLoading) {
    yield put({
      type: CONSTANTS.GET_OVERVIEW_DATA_LOADER,
      overViewDetailsLoading: true,
    });
  }
  try {
    if (data?.payload?.isDelay) {
      yield delay(1500);
    }
    const response = yield call(getCourseOverviewService, {
      courseId: data.payload?.courseId,
    });
    // console.log(response.data.data, "------------------------------------");
    yield put({
      type: CONSTANTS.GET_OVERVIEW_DATA_LOADER,
      overViewDetailsLoading: false,
    });
    yield put({
      type: CONSTANTS.GET_OVERVIEW_DATA_SUCCESS,
      payload: response.data.data,
    });

    yield put({
      type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS,
      payload: {
        courseIds: [`${data.payload?.courseId}`],
        isBundlingCourse: false,
      },
    });
  } catch (error) {
    // console.log(error, "===========");
    yield put({
      type: CONSTANTS.GET_OVERVIEW_DATA_FAILURE,
      overViewDetailsLoading: false,
      overViewDetailsFailure: true,
    });
  }
}
function* postLikeCourseSaga(data) {
  console.log("in post like course saga------------------------------");
  // console.log(data);
  try {
    const response = yield call(postLikeCourseService, {
      ...data.payload,
    });
    // console.log(response.data.data, "------------------------------------");
    yield put({
      type: CONSTANTS.POST_LIKE_COURSE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    // console.log(error, "===========");
    yield put({
      type: CONSTANTS.POST_LIKE_COURSE_FAILURE,
      overViewDetailsLoading: false,
      overViewDetailsFailure: true,
    });
  }
}
function* getUserDetailsActionSaga(data) {
  console.log("in get user details saga------------------------------");
  console.log(data);
  try {
    const response = yield call(getUserDetailsActionService, {
      ...data.payload,
    });
    console.log(
      response.data.data,
      "get user details------------------------------------"
    );
    yield put({
      type: "SET_USER_DETAILS_DATA",
      payload: response.data.data,
    });
  } catch (error) {
    // console.log(error, "===========");
    yield put({
      type: CONSTANTS.GET_USER_DETAILS_ERROR,
      overViewDetailsLoading: false,
      overViewDetailsFailure: true,
    });
  }
}
function* getOrgDetailsSaga(data) {
  console.log("in get org details saga------------------------------");
  try {
    const response = yield call(getOrgDetailsService, {
      ...data.payload,
    });
    console.log(response.data, "------------------------------------");
    yield put({
      type: "SET_ORG_DETAILS_DATA",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error, "===========");
    yield put({
      type: CONSTANTS.GET_ORG_DETAILS_FAILURE,
    });
  }
}

function* getGraphCoursePriceDetailsSaga(data) {
  yield put({
    type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_LOADER,
    graphCourseDataLoading: true,
    graphCourseDataStatus: "",
  });

  let currentCouponCode = data.payload.currentCouponCode;

  let priceDetailsPayload = { ...data.payload };

  console.log("+++++priceDetailsPayload", priceDetailsPayload);

  const response = yield call(executeQuery, {
    variables: { ...priceDetailsPayload },
    query: getCourseCouponStudentOverview,
  });

  let courseId =
    store?.getState()?.overviewReducer?.overViewDetails?.course?.metaData?.id;

  if (response.status >= 200 && response.status <= 300) {
    if (!response.hasErrors) {
      yield put({
        type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_SUCCESS,
        graphCourseDataLoading: false,
        graphCourseDataError: false,
        graphCourseData: response.data.data,
        graphCourseDataStatus: "SUCCESS",
        currentCouponCode: currentCouponCode ? currentCouponCode : {},
      });

      yield put({
        type: CONSTANTS.GET_GRAPH_COUPONS_LIST,
        payload: {
          variables: {
            courseId: `${courseId}`,
            limit: 20,
            offset: 0,
          },
        },
      });
    } else {
      //status > 200 && <300 but error
      toast.error(response.message);
      yield put({
        type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_FAILURE,
        graphCourseDataLoading: false,
        graphCourseDataError: true,
        // graphCourseData: response.data.data,
        graphCourseDataStatus: "FAILURE",
      });
    }
  } else {
    //Status is undefined
    toast.error(response.message);
    yield put({
      type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_FAILURE,
      graphCourseDataLoading: false,
      graphCourseDataError: true,
      // graphCourseData: response.data.data,
      graphCourseDataStatus: "FAILURE",
    });
    // showErrorToaster &&
  }
}

function* getGraphCouponsListSaga(data) {
  yield put({
    type: CONSTANTS.GET_GRAPH_COUPONS_LIST_LOADER,
    graphCourseCouponListDataLoading: true,
    graphCourseCouponListDataStatus: "",
  });

  const response = yield call(executeQuery, {
    ...data.payload,
    query: getCourseCouponListStudent,
  });

  let currentCouponsListData = store?.getState()?.getCurrentCouponsListData;

  //console.log(response, '*****graphResponse');
  //console.log(data.payload.variables.offset == 0 || !data.payload.variables.offset, 'data.payload.code');

  if (response.status >= 200 && response.status <= 300) {
    if (!response.hasErrors) {
      yield put({
        type: CONSTANTS.GET_GRAPH_COUPONS_LIST_SUCCESS,
        graphCourseCouponListDataLoading: false,
        graphCourseCouponListDataError: false,
        graphCourseCouponListData:
          data.payload.variables.offset == 0 || !data.payload.variables.offset
            ? response.data.data
            : {
                ...response.data.data,
                coupons: [
                  ...currentCouponsListData.coupons,
                  ...response.data.data.coupons,
                ],
              },
        graphCourseCouponListDataStatus: "SUCCESS",
      });
    } else {
      yield put({
        type: CONSTANTS.GET_GRAPH_COUPONS_LIST_FAILURE,
        graphCourseCouponListDataLoading: false,
        graphCourseCouponListDataError: true,
        graphCourseCouponListData: response.data.data,
        graphCourseCouponListDataStatus: "FAILURE",
      });
    }
  } else {
    yield put({
      type: CONSTANTS.GET_GRAPH_COUPONS_LIST_FAILURE,
      graphCourseCouponListDataLoading: false,
      graphCourseCouponListDataError: true,
      // graphCourseCouponListData: response.data.data,
      graphCourseCouponListDataStatus: "FAILURE",
    });
  }
}

function* applyCouponSaga(data) {
  yield put({
    type: CONSTANTS.APPLY_COURSE_COUPON_LOADER,
    graphCourseCouponListDataLoading: true,
    graphCourseCouponListDataStatus: "",
  });

  const response = yield call(executeQuery, {
    variables: { ...data.payload.variables },
    query: applyCourseCouponStudent,
  });

  console.log("+++response", response);

  let courseId =
    store?.getState()?.overviewReducer?.overViewDetails?.course?.metaData?.id;

  if (response.status >= 200 && response.status <= 300) {
    if (!response.hasErrors) {
      yield put({
        type: BOTTOMSHEETCONSTANTS.BOTTOMSHEET_APPLY_COUPON,
        payload: false,
      });

      yield put({
        type: CONSTANTS.APPLY_COURSE_COUPON_SUCCESS,
        payload: response,
      });

      // yield put({
      //   type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS,
      //   payload: {
      //     courseIds: [`${courseId}`],
      //     isBundlingCourse: false,
      //   },
      // });
    } else {
      //status > 200 && <300 but error

      toast.error(response?.message);

      yield put({
        type: CONSTANTS.APPLY_COURSE_COUPON_FAILURE,
      });
    }
  } else {
    //Status is undefined

    toast.error(response?.message);
    yield put({
      type: CONSTANTS.APPLY_COURSE_COUPON_FAILURE,
    });
  }
}

function* applyCouponFakeLoadingSaga(data) {
  yield put({
    type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_LOADER,
    graphCourseDataLoading: true,
    graphCourseDataStatus: "",
  });

  yield delay(100);

  yield put({
    type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS_LOADER,
    graphCourseDataLoading: false,
    graphCourseDataStatus: "",
  });
}
function* tightOnBudgetBottomsheetCloseSaga(data) {
  try {
    // const response = yield call(postTightOnBudgetBottomSheetClose, {
    //   ...data.payload,
    // });
    console.log(response.data, "------------------------------------");
  } catch (error) {
    console.log(error, "===========");
  }
}

function* removeCouponSaga(data) {
  yield put({
    type: CONSTANTS.REMOVE_COURSE_COUPON_LOADER,
    graphCourseCouponListDataLoading: true,
    graphCourseCouponListDataStatus: "",
  });

  const response = yield call(executeQuery, {
    variables: { ...data.payload.variables },
    query: removeCourseCouponStudent,
  });

  console.log("+++response", response);

  let courseId =
    store?.getState()?.overviewReducer?.overViewDetails?.course?.metaData?.id;

  if (response.status >= 200 && response.status <= 300) {
    toast.success("Coupon Removed Successfully");

    if (!response.hasErrors) {
      yield put({
        type: BOTTOMSHEETCONSTANTS.BOTTOMSHEET_APPLY_COUPON,
        payload: false,
      });

      yield put({
        type: CONSTANTS.REMOVE_COURSE_COUPON_SUCCESS,
        payload: response,
      });

      yield put({
        type: CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS,
        payload: {
          courseIds: [`${courseId}`],
          isBundlingCourse: false,
        },
      });
    } else {
      //status > 200 && <300 but error

      toast.error(response?.message);

      yield put({
        type: CONSTANTS.REMOVE_COURSE_COUPON_FAILURE,
      });
    }
  } else {
    //Status is undefined

    toast.error(response?.message);
    yield put({
      type: CONSTANTS.REMOVE_COURSE_COUPON_FAILURE,
    });
  }
}

function* funnelTracking(data) {
  console.log(data);
  try {
    const response = yield call(funnelTrackingService, {
      ...data.payload,
    });

    console.log("funnelTracking api response", response);
  } catch (error) {
    console.log("funnelTracking api error", error);
  }
}

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.GET_TAB_LIST_DATA, getTabListsSaga);
  yield takeLatest(CONSTANTS.GET_COURSE_PRICE, getPriceActionSaga);
  yield takeLatest(CONSTANTS.GET_OVERVIEW_DATA, getCourseOverviewSaga);
  yield takeLatest(CONSTANTS.POST_LIKE_COURSE, postLikeCourseSaga);
  yield takeLatest(CONSTANTS.GET_USER_DETAILS, getUserDetailsActionSaga);
  yield takeLatest(
    CONSTANTS.GET_GRAPH_COURSE_PRICE_DETAILS,
    getGraphCoursePriceDetailsSaga
  );
  yield takeLatest(CONSTANTS.GET_GRAPH_COUPONS_LIST, getGraphCouponsListSaga);
  yield takeLatest(CONSTANTS.APPLY_COURSE_COUPON, applyCouponSaga);
  yield takeLatest(CONSTANTS.REMOVE_COURSE_COUPON, removeCouponSaga);
  yield takeLatest(
    CONSTANTS.APPLY_COUPON_FAKE_LOADING,
    applyCouponFakeLoadingSaga
  );
  yield takeLatest(CONSTANTS.GET_ORG_DETAILS, getOrgDetailsSaga);
  yield takeLatest(
    CONSTANTS.TIGHT_BUDGET_BOTTOMSHEET_CLOSE,
    tightOnBudgetBottomsheetCloseSaga
  );
  yield takeLatest(CONSTANTS.FUNNEL_TRACKING, funnelTracking);
}
