import axios from "axios";
import CONSTANTS from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/root/src/utils/getAxiosConfig";

export const getTabListService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.TABBAR_TAB_LIST_GET]?.method,
      apiEndPoints[CONSTANTS.TABBAR_TAB_LIST_GET]?.url,
      payload,
      payload?.token
    ),
  });
};
