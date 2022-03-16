import { all } from "redux-saga/effects";
import actionWatcher from "@/tabs/Overview/store/saga";
import courseContentSaga from "@/tabs/Content/store/saga";
import courseLiveClassSaga from "@/tabs/LiveClasses/store/sagas";
import tabListSaga from "@/UIElements/TabBar/store/saga";
import upcomingClassesSaga from "@/src/components/BottomSheets/components/UpcomingClassModal/store/sagas";
import announcementsSaga from "@/tabs/Announcements/store/saga";
import physicalShipmentSaga from "@/src/components/PhysicalAddress/store/sagas";
// function* rootSaga() {
//   yield all([actionWatcher()]);

function* rootSaga() {
  yield all([
    courseContentSaga(),
    actionWatcher(),
    courseLiveClassSaga(),
    tabListSaga(),
    upcomingClassesSaga(),
    announcementsSaga(),
    physicalShipmentSaga(),
  ]);
}

export default rootSaga;
