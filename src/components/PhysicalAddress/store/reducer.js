import CONSTANTS from "./constants";

const initialState = {
  showShipmentAddressModal: false,

  addressList: [],
  addressDetails: null,
  activeAddress: null,
  actionableAddressId: null,
  selectedState: null,

  getListloading: false,
  getListerror: false,

  postAddressLoading: false,
  postAddressError: false,

  isEditMode: false,
  editAddressLoading: false,
  editAddressError: false,

  deleteAddressLoading: false,
  deleteAddressError: false,
};

const shipmentModalToggle = (state, action) => {
  return {
    ...state,
    showShipmentAddressModal: action.payload,
  };
};

const getAddressListFromApi = (state, action) => {
  return {
    ...state,
    getListloading: false,
    getListerror: false,
    addressList: action.payload,
  };
};

const loadingAddressList = (state, action) => {
  return {
    ...state,
    getListloading: true,
  };
};

const addressListError = (state, action) => {
  return {
    ...state,
    getListloading: false,
    getListerror: true,
  };
};

const setEditMode = (state, action) => {
  return {
    ...state,
    isEditMode: action?.payload,
  };
};

const loadingEditAction = (state, action) => {
  return {
    ...state,
    editAddressLoading: true,
  };
};

const errorEditAction = (state, action) => {
  return {
    ...state,
    editAddressError: true,
    editAddressLoading: false,
  };
};

const loadingDeleteAction = (state, action) => {
  return {
    ...state,
    deleteAddressLoading: true,
  };
};

const errorDeleteAction = (state, action) => {
  return {
    ...state,
    deleteAddressError: true,
    deleteAddressLoading: true,
  };
};

const setAddressDetails = (state, action) => {
  return {
    ...state,
    addressDetails: action.payload,
  };
};

const setActiveAddress = (state, action) => {
  return {
    ...state,
    activeAddress: action.payload,
    postAddressLoading: false,
    postAddressError: false,
  };
};

const changeActionableAddressId = (state, action) => {
  return {
    ...state,
    actionableAddressId: action.payload,
  };
};

const physicalShipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SHIPMENT_MODAL_TOGGLE:
      return shipmentModalToggle(state, action);
    case CONSTANTS.SHIPMENT_ADDRESSLIST_SUCCESS:
      return getAddressListFromApi(state, action);
    case CONSTANTS.SHIPMENT_ADDRESSLIST_LOADING:
      return loadingAddressList(state, action);
    case CONSTANTS.SHIPMENT_ADDRESSLIST_ERROR:
      return addressListError(state, action);
    case CONSTANTS.SHIPMENT_EDITADDRESSDATA_LOADING:
      return loadingEditAction(state, action);
    case CONSTANTS.SHIPMENT_EDITADDRESSDATA_ERROR:
      return errorEditAction(state, action);
    case CONSTANTS.SHIPMENT_DELETEADDRESSDATA_LOADING:
      return loadingDeleteAction(state, action);
    case CONSTANTS.SHIPMENT_DELETEADDRESSDATA_ERROR:
      return errorDeleteAction(state, action);
    case CONSTANTS.SHIPMENT_ADDRESSDATA_SUCCESS:
      return setActiveAddress(state, action);
    case CONSTANTS.SHIPMENT_EDITADDRESSDATA_SUCCESS:
      return setActiveAddress(state, action);
    case CONSTANTS.SHIPMENT_SET_ADDRESS:
      return setAddressDetails(state, action);
    case CONSTANTS.SHIPMENT_SET_ACTIVEADDRESS:
      return setActiveAddress(state, action);
    case CONSTANTS.SHIPMENT_SET_ACTIONABLEID:
      return changeActionableAddressId(state, action);
    case CONSTANTS.SHIPMENT_EDITADDRESSDATA_TOGGLE:
      return setEditMode(state, action);
    default:
      return state;
  }
};

export default physicalShipmentReducer;
