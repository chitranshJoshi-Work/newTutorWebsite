import React from "react";
import CourseLockedBottomSheet from "../CourseLockedBottomSheet/CourseLockedBottomSheet";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from "../../store/actions";
import { getAwsAssets } from "@/root/src/utils";
import { useTranslation } from "react-i18next";

const ContentLockedBottomSheet = () => {
  const { t } = useTranslation();

  const state = useSelector(
    (state) => state?.bottomSheetReducer?.showContentLockedBottomSheet
  );

  const dispatch = useDispatch();
  return (
    <CourseLockedBottomSheet
      src={getAwsAssets("padlock.svg", "bottomSheets")}
      mainText={t(
        "components.bottomSheets.components.contentLockedBottomSheet.contentIsLocked",
        "Content is Locked"
      )}
      subText={t(
        "components.bottomSheets.components.contentLockedBottomSheet.courseVideoLocked",
        "The video you’re trying to open is locked. Buy the course for complete access."
      )}
      btnText={t(
        "components.bottomSheets.components.contentLockedBottomSheet.buyNow",
        "Buy now"
      )}
      state={state}
      dispatcher={() =>
        dispatch(actionCreator.showContentLockedBottomSheetAction(false))
      }
    />
  );
};

export default ContentLockedBottomSheet;
