import Router from "next/router";
import { store } from "@/root/store";
import {
  closeAllBottomSheetsAction,
  isShowRunningTightOnBudgetBottomSheet,
  showRunningTightOnBudgetBottomSheetAction,
} from "../../components/BottomSheets/store/actions";
import { COURSE_TABS_ENUMS } from "../constants";
import { installmentsAlertStateEnum } from "src/components/Tabs/Overview/store/constants.js";
// SHOW PROMPT
const prompt = () => {
  alert(store?.getState()?.bottomSheetReducer?.isShowDueDateBottomSheet);
  if (!store?.getState()?.bottomSheetReducer?.isShowDueDateBottomSheet) {
    store.dispatch(isShowRunningTightOnBudgetBottomSheet(true));
    store.dispatch(showRunningTightOnBudgetBottomSheetAction(true));
  }
};

// CLOSE WEBVIEW EVENT
const quitWebview = () => {
  // STATES
  const alertState =
    store?.getState()?.overviewReducer?.overViewDetails?.course?.installments
      ?.installmentAlert?.alertState;

  if (alertState === installmentsAlertStateEnum.TIGHT_BUDGET) {
    prompt();
  } else {
    window?.mobile?.performAction(`ACTION_CLOSE`, null);
    window?.webkit?.messageHandlers?.stateEvents?.postMessage("QUIT");
  }
};

const handleBackEvent = (paramEvent) => {
  // TODO BETTER SOLUTION FOR LANDING ON RANDOM PAGE
  // STATES
  if (
    Router.router.route !== "/[courseId]/[tabId]" &&
    Router.router.query.token
  ) {
    Router.push(`/${Router.query.courseId}/1`);
  }

  const baseTab = store
    ?.getState()
    ?.tabBarReducer?.tabList?.find?.(
      (tab) => tab?.enumKey === COURSE_TABS_ENUMS?.OVERVIEW
    )?.id;
  const bottomSheetReducer = store?.getState()?.bottomSheetReducer;

  if (
    Object.keys(bottomSheetReducer).some(
      (i) => bottomSheetReducer[i] && typeof bottomSheetReducer[i] !== "object"
    )
  ) {
    // console.log(bottomSheetReducer);
    store?.dispatch(closeAllBottomSheetsAction());
    return;
  } else if (paramEvent) {
    paramEvent();
  } else if (Router?.query?.tabId) {
    if (Router?.query?.tabId === `${baseTab}`) {
      quitWebview();
    } else {
      Router?.push(`/${Router?.query?.courseId}/${baseTab}`);
    }
  } else if (
    Router.router.route !== "/[courseId]/[tabId]" &&
    Router.router.query.token
  ) {
    Router.push(`/${Router.query.courseId}/1`);
  } else {
    Router.back();
  }
};

export default handleBackEvent;
