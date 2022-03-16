import CONSTANTS from "./constants";

export const showShareContentViaBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_SHARE_CONTENT_VIA,
  payload: value,
});
export const showAboutThisCourseBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_ABOUT_THIS_COURSE,
  payload: value,
});

export const showVideoRestrictionsBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_VIDEO_RESTRICTIONS,
  payload: value,
});

export const showUpcomingLiveClassesBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_UPCOMING_LIVE_CLASSES,
  payload: value,
});

export const showApplyCouponBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_APPLY_COUPON,
  payload: value,
});

export const showContentLockedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_CONTENT_LOCKED,
  payload: value,
});

export const showWhatAreYouWatchingBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_WHAT_ARE_YOU_WATCHING,
  payload: value,
});

export const showTestIsLockedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_TEST_IS_LOCKED,
  payload: value,
});

export const showSelectStateBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_SELECT_STATE,
  payload: value,
});

export const showSelectAddressBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_SELECT_ADDRESS,
  payload: value,
});

export const showDeleteAddressPopupAction = (value) => ({
  type: CONSTANTS.POPUP_DELETE_ADDRESS,
  payload: value,
});

export const showRunningTightOnBudgetBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_RUNNING_TIGHT_ON_BUDGET,
  payload: value,
});

export const showCongratulationsBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_CONGRATULATIONS,
  payload: value,
});

export const showDueDateBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_DUE_DATE,
  payload: value,
});

export const showCourseLockedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_COURSE_LOCKED,
  payload: value,
});

export const showPaymentFailedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_PAYMENT_FAILED,
  payload: value,
});

export const showViewsExhaustedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_VIEWS_EXHAUSTED,
  payload: value,
});

export const showDownloadVideoBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_DOWNLOAD_VIDEO,
  payload: value,
});

export const showExpirySoonBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_EXPIRY_SOON,
  payload: value,
});

export const showPaymentProcessingBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_PAYMENT_PROCESSING,
  payload: value,
});

export const showTestIsTemporarilyLockedBottomSheetAction = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_TEST_IS_TEMPORARILY_LOCKED,
  payload: value,
});

export const showTestIsTemporarilyLockedTimingBottomSheetAction = (
  value,
  dates
) => ({
  type: CONSTANTS.BOTTOMSHEET_TEST_IS_TEMPORARILY_LOCKED_TIMING,
  payload: value,
  dates,
});
export const showAnnouncementsAttachments = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_ANNOUNCEMENTS_ATTACHMENTS,
  payload: value,
});
export const isShowRunningTightOnBudgetBottomSheet = (value) => ({
  type: CONSTANTS.BOTTOMSHEET_IS_SHOW_TIGHT_ON_BUDGET,
  payload: value,
});

// ACTION TO CLOSE ALL BOTTOMSHEETS
export const closeAllBottomSheetsAction = () => ({
  type: CONSTANTS.CLOSE_ALL_BOTTOMSHEET,
});

export const showFullScreenLoaderAction = (value) => ({
  type: CONSTANTS.SHOW_FULLSCREEN_LOADER,
  payload: value,
});

export const showPaymentLoaderAction = (value) => ({
  type: CONSTANTS.SHOW_PAYMENT_LOADER,
  payload: value,
});
