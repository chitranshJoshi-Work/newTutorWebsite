import { CourseModalType } from "../../../components/LiveVideo/constantsLiveVideo";

const saveLiveData = (data) => {
  localStorage.setItem("liveVideoData", JSON.stringify(data));
};

const savePathname = (path) => {
  localStorage.setItem("routePath", path);
};

const goLiveUtil = (
  res,
  goLiveCard,
  liveCard,
  path,
  goLiveCourseModalType,
  isEditing,
  mobile,
  onSuccess
) => {
  let goLiveData = liveCard;
  let cta = {};
  let isAgora = 1;

  if (goLiveCourseModalType === CourseModalType.GoLive) {
    cta = { ...goLiveCard?.cta1 };
    isAgora = goLiveCard?.cta1?.isAgora;
  } else {
    cta = { ...goLiveCard?.cta2 };
    isAgora = goLiveCard?.cta2?.isAgora;
  }

  if (!isEditing) {
    goLiveData = {
      cta,
      isAgora,
      ...goLiveCard,
    };
  }

  if (liveCard && liveCard.isAgora == 0) {
    saveLiveData({ ...res?.data?.session, mobile });
  } else {
    saveLiveData({ ...res?.data, mobile });
  }
  savePathname(path);
  onSuccess(goLiveData);
};

export default goLiveUtil;
