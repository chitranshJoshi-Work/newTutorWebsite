import React from "react";
import CourseLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const ViewsExhaustedBottomSheet = () => {
  const { t } = useTranslation();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showViewsExhaustedBottomSheet
  );

  const dispatch = useDispatch();
  return (
    <CourseLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.viewsExhausted.viewsExhausted",
        "Views Exhausted"
      )}
      subText={t(
        "components.bottomSheets.components.viewsExhausted.youExhaustedWatchLimit",
        "You have exhausted the watch limit set by your tutor for this video. Buy this course now to continue your learning."
      )}
      btnText={t(
        "components.bottomSheets.components.viewsExhausted.buyNow",
        "Buy now"
      )}
      viewAllSubText={t(
        "components.bottomSheets.components.viewsExhausted.goBackInstead",
        "Go back instead"
      )}
      state={state}
      dispatcher={() =>
        dispatch(actionCreator.showViewsExhaustedBottomSheetAction(false))
      }
    />
  );
};

export default ViewsExhaustedBottomSheet;
