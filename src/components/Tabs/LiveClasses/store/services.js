import axios from "axios";
import CONSTANTS from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/root/src/utils/getAxiosConfig";

export const getLiveClassDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.LIVECLASSES_VIDEOSDATA_GET]?.method,
      apiEndPoints[CONSTANTS.LIVECLASSES_VIDEOSDATA_GET]?.url,
      payload
    ),
  });
};
export const getBeforeDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.LIVECLASSES_BEFOREDATA_GET]?.method,
      apiEndPoints[CONSTANTS.LIVECLASSES_BEFOREDATA_GET]?.url,
      payload
    ),
  });
};
export const getModalDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.LIVECLASSES_MODALDATA_GET]?.method,
      apiEndPoints[CONSTANTS.LIVECLASSES_MODALDATA_GET]?.url,
      payload
    ),
  });
};

export const deleteLiveClassService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.LIVECLASSES_DELETEDATA_DELETE]?.method,
      apiEndPoints[CONSTANTS.LIVECLASSES_DELETEDATA_DELETE]?.url,
      payload
    ),
  });
};
