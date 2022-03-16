import CONSTANTS from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import * as SERVICES from "./services";

function* getLiveSessionDataSaga(data) {
  yield put({ type: CONSTANTS.GOLIVE_DATA_GET, payload: true });

  try {
    const apiCall = yield call(SERVICES.getLiveDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.GOLIVE_DATA_SUCCESS,
      payload: apiRes,
    });
  } catch (err) {
    // toastr.error(err?.message);
  }
}

function* createLiveSessionSaga(data) {
  yield put({
    type: CONSTANTS.GOLIVE_SESSION_LOADING,
    payload: true,
  });

  console.log("COURSEGOLIVE__SAGACALL");

  try {
    const apiCall = yield call(SERVICES.createLiveClassService, data?.payload);
    const apiRes = apiCall?.data;

    yield put({
      type: CONSTANTS.GOLIVE_SESSION_SUCCESS,
      payload: apiRes,
    });

    yield call(data?.payload?.onSuccess, apiRes);
  } catch (err) {
    // toastr.error(err?.message);
  }
}

function* updateLiveSessionSaga(data) {
  yield put({
    type: CONSTANTS.GOLIVE_SESSIONUPDATE_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.updateLiveClassService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.GOLIVE_SESSIONUPDATE_SUCCESS,
      payload: apiRes,
    });
  } catch (err) {
    // toastr.error(err?.message);
  }
}

function* deleteLiveSessionSaga(data) {
  yield put({
    type: CONSTANTS.GOLIVE_SESSIONDELETE_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.deleteLiveClassService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.GOLIVE_SESSIONDELETE_SUCCESS,
      payload: apiRes,
    });
  } catch (err) {
    // toastr.error(err?.message);
  }
}

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.GOLIVE_DATA_GET, getLiveSessionDataSaga);
  yield takeLatest(CONSTANTS.GOLIVE_SESSION_POST, createLiveSessionSaga);
  yield takeLatest(
    CONSTANTS.GOLIVE_SESSIONUPDATE_UPDATE,
    updateLiveSessionSaga
  );
  yield takeLatest(
    CONSTANTS.GOLIVE_SESSIONDELETE_DELETE,
    deleteLiveSessionSaga
  );
}
