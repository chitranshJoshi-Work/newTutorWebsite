import CONSTANTS from "./constants";

const apiEndPoints = {
  [CONSTANTS.UPCOMINGCLASSES_LIST_GET]: {
    url: ({ courseId, limit, offset, facultyClasses }) =>
      `/v2/course/live/upcoming?courseId=${courseId}&limit=${limit}&offset=${offset}&facultyClasses=${facultyClasses}`,
    method: "GET",
  },
};

export default apiEndPoints;
