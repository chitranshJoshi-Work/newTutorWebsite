import CONSTANTS from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import * as SERVICES from "./services";
import tranformTabList from "./transformer";

function* getTabListSaga(data) {
  if (!data?.payload?.skipLoader) {
    yield put({
      type: CONSTANTS.TABBAR_TAB_LIST_LOADING,
      payload: true,
    });
  }

  try {
    const apiCall = yield call(SERVICES.getTabListService, data?.payload);
    const apiRes = apiCall?.data?.data?.tabs;

    yield put({
      type: CONSTANTS.TABBAR_TAB_LIST_SUCCESS,
      payload: tranformTabList(apiRes),
    });
  } catch (err) {
    yield put({
      type: CONSTANTS.TABBAR_TAB_LIST_ERROR,
      payload: true,
    });
  }
}

export default function* tabListSaga() {
  yield takeLatest(CONSTANTS.TABBAR_TAB_LIST_GET, getTabListSaga);
}
