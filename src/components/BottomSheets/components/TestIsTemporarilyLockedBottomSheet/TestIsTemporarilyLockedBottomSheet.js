import React from "react";
import CourseLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";

import { useTranslation } from "react-i18next";

const TestIsTemporarilyLockedBottomSheet = () => {
  const { t } = useTranslation();
  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showTestIsTemporarilyLockedBottomSheet
  );

  const dispatch = useDispatch();
  return (
    <CourseLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedBottomSheet.testIsTemporarilyLocked",
        "Test is Temporarily Locked"
      )}
      subText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedBottomSheet.testIsLockedByTutor",
        "The test you’re trying to attempt has been locked by your tutor. Please get in touch with your tutor."
      )}
      btnText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedBottomSheet.okay",
        "Okay"
      )}
      closeOnBtnText
      state={state}
      dispatcher={() =>
        dispatch(
          actionCreator.showTestIsTemporarilyLockedBottomSheetAction(false)
        )
      }
    />
  );
};

export default TestIsTemporarilyLockedBottomSheet;
