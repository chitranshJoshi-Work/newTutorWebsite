import CONSTANTS from "./constants";

const initialState = {
  showShareContentViaBottomSheet: false,
  showAboutThisCourseBottomSheet: false,
  showVideoRestrictionsBottomSheet: false,
  showUpcomingLiveClassesBottomSheet: false,
  showApplyCouponBottomSheet: false,
  showContentLockedBottomSheet: false,
  showWhatAreYouWatchingBottomSheet: false,
  showTestIsLockedBottomSheet: false,
  showSelectStateBottomSheet: false,

  showSelectAddressBottomSheet: false,
  showDeleteAddressPopup: false,

  showRunningTightOnBudgetBottomSheet: false,
  showCongratulationsBottomSheet: false,
  showDueDateBottomSheet: false,
  showCourseLockedBottomSheet: false,
  showPaymentFailedBottomSheet: false,

  showViewsExhaustedBottomSheet: false,
  showDownloadVideoBottomSheet: false,
  showExpirySoonBottomSheet: false,
  showPaymentProcessingBottomSheet: false,
  showTestIsTemporarilyLockedBottomSheet: false,
  showTestIsTemporarilyLockedTimingBottomSheet: false,
  showTestIsTemporarilyLockedTimingBottomSheetDates: {
    startDate: "",
    endDate: "",
  },
  showAnnouncementsAttachments: false,
  isShownPayInInstallmentsBottomSheet: false,
  isShowDueDateBottomSheet: false,
  showFullScreenLoader: false,
  showPaymentLoader: false,
};
const showTightOnBudgetBottomSheet = (value) => ({
  isShownPayInInstallmentsBottomSheet: true,
});
const setShareContentViaBottomSheet = (value) => ({
  showShareContentViaBottomSheet: value,
});
const setAboutThisCourseBottomSheet = (value) => ({
  showAboutThisCourseBottomSheet: value,
});

const setVideoRestrictionsBottomSheet = (value) => ({
  showVideoRestrictionsBottomSheet: value,
});

const setUpcomingLiveClassesBottomSheet = (value) => ({
  showUpcomingLiveClassesBottomSheet: value,
});

const setApplyCouponBottomSheet = (value) => ({
  showApplyCouponBottomSheet: value,
});

const setContentLockedBottomSheet = (value) => ({
  showContentLockedBottomSheet: value,
});

const setWhatAreYouWatchingBottomSheet = (value) => ({
  showWhatAreYouWatchingBottomSheet: value,
});

const setTestIsLockedBottomSheet = (value) => ({
  showTestIsLockedBottomSheet: value,
});

const setSelectStateBottomSheet = (value) => ({
  showSelectStateBottomSheet: value,
});

const setSelectAddressBottomSheet = (value) => ({
  showSelectAddressBottomSheet: value,
});

const setDeleteAddressPopup = (value) => ({
  showDeleteAddressPopup: value,
});

const setRunningTightOnBudgetBottomSheet = (value) => ({
  showRunningTightOnBudgetBottomSheet: value,
});

const setCongratulationsBottomSheet = (value) => ({
  showCongratulationsBottomSheet: value,
});

const setDueDateBottomSheet = (value) => ({
  showDueDateBottomSheet: value,
  isShowDueDateBottomSheet: true,
});

const setCourseLockedBottomSheet = (value) => ({
  showCourseLockedBottomSheet: value,
});

const setPaymentFailedBottomSheet = (value) => ({
  showPaymentFailedBottomSheet: value,
});

const setViewsExhaustedBottomSheet = (value) => ({
  showViewsExhaustedBottomSheet: value,
});

const setDownloadVideoBottomSheet = (value) => ({
  showDownloadVideoBottomSheet: value,
});

const setExpirySoonBottomSheet = (value) => ({
  showExpirySoonBottomSheet: value,
});

const setPaymentProcessingBottomSheet = (value) => ({
  showPaymentProcessingBottomSheet: value,
});

const setTestIsTemporarilyLockedBottomSheet = (value) => ({
  showTestIsTemporarilyLockedBottomSheet: value,
});

const setTestIsTemporarilyLockedTimingBottomSheet = (value) => ({
  showTestIsTemporarilyLockedTimingBottomSheet: value,
});
const setTestIsTemporarilyLockedTimingBottomSheetDates = (dates) => ({
  showTestIsTemporarilyLockedTimingBottomSheetDates: { ...dates },
});
const setAnnouncementsAttachmentsBottomSheet = (value) => ({
  showAnnouncementsAttachments: value,
});
const closeAllBottomSheets = () => ({
  ...initialState,
});

const showFullScreenLoaderFn = (value) => ({
  showFullScreenLoader: value,
});

const showPaymentLoaderFn = (value) => ({
  showPaymentLoader: value,
});

const BottomSheetReducer = (state = initialState, action) => {
  switch (action?.type) {
    case CONSTANTS.CLOSE_ALL_BOTTOMSHEET:
      return {
        ...closeAllBottomSheets,
      };
    case CONSTANTS.BOTTOMSHEET_SHARE_CONTENT_VIA:
      return {
        ...state,
        ...setShareContentViaBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_ABOUT_THIS_COURSE:
      return {
        ...state,
        ...setAboutThisCourseBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_VIDEO_RESTRICTIONS:
      return {
        ...state,
        ...setVideoRestrictionsBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_UPCOMING_LIVE_CLASSES:
      return {
        ...state,
        ...setUpcomingLiveClassesBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_APPLY_COUPON:
      console.log("actionValue", action.payload);

      return {
        ...state,
        ...setApplyCouponBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_CONTENT_LOCKED:
      return {
        ...state,
        ...setContentLockedBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_WHAT_ARE_YOU_WATCHING:
      return {
        ...state,
        ...setWhatAreYouWatchingBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_TEST_IS_LOCKED:
      return {
        ...state,
        ...setTestIsLockedBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_SELECT_STATE:
      return {
        ...state,
        ...setSelectStateBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_SELECT_ADDRESS:
      return {
        ...state,
        ...setSelectAddressBottomSheet(action?.payload),
      };

    case CONSTANTS.POPUP_DELETE_ADDRESS:
      return {
        ...state,
        ...setDeleteAddressPopup(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_RUNNING_TIGHT_ON_BUDGET:
      return {
        ...state,
        ...setRunningTightOnBudgetBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_CONGRATULATIONS:
      return {
        ...state,
        ...setCongratulationsBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_DUE_DATE:
      return {
        ...state,
        ...setDueDateBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_COURSE_LOCKED:
      return {
        ...state,
        ...setCourseLockedBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_PAYMENT_FAILED:
      return {
        ...state,
        ...setPaymentFailedBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_VIEWS_EXHAUSTED:
      return {
        ...state,
        ...setViewsExhaustedBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_DOWNLOAD_VIDEO:
      return {
        ...state,
        ...setDownloadVideoBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_EXPIRY_SOON:
      return {
        ...state,
        ...setExpirySoonBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_PAYMENT_PROCESSING:
      return {
        ...state,
        ...setPaymentProcessingBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_TEST_IS_TEMPORARILY_LOCKED:
      return {
        ...state,
        ...setTestIsTemporarilyLockedBottomSheet(action?.payload),
      };

    case CONSTANTS.BOTTOMSHEET_TEST_IS_TEMPORARILY_LOCKED_TIMING:
      return {
        ...state,
        ...setTestIsTemporarilyLockedTimingBottomSheet(action?.payload),
        ...setTestIsTemporarilyLockedTimingBottomSheetDates(action?.dates),
      };
    case CONSTANTS.BOTTOMSHEET_ANNOUNCEMENTS_ATTACHMENTS:
      return {
        ...state,
        ...setAnnouncementsAttachmentsBottomSheet(action?.payload),
      };
    case CONSTANTS.BOTTOMSHEET_IS_SHOW_TIGHT_ON_BUDGET:
      return {
        ...state,
        ...showTightOnBudgetBottomSheet(action?.payload),
      };

    case CONSTANTS.SHOW_FULLSCREEN_LOADER:
      return {
        ...state,
        ...showFullScreenLoaderFn(action?.payload),
      };

    case CONSTANTS.SHOW_PAYMENT_LOADER:
      return {
        ...state,
        ...showPaymentLoaderFn(action?.payload),
      };
    default:
      return state;
  }
};

export default BottomSheetReducer;
