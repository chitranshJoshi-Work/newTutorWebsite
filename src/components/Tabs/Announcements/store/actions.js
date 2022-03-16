import CONSTANTS from "./constants";
export const getAnnouncementsAction = (payload) => {
  return {
    type: CONSTANTS.GET_ANNOUNCEMENTS,
    payload: payload,
  };
};
export const setAnnouncementsAttachedList = (payload) => {
  return {
    type: CONSTANTS.SET_ANNOUNCEMENTS_ATTACHED_LIST,
    payload: payload,
  };
};
export const clearCurrentAnnouncementsAttachedList = () => {
  return {
    type: CONSTANTS.CLEAR_CURRENT_ANNOUNCEMENTS_ATTACHED_LIST,
    payload: null,
  };
};
