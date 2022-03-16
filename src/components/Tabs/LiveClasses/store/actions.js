import CONSTANTS from "./constants";

export const getApiData = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const toggleDetailsModal = (payload) => {
  return {
    type: CONSTANTS.LIVECLASSES_MODALSTATE_TOGGLE,
    payload,
  };
};

export const toggleDeleteModal = (payload) => {
  return {
    type: CONSTANTS.LIVECLASSES_DELETEMODALSTATE_TOGGLE,
    payload,
  };
};

export const deleteClass = (payload) => {
  return {
    type: CONSTANTS.LIVECLASSES_DELETEDATA_DELETE,
    payload,
  };
};

export const setSessionDetails = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const clearData = (type) => {
  return {
    type,
    payload: null,
  };
};

export const clearAll = () => {
  return {
    type: CONSTANTS.LIVECLASS_CLEARDATA,
  };
};
