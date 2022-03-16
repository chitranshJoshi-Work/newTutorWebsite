import CONSTANTS from "./constants";

export const getLiveDataAction = (payload) => {
  return {
    type: CONSTANTS.GOLIVE_DATA_GET,
    payload,
  };
};

export const createLiveSessionAction = (payload) => {
  console.log("COURSEGOLIVE__ACTIONCALL", payload);
  return {
    type: CONSTANTS.GOLIVE_SESSION_POST,
    payload,
  };
};

export const updateLiveSessionAction = (payload) => {
  return {
    type: CONSTANTS.GOLIVE_SESSIONUPDATE_UPDATE,
    payload,
  };
};

export const deleteLiveSessionAction = (payload) => {
  return {
    type: CONSTANTS.GOLIVE_SESSIONDELETE_DELETE,
    payload,
  };
};

export const goLiveAction = (payload) => {
  return {
    type: CONSTANTS.GOLIVE_REDIRECT,
    payload,
  };
};
