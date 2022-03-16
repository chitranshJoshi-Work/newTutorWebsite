import CONSTANTS from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import * as SERVICES from "./services";
import { parseError } from "@/root/src/utils";

function* getUpcomingClassesSaga(data) {
  if (!data?.payload?.skipLoader) {
    yield put({
      type: CONSTANTS.UPCOMINGCLASSES_LIST_LOADING,
      payload: true,
    });
  }

  try {
    const apiCall = yield call(
      SERVICES.getUpcomingClassesService,
      data?.payload
    );
    const apiRes = apiCall?.data?.data;

    if (data?.payload?.offset === 0) {
      yield put({
        type: CONSTANTS.UPCOMINGCLASSES_APIRES_SUCCESS,
        payload: apiRes,
      });
      yield put({
        type: CONSTANTS.UPCOMINGCLASSES_LIST_SUCCESS,
        payload: {
          list: apiRes?.list,
          offset: data?.payload?.offset,
          totalCount: apiRes?.totalCount,
          currentList: data?.payload?.currentList,
        },
      });
    } else {
      yield put({
        type: CONSTANTS.UPCOMINGCLASSES_LIST_SUCCESS,
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

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.UPCOMINGCLASSES_LIST_GET, getUpcomingClassesSaga);
}
