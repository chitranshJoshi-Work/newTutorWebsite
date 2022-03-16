import axios from "axios";
import CONSTANTS from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/root/src/utils/getAxiosConfig";

export const getUpcomingClassesService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.UPCOMINGCLASSES_LIST_GET]?.method,
      apiEndPoints[CONSTANTS.UPCOMINGCLASSES_LIST_GET]?.url,
      payload
    ),
  });
};
