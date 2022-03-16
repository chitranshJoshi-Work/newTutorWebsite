import CONSTANTS from "./constants";

const apiEndPoints = {
  [CONSTANTS.TABBAR_TAB_LIST_GET]: {
    url: ({ courseId }) => `/v2/course/courseTabList/${courseId}`,
    method: "GET",
  },
};

export default apiEndPoints;
