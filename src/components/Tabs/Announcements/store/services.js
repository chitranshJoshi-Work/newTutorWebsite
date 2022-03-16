import axios from "axios";
import CONSTANTS from "./constants";
import getAxiosConfig from "@/utils/getAxiosConfig";
import apiEndPoints from "./apiEndPoints";

// AXIOS SERVICE TO GET COURSE CONTENT
export const getAnnouncementsService = (payload) => {
  console.log(
    CONSTANTS.GET_ANNOUNCEMENTS_ENDPOINT,
    "endpoint",
    apiEndPoints[CONSTANTS.GET_ANNOUNCEMENTS_ENDPOINT]?.url
  );
  return axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GET_ANNOUNCEMENTS_ENDPOINT]?.method,
      apiEndPoints[CONSTANTS.GET_ANNOUNCEMENTS_ENDPOINT]?.url,
      payload
    ),
  });
};
