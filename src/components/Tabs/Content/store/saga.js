import CONSTANTS, { CONTENT_LIMIT } from "./constants";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getActionObject } from "@/utils/index";
import parseError from "@/utils/parseError";
import {
  getCourseContentService,
  getCourseContentTestStatsService,
  getFreeCourseContentService,
} from "./services";
import { transformParentFolder } from "./transformers";

function* getCourseContentSaga(data) {
  // IF DATA IS GETTING REFETCHED BUT DON"T WANT A LOADER ON SCREEN
  if (!data?.payload?.skipLoader) {
    // CLEARING CURRENT STATE WHILE FETCHING NEW DETAILS
    const clearContentAction = yield call(
      getActionObject,
      CONSTANTS.CLEAR_COURSE_CONTENT
    );
    yield put({ ...clearContentAction });
    const loaderAction = yield call(
      getActionObject,
      CONSTANTS.GET_COURSE_CONTENT_LOADER
    );
    yield put({ ...loaderAction });
  }
  try {
    const apiCall = yield call(getCourseContentService, data?.payload);
    const apiRes = apiCall?.data?.data;
    // console.log("A______", apiRes);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_COURSE_CONTENT_SUCCESS,
      {
        courseContent: {
          apiRes: apiRes?.courseContent,
          offset: data?.payload?.offset || 0,
          hasMore: apiRes?.courseContent?.length >= data?.payload?.limit,
        },
        currentFolderDetails: apiRes?.metadata?.currentFolderDetails,
        parentFolderDetails: transformParentFolder(
          apiRes?.metadata?.parentFolderDetails
        ),
      }
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
  }
}

function* getCourseContentLoadMoreSaga(data) {
  const loaderAction = yield call(
    getActionObject,
    CONSTANTS.GET_COURSE_CONTENT_LOADER
  );
  yield put({ ...loaderAction });
  try {
    const apiCall = yield call(getCourseContentService, data?.payload);
    const apiRes = apiCall?.data?.data;
    // console.log("A______", apiRes);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_COURSE_CONTENT_LOADED_MORE,
      {
        courseContent: {
          apiRes: apiRes?.courseContent,
          offset: data?.payload?.offset,
          hasMore: apiRes?.courseContent?.length >= data?.payload?.limit,
        },
      }
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
  }
}

function* getFreeCourseContentSaga(data) {
  // CLEARING CURRENT STATE WHILE FETCHING NEW DETAILS
  const clearContentAction = yield call(
    getActionObject,
    CONSTANTS.CLEAR_FREE_COURSE_CONTENT
  );
  yield put({ ...clearContentAction });
  const loaderAction = yield call(
    getActionObject,
    CONSTANTS.GET_FREE_COURSE_CONTENT_LOADER
  );
  yield put({ ...loaderAction });
  try {
    const apiCall = yield call(getFreeCourseContentService, data?.payload);
    const apiRes = apiCall?.data?.data;
    // console.log("A______", apiRes);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_FREE_COURSE_CONTENT_SUCCESS,
      {
        courseContent: {
          apiRes: apiRes?.courseContent,
          offset: data?.payload?.offset || 0,
          hasMore: apiRes?.courseContent?.length >= data?.payload?.limit,
        },
      }
      // apiRes.courseContent
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_FREE_COURSE_CONTENT_FAILURE
    );
    yield put({ ...getAction });
  }
}

function* getFreeCourseContentLoadMoreSaga(data) {
  const loaderAction = yield call(
    getActionObject,
    CONSTANTS.GET_FREE_COURSE_CONTENT_LOADER
  );
  yield put({ ...loaderAction });
  try {
    const apiCall = yield call(getFreeCourseContentService, data?.payload);
    const apiRes = apiCall?.data?.data;
    // console.log("A______", apiRes);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_FREE_COURSE_CONTENT_LOADED_MORE,
      {
        courseContent: {
          apiRes: apiRes?.courseContent,
          offset: data?.payload?.offset,
          hasMore: apiRes?.courseContent?.length >= data?.payload?.limit,
        },
      }
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_FREE_COURSE_CONTENT_FAILURE
    );
    yield put({ ...getAction });
  }
}

function* getCourseContentTestStatsSaga(data) {
  // CLEARING CURRENT STATE WHILE FETCHING NEW DETAILS
  const clearContentAction = yield call(
    getActionObject,
    CONSTANTS.CLEAR_COURSE_CONTENT_TEST_STATS
  );
  yield put({ ...clearContentAction });
  const loaderAction = yield call(
    getActionObject,
    CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_LOADER
  );
  yield put({ ...loaderAction });
  try {
    const apiCall = yield call(getCourseContentTestStatsService, data?.payload);
    const apiRes = apiCall?.data?.data;
    // console.log("A______", apiRes);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_SUCCESS,
      apiRes
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_FAILURE
    );
    yield put({ ...getAction });
  }
}

function* addPreviewVideoContentSaga(data) {
  // CLEARING CURRENT STATE WHILE FETCHING NEW DETAILS
  // const clearContentAction = yield call(
  //   getActionObject,
  //   CONSTANTS.CLEAR_PREVIEW_VIDEO_CONTENT
  // );
  // yield put({ ...clearContentAction });
  const loaderAction = yield call(
    getActionObject,
    CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_LOADER
  );
  yield put({ ...loaderAction });
  try {
    const getAction = yield call(
      getActionObject,
      CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_SUCCESS,
      data?.payload
    );
    yield put({ ...getAction });
  } catch (err) {
    parseError(err);
    const getAction = yield call(
      getActionObject,
      CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_FAILURE
    );
    yield put({ ...getAction });
  }
}

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.GET_FREE_COURSE_CONTENT, getFreeCourseContentSaga);
  yield takeLatest(
    CONSTANTS.GET_FREE_COURSE_CONTENT_LOAD_MORE,
    getFreeCourseContentLoadMoreSaga
  );
  yield takeLatest(CONSTANTS.GET_COURSE_CONTENT, getCourseContentSaga);
  yield takeLatest(
    CONSTANTS.GET_COURSE_CONTENT_LOAD_MORE,
    getCourseContentLoadMoreSaga
  );
  yield takeLatest(
    CONSTANTS.GET_COURSE_CONTENT_TEST_STATS,
    getCourseContentTestStatsSaga
  );
  yield takeLatest(
    CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT,
    addPreviewVideoContentSaga
  );
}
