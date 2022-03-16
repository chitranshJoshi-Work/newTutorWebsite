import React from "react";
import CourseLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import * as actionCreator from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const LikeWhatYouAreWatchingBottomSheet = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showWhatAreYouWatchingBottomSheet
  );

  return (
    <CourseLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.likeWhatAreYourWatchingBottomSheet.LikeWhatYouAreWatching",
        "Like what you are watching?"
      )}
      subText={t(
        "components.bottomSheets.components.likeWhatAreYourWatchingBottomSheet.limitedPeriodOver",
        "Your 2 minutes of limted preview is over. To get access to all course contents and continue with your learning seamlessly."
      )}
      btnText={t(
        "components.bottomSheets.components.likeWhatAreYourWatchingBottomSheet.buyNow",
        "Buy now"
      )}
      viewAllSubText={t(
        "components.bottomSheets.components.likeWhatAreYourWatchingBottomSheet.goBackInstead",
        "Go back instead"
      )}
      state={state}
      dispatcher={() =>
        dispatch(actionCreator.showWhatAreYouWatchingBottomSheetAction(false))
      }
    />
  );
};

export default LikeWhatYouAreWatchingBottomSheet;
