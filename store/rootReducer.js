const { combineReducers } = require("redux");

import overviewReducer from "@/tabs/Overview/store/reducer";
import courseContentReducer from "@/tabs/Content/store/reducer";
import courseLiveClassReducer from "@/tabs/LiveClasses/store/reducers";
import layoutReducer from "@/src/layout/store/reducer";
import tabBarReducer from "@/src/components/UIElements/TabBar/store/reducer";

import persistedDataReducer from "./persistedData";
import bottomSheetReducer from "@/src/components/BottomSheets/store/reducer";
import upcomingClassesReducer from "@/src/components/BottomSheets/components/UpcomingClassModal/store/reducer";
import announcementsReducer from "@/tabs/Announcements/store/reducer";
import physicalShipmentReducer from "@/src/components/PhysicalAddress/store/reducer";

const rootReducer = combineReducers({
  persistedDataReducer: persistedDataReducer,
  overviewReducer: overviewReducer,
  courseContentReducer: courseContentReducer,
  bottomSheetReducer: bottomSheetReducer,
  courseLiveClassReducer: courseLiveClassReducer,
  layoutReducer: layoutReducer,
  tabBarReducer: tabBarReducer,
  upcomingClassesReducer: upcomingClassesReducer,
  announcementsReducer: announcementsReducer,
  physicalShipmentReducer: physicalShipmentReducer,
});

export default rootReducer;
