import CONSTANTS from "./constants";

export const toggleModalAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_MODAL_TOGGLE,
    payload,
  };
};

export const getAddressListAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_ADDRESSLIST_GET,
    payload,
  };
};

export const setAddressListAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_ADDRESSLIST_SUCCESS,
    payload,
  };
};

export const loadingAddressListAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_ADDRESSLIST_LOADING,
    payload,
  };
};

export const errorAddressListAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_ADDRESSLIST_ERROR,
    payload,
  };
};

export const sendAddressDataAction = (
  type = CONSTANTS.SHIPMENT_ADDRESSDATA_POST,
  payload
) => {
  return {
    type,
    payload,
  };
};

export const addressEditModeToggleAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_EDITADDRESSDATA_TOGGLE,
    payload,
  };
};

export const editAddressDataAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT,
    payload,
  };
};

export const deleteAddressDataAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_DELETEADDRESSDATA_DELETE,
    payload,
  };
};

export const setAddressDetailsAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_SET_ADDRESS,
    payload,
  };
};

export const setActiveAddressAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_SET_ACTIVEADDRESS,
    payload,
  };
};

export const setActionableAddressIdAction = (payload) => {
  return {
    type: CONSTANTS.SHIPMENT_SET_ACTIONABLEID,
    payload,
  };
};
