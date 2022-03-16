import CONSTANTS from "./constants";

export const setActiveFolderIdAction = (payload) => {
  return {
    type: CONSTANTS.ACTIVE_COURSE_CONTENT_FOLDER_ID,
    payload,
  };
};

export const getFreeCourseContentAction = (payload) => {
  return {
    type: CONSTANTS.GET_FREE_COURSE_CONTENT,
    payload,
  };
};

export const getFreeCourseContentLoadMoreAction = (payload) => {
  return {
    type: CONSTANTS.GET_FREE_COURSE_CONTENT_LOAD_MORE,
    payload,
  };
};

export const getCourseContentAction = (payload) => {
  return {
    type: CONSTANTS.GET_COURSE_CONTENT,
    payload,
  };
};

export const getCourseContentLoadMoreAction = (payload) => {
  return {
    type: CONSTANTS.GET_COURSE_CONTENT_LOAD_MORE,
    payload,
  };
};

export const getCourseContentTestStatsAction = (payload) => {
  return {
    type: CONSTANTS.GET_COURSE_CONTENT_TEST_STATS,
    payload,
  };
};

export const addPreviewVideoContentAction = (payload) => {
  return {
    type: CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT,
    payload,
  };
};
