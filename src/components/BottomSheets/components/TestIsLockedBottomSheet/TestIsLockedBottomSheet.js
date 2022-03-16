import React from "react";
import CourseLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import * as actionCreator from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const TestIsLockedBottomSheet = () => {
  const { t } = useTranslation();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showTestIsLockedBottomSheet
  );

  const dispatch = useDispatch();
  return (
    <CourseLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.testIsLockedBottomSheet.testIsLocked",
        "Test is Locked"
      )}
      subText={t(
        "components.bottomSheets.components.testIsLockedBottomSheet.testLockedBuyCourse",
        "The test you’re trying to attempt is locked. Buy the course for complete access."
      )}
      btnText={t(
        "components.bottomSheets.components.testIsLockedBottomSheet.buyNow",
        "Buy now"
      )}
      viewAllSubText={t(
        "components.bottomSheets.components.testIsLockedBottomSheet.goBackInstead",
        "Go back instead"
      )}
      state={state}
      dispatcher={() =>
        dispatch(actionCreator.showTestIsLockedBottomSheetAction(false))
      }
    />
  );
};

export default TestIsLockedBottomSheet;
