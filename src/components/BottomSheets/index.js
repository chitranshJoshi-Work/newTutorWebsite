import React from "react";
import ShareCourseViaBottomSheet from "./components/ShareCourseViaBottomSheet/ShareCourseViaBottomSheet";
import SelectAddressBottomSheet from "./components/SelectAddressBottomSheet/SelectAddressBottomSheet";
import SelectStatesBottomSheet from "./components/SelectStatesBottomSheet/SelectStatesBottomSheet";
import { useSelector } from "react-redux";
import ExpirySoonBottomSheet from "./components/ExpirySoonBottomSheet/ExpirySoonBottomSheet";
import PaymentProcessingBottomSheet from "./components/PaymentProcessingBottomSheet/PaymentProcessingBottomSheet";
import DueDatePaymentBottomSheet from "./components/DueDatePaymentBottomSheet/DueDatePaymentBottomSheet";
import PaymentFailedBottomSheet from "./components/PaymentFailedBottomSheet/PaymentFailedBottomSheet";
import PaymentSuccessfullBottomSheet from "./components/PaymentSuccessfullBottomSheet/PaymentSuccessfullBottomSheet";
import RunningTightOnBudgetBottomSheet from "./components/RunningTightOnBudgetBottomSheet/RunningTightOnBudgetBottomSheet";
import VideoRestrictionsBottomSheet from "./components/VideoRestrictionsBottomSheet/VideoRestrictionsBottomSheet";
import AboutCourseBottomSheet from "./components/AboutCourseBottomSheet/AboutCourseBottomSheet";
import ViewsExhaustedBottomSheet from "./components/ViewsExhaustedBottomSheet/ViewsExhaustedBottomSheet";
import LikeWhatYouAreWatchingBottomSheet from "./components/LikeWhatYouAreWatchingBottomSheet/LikeWhatYouAreWatchingBottomSheet";
import TestIsLockedBottomSheet from "./components/TestIsLockedBottomSheet/TestIsLockedBottomSheet";
import TestIsTemporarilyLockedBottomSheet from "./components/TestIsTemporarilyLockedBottomSheet/TestIsTemporarilyLockedBottomSheet";
import TestIsTemporarilyLockedTimingBottomSheet from "./components/TestIsTemporarilyLockedTimingBottomSheet/TestIsTemporarilyLockedTimingBottomSheet";
import ApplyCouponBottomSheet from "./components/ApplyCouponBottomSheet/ApplyCouponBottomSheet";
import ContentLockedBottomSheet from "./components/ContentLockedBottomSheet/ContentLockedBottomSheet";
import UpcomingClassModal from "./components/UpcomingClassModal/UpcomingClassModal";
import AnnouncementsAttachments from "./components/AnnouncementsAttachments/AnnouncementsAttachments";
import InstallmentPendingBottomSheet from "./components/InstallmentPendingBottomSheet/InstallmentPendingBottomSheet";
import FullScreenLoader from "@/src/components/FullScreenLoader";
import PaymentLoader from "@/src/components/BottomSheets/components/PaymentLoading";

const BottomSheets = () => {
  const {
    showShareContentViaBottomSheet,
    showAboutThisCourseBottomSheet,
    showVideoRestrictionsBottomSheet,
    showUpcomingLiveClassesBottomSheet,
    showApplyCouponBottomSheet,
    showContentLockedBottomSheet,
    showWhatAreYouWatchingBottomSheet,
    showTestIsLockedBottomSheet,
    showSelectStateBottomSheet,
    showSelectAddressBottomSheet,
    showRunningTightOnBudgetBottomSheet,
    showCongratulationsBottomSheet,
    showDueDateBottomSheet,
    showCourseLockedBottomSheet,
    showPaymentFailedBottomSheet,
    showViewsExhaustedBottomSheet,
    showDownloadVideoBottomSheet,
    showExpirySoonBottomSheet,
    showPaymentProcessingBottomSheet,
    showTestIsTemporarilyLockedBottomSheet,
    showTestIsTemporarilyLockedTimingBottomSheet,
    showAnnouncementsAttachments,
    showFullScreenLoader,
    showPaymentLoader,
  } = useSelector((state) => state.bottomSheetReducer);

  const upcomingClass = useSelector(
    (state) => state?.bottomSheetReducer?.showUpcomingLiveClassesBottomSheet
  );
  return (
    <>
      {showAboutThisCourseBottomSheet && <AboutCourseBottomSheet />}

      {showVideoRestrictionsBottomSheet && <VideoRestrictionsBottomSheet />}
      {showUpcomingLiveClassesBottomSheet && <UpcomingClassModal />}

      {showShareContentViaBottomSheet && <ShareCourseViaBottomSheet />}

      {/* src/components/Tabs/Overview/components/Coupons/index.js  */}
      {showApplyCouponBottomSheet && <ApplyCouponBottomSheet />}

      {showWhatAreYouWatchingBottomSheet && (
        <LikeWhatYouAreWatchingBottomSheet />
      )}

      {showTestIsLockedBottomSheet && <TestIsLockedBottomSheet />}

      {showSelectStateBottomSheet && <SelectStatesBottomSheet />}

      {showSelectAddressBottomSheet && <SelectAddressBottomSheet />}

      {showRunningTightOnBudgetBottomSheet && (
        <RunningTightOnBudgetBottomSheet />
      )}

      {showCongratulationsBottomSheet && <PaymentSuccessfullBottomSheet />}

      {showDueDateBottomSheet && <DueDatePaymentBottomSheet />}

      {/* course locked */}
      {showContentLockedBottomSheet && <ContentLockedBottomSheet />}

      {showPaymentFailedBottomSheet && <PaymentFailedBottomSheet />}

      {showViewsExhaustedBottomSheet && <ViewsExhaustedBottomSheet />}

      {showExpirySoonBottomSheet && <ExpirySoonBottomSheet />}

      {showPaymentProcessingBottomSheet && <PaymentProcessingBottomSheet />}

      {showTestIsTemporarilyLockedTimingBottomSheet && (
        <TestIsTemporarilyLockedTimingBottomSheet />
      )}

      {showTestIsTemporarilyLockedBottomSheet && (
        <TestIsTemporarilyLockedBottomSheet />
      )}
      {showCourseLockedBottomSheet && <InstallmentPendingBottomSheet />}
      {showAnnouncementsAttachments && <AnnouncementsAttachments />}
      {showFullScreenLoader && <FullScreenLoader />}
      {showPaymentLoader && (
        <PaymentLoader heading="Loading Payment" className="Loading">
          Please wait while we redirect you to your payment page
        </PaymentLoader>
      )}
    </>
  );
};

export default BottomSheets;
