import { put, call, takeLatest } from "redux-saga/effects";
import CONSTANTS from "./constants";
import * as SERVICES from "./services";

import Router from "next/router";
import toast from "react-hot-toast";
import { showSelectAddressBottomSheetAction } from "../../BottomSheets/store/actions";
import { parseError } from "@/root/src/utils";

function* getAddressListSaga(data) {
  yield put({
    type: CONSTANTS.SHIPMENT_ADDRESSLIST_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.getAddressListService, data?.payload);
    const apiRes = apiCall?.data?.data?.studentAddress;

    const defaultAddress = apiCall?.data?.data?.studentAddress?.filter(
      (item) => item?.isDefault
    );

    yield put({
      type: CONSTANTS.SHIPMENT_ADDRESSLIST_SUCCESS,
      payload: apiRes,
    });

    // yield call(ACTIONS.setActiveAddressAction, ...defaultAddress);
  } catch (err) {
    parseError(err);
  }
}

function* sendAddressDataSaga(data) {
  yield put({
    type: CONSTANTS.SHIPMENT_ADDRESSDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.sendAddressDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.SHIPMENT_ADDRESSDATA_SUCCESS,
      payload: apiRes,
    });

    console.log("OFFLINEMATERIAL__ROUTER", Router, data);
    yield call(Router.push, `/${data?.payload?.courseId}/1`);

    yield put({
      type: "BOTTOMSHEET_SELECT_ADDRESS",
      payload: true,
    });
    toast.success("New Address Added Successfully!");
  } catch (err) {
    parseError(err);
  }
}

function* editAddressDataSaga(data) {
  yield put({
    type: CONSTANTS.SHIPMENT_EDITADDRESSDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(SERVICES.editAddressDataService, data?.payload);
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.SHIPMENT_EDITADDRESSDATA_SUCCESS,
      payload: apiRes,
    });
    yield call(Router.push, `/${data?.payload?.courseId}/1`);

    yield put({
      type: "BOTTOMSHEET_SELECT_ADDRESS",
      payload: true,
    });
    toast.success("Address Updated Successfully");
  } catch (err) {
    parseError(err);
  }
}

function* deleteAddressDataSaga(data) {
  yield put({
    type: CONSTANTS.SHIPMENT_DELETEADDRESSDATA_LOADING,
    payload: true,
  });

  try {
    const apiCall = yield call(
      SERVICES.deleteAddressDataService,
      data?.payload
    );
    const apiRes = apiCall?.data?.data;

    yield put({
      type: CONSTANTS.SHIPMENT_DELETEADDRESSDATA_SUCCESS,
      payload: apiRes,
    });

    yield call(getAddressListSaga);

    yield put({
      type: "BOTTOMSHEET_DELETE_ADDRESS",
      payload: false,
    });
  } catch (err) {
    parseError(err);
  }
}

export default function* physicalShipmentSaga() {
  yield takeLatest(CONSTANTS.SHIPMENT_ADDRESSLIST_GET, getAddressListSaga);
  yield takeLatest(CONSTANTS.SHIPMENT_ADDRESSDATA_POST, sendAddressDataSaga);
  yield takeLatest(CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT, editAddressDataSaga);
  yield takeLatest(
    CONSTANTS.SHIPMENT_DELETEADDRESSDATA_DELETE,
    deleteAddressDataSaga
  );
}
