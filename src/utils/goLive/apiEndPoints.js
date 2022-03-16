import CONSTANTS from "./constants";

const urlPrefix = "/v2/live";

const apiEndPoints = {
  [CONSTANTS.GOLIVE_DATA_GET]: {
    url: ({ route }) => {
      return `${urlPrefix}/${route}`;
    },
    method: "GET",
  },
  [CONSTANTS.GOLIVE_SESSION_POST]: {
    url: ({ route }) => {
      return `${urlPrefix}/${route}`;
    },
    method: "POST",
  },
  [CONSTANTS.GOLIVE_SESSIONUPDATE_PUT]: {
    url: ({ route }) => {
      return `${urlPrefix}/${route}`;
    },
    method: ({ type }) => {
      return type ? "PUT" : "PATCH";
    },
  },
  [CONSTANTS.GOLIVE_SESSIONDELETE_DELETE]: {
    url: ({ route }) => {
      return `${urlPrefix}/${route}`;
    },
    method: "DELETE",
  },
};

export default apiEndPoints;
