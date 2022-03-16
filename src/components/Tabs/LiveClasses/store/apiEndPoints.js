import CONSTANTS from "./constants";

const urlPrefix = "/v2";

const apiEndPoints = {
  [CONSTANTS.LIVECLASSES_VIDEOSDATA_GET]: {
    url: ({ route, limit, offset, type, entityId, searchParam }) => {
      return `${urlPrefix}/${route}?limit=${limit}&offset=${offset}&type=${type}&entityId=${entityId}${searchParam}`;
    },
    method: "GET",
  },
  [CONSTANTS.LIVECLASSES_BEFOREDATA_GET]: {
    url: ({ route, type, entityId }) => {
      return `${urlPrefix}/${route}?type=${type}&entityId=${entityId}`;
    },
    method: "GET",
  },
  [CONSTANTS.LIVECLASSES_MODALDATA_GET]: {
    url: ({ route, sessionId, isAgora }) => {
      return `${urlPrefix}/${route}?sessionId=${sessionId}&isAgora=${isAgora}`;
    },
    method: "GET",
  },
  [CONSTANTS.LIVECLASSES_DELETEDATA_DELETE]: {
    url: ({ route }) => {
      return `${urlPrefix}/${route}`;
    },
    method: "DELETE",
  },
};

export default apiEndPoints;
