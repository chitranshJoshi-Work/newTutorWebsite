import CONSTANTS from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import * as SERVICES from "./services";
import { parseError } from "@/root/src/utils";

function* getLiveClassDataSaga(data) {
  yield put({
    type: CONSTANTS.LIVECLASSES_VIDEOSDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.getLiveClassDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    if (data?.payload?.offset === 0) {
      yield put({
        type: CONSTANTS.LIVECLASSES_VIDEOSDATA_SUCCESS,
        payload: apiRes,
      });
      yield put({
        type: CONSTANTS.LIVECLASSES_VIDEOSLIST_SUCCESS,
        payload: {
          list: apiRes?.list,
          offset: data?.payload?.offset,
          totalCount: apiRes?.totalCount,
          currentList: data?.payload?.currentList,
        },
      });
    } else {
      yield put({
        type: CONSTANTS.LIVECLASSES_VIDEOSLIST_SUCCESS,
        payload: {
          list: apiRes?.list,
          offset: data?.payload?.offset,
          totalCount: apiRes?.totalCount,
          currentList: data?.payload?.currentList,
        },
      });
    }
  } catch (err) {
    parseError(err);
  }
}

function* getBeforeDataSaga(data) {
  yield put({
    type: CONSTANTS.LIVECLASSES_BEFOREDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.getBeforeDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.LIVECLASSES_BEFOREDATA_SUCCESS,
      payload: apiRes,
    });
  } catch (err) {
    parseError(err);
  }
}

function* getModalDataSaga(data) {
  yield put({
    type: CONSTANTS.LIVECLASSES_MODALDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.getModalDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.LIVECLASSES_MODALDATA_SUCCESS,
      payload: apiRes,
    });

    yield put({
      type: CONSTANTS.LIVECLASSES_MODALSTATE_TOGGLE,
      payload: true,
    });
  } catch (err) {
    parseError(err);
  }
}

function* deleteLiveClassDataSaga(data) {
  yield put({
    type: CONSTANTS.LIVECLASSES_DELETEDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.deleteLiveClassService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.LIVECLASSES_DELETEDATA_SUCCESS,
      payload: apiRes,
    });

    yield put({
      type: CONSTANTS.LIVECLASSES_DELETEMODALSTATE_TOGGLE,
      payload: false,
    });
  } catch (err) {
    parseError(err);
  }
}

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.LIVECLASSES_VIDEOSDATA_GET, getLiveClassDataSaga);
  yield takeLatest(CONSTANTS.LIVECLASSES_BEFOREDATA_GET, getBeforeDataSaga);
  yield takeLatest(CONSTANTS.LIVECLASSES_MODALDATA_GET, getModalDataSaga);
  yield takeLatest(
    CONSTANTS.LIVECLASSES_DELETEDATA_DELETE,
    deleteLiveClassDataSaga
  );
}
