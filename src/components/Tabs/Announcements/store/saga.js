import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import CONSTANTS, { CONTENT_LIMIT } from "./constants";
import { getAnnouncementsService } from "./services";

import { store } from "@/root/store";

function* getAnnouncementsSaga(data) {
  console.log("in post like course saga------------------------------", data);
  if (data?.payload?.search) yield delay(1000);
  if (data?.payload?.showLoader) {
    yield put({
      type: CONSTANTS.SET_ANNOUNCEMENTS_LIST_LOADER,
      payload: true,
    });
  }
  console.log(data, "offs");
  try {
    const response = yield call(getAnnouncementsService, {
      ...data.payload,
    });
    console.log(response.data.data.announcementsData.length, "op");
    yield put({
      type: CONSTANTS.SET_ANNOUNCEMENTS_LIST_SUCCESS,
      payload: {
        data: response.data.data?.announcementsData,
        hasMore:
          response.data.data?.announcementsData.length >= CONTENT_LIMIT
            ? true
            : false,
        offset: data?.payload?.offset,
        isMoreContentToAppend: data?.payload?.isMoreContentToAppend,
      },
    });
  } catch (error) {
    console.log(error, "===========");
    yield put({
      type: CONSTANTS.SET_ANNOUNCEMENTS_LIST_FAILURE,
      payload: false,
    });
  }
}

export default function* actionWatcher() {
  yield takeLatest(CONSTANTS.GET_ANNOUNCEMENTS, getAnnouncementsSaga);
}
