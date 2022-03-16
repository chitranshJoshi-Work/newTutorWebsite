import React from "react";
import ContentLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const TestIsTemporarilyLockedTimingBottomSheet = () => {
  const { t } = useTranslation();
  const state = useSelector(
    (state) =>
      state?.bottomSheetReducer?.showTestIsTemporarilyLockedTimingBottomSheet
  );
  const testScheduleStartDate = useSelector(
    (state) =>
      state?.bottomSheetReducer
        ?.showTestIsTemporarilyLockedTimingBottomSheetDates?.startDate
  );
  const testScheduleEndDate = useSelector(
    (state) =>
      state?.bottomSheetReducer
        ?.showTestIsTemporarilyLockedTimingBottomSheetDates?.endDate
  );

  // const testScheduleStartDate = `10:00 AM, 23 FebSSSSS`;
  // const testScheduleEndDate = `10:00 AM, 25 FebEEEE`;

  const dispatch = useDispatch();
  return (
    <ContentLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedTimingBottomSheet.testIsTemporarilyLocked",
        "Test is Temporarily Locked"
      )}
      subText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedTimingBottomSheet.testIsLockedByTutor",
        "The test you’re trying to attempt has been locked by your tutor. Please get in touch with your tutor."
      )}
      boldSubText={`${testScheduleStartDate} ${t(
        "components.bottomSheets.components.testIsTemporarilyLockedTimingBottomSheet.toText",
        "to"
      )} ${testScheduleEndDate}`}
      btnText={t(
        "components.bottomSheets.components.testIsTemporarilyLockedTimingBottomSheet.okay",
        "Okay"
      )}
      state={state}
      dispatcher={() =>
        dispatch(
          actionCreator.showTestIsTemporarilyLockedTimingBottomSheetAction(
            false
          )
        )
      }
    />
  );
};

export default TestIsTemporarilyLockedTimingBottomSheet;
