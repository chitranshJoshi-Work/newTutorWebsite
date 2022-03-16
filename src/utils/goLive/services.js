import axios from "axios";
import CONSTANTS from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "../getAxiosConfig";

export const getLiveDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GOLIVE_DATA_GET]?.method,
      apiEndPoints[CONSTANTS.GOLIVE_DATA_GET]?.url,
      payload
    ),
  });
};

export const createLiveClassService = async (payload) => {
  console.log("COURSEGOLIVE__SERVICECALL", payload);
  return axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GOLIVE_SESSION_POST]?.method,
      () => apiEndPoints[CONSTANTS.GOLIVE_SESSION_POST]?.url(payload),
      payload?.payload
    ),
  });
};

export const updateLiveClassService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GOLIVE_SESSIONUPDATE_PUT]?.method,
      apiEndPoints[CONSTANTS.GOLIVE_SESSIONUPDATE_PUT]?.url,
      payload
    ),
  });
};

export const deleteLiveClassService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GOLIVE_SESSIONDELETE_DELETE]?.method,
      apiEndPoints[CONSTANTS.GOLIVE_SESSIONDELETE_DELETE]?.url,
      payload
    ),
  });
};
