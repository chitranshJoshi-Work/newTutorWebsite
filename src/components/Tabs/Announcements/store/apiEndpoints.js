import CONSTANTS, { CONTENT_LIMIT } from "./constants";

const urlPrefix = "/v2/course/announcement";

const apiEndPoints = {
  GET_ANNOUNCEMENTS_ENDPOINT: {
    url: ({ courseId, limit = CONTENT_LIMIT, offset = 0, search = "" }) => {
      return `${urlPrefix}/get/${courseId}?limit=10&offset=${offset}&search=${search}`;
    },
    method: "GET",
  },
};

export default apiEndPoints;
