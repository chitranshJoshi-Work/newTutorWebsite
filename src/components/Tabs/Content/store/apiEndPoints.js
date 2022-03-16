import CONSTANTS, { CONTENT_LIMIT } from "./constants";

const urlPrefix = "/v2/course/content";

const apiEndPoints = {
  [CONSTANTS.GET_COURSE_CONTENT]: {
    url: ({
      courseId,
      folderId = 0,
      storeContentEvent = false,
      limit = CONTENT_LIMIT,
      offset = 0,
      search = "",
    }) => {
      return `${urlPrefix}/get?courseId=${courseId}&folderId=${folderId}&storeContentEvent=${storeContentEvent}&limit=${limit}&offset=${offset}&search=${search}`;
    },
    method: "GET",
  },
  [CONSTANTS.GET_FREE_COURSE_CONTENT]: {
    url: ({ courseId, limit = CONTENT_LIMIT, offset = 0 }) => {
      return `${urlPrefix}/get?courseId=${courseId}&freeContent=1&limit=${limit}&offset=${offset}`;
    },
    method: "GET",
  },
  [CONSTANTS.GET_COURSE_CONTENT_TEST_STATS]: {
    url: ({ courseId, testId, contentId }) => {
      return `${urlPrefix}/testStats/${courseId}/${testId}/${contentId}`;
    },
    method: "GET",
  },
};

export default apiEndPoints;
