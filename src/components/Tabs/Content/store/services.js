import axios from "axios";
import CONSTANTS from "./constants";
import getAxiosConfig from "@/utils/getAxiosConfig";
import apiEndPoints from "./apiEndPoints";

// AXIOS SERVICE TO GET COURSE CONTENT
export const getCourseContentService = (payload) => {
  return axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GET_COURSE_CONTENT]?.method,
      apiEndPoints[CONSTANTS.GET_COURSE_CONTENT]?.url,
      payload
    ),
  });
};

// AXIOS SERVICE TO GET FREE COURSE CONTENT
export const getFreeCourseContentService = (payload) => {
  return axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GET_FREE_COURSE_CONTENT]?.method,
      apiEndPoints[CONSTANTS.GET_FREE_COURSE_CONTENT]?.url,
      payload
    ),
  });
};

// AXIOS SERVICE TO GET TEST STATS
export const getCourseContentTestStatsService = (payload) => {
  return axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.GET_COURSE_CONTENT_TEST_STATS]?.method,
      apiEndPoints[CONSTANTS.GET_COURSE_CONTENT_TEST_STATS]?.url,
      payload
    ),
  });
};
