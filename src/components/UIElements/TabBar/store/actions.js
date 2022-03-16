import CONSTANTS from "./constants";

export const getTabListAction = (payload) => {
  return {
    type: CONSTANTS.TABBAR_TAB_LIST_GET,
    payload,
  };
};
