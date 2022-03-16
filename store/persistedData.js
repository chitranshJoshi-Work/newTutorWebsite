import { store } from "@/root/store";
import { getUserAgent } from "../src/utils/getAxiosConfig";

// DEFAULT APP ACCENT COLOR
export const DEFAULT_APP_ACCENT_COLOR = `595bd4`;

// ACTION TYPES
export const ACTION_TYPES = {
  SET_PERSISTED_DATA: `SET_PERSISTED_DATA`,
  SET_USER_DETAILS_DATA: `SET_USER_DETAILS_DATA`,
  SET_ORG_DETAILS_DATA: `SET_ORG_DETAILS_DATA`,
  SET_DEVICE_TYPE: `SET_DEVICE_TYPE`,
};

// FUNCTION TO SET APP TOKEN AND COLOR
export const setAppConfig = () => {
  const userToken =
    new URLSearchParams(window?.location?.search).get("token") || "";
  const appAccent =
    new URLSearchParams(window?.location?.search).get("color") ||
    DEFAULT_APP_ACCENT_COLOR;
  const region =
    new URLSearchParams(window?.location?.search).get("region") || "IN";
  let userAgent = getUserAgent();
  // SETTING USER TOKEN AND APP ACCENT COLOR IN LOCAL STORAGE
  userToken && localStorage.setItem("userToken", userToken);
  appAccent && localStorage.setItem("appAccent", appAccent);
  region && localStorage.setItem("region", region);
  localStorage.setItem("userAgent", userAgent);
  // DISPATCHING SET APP CONFIG ACTION IF URL HAS TOKEN OR COLOR
  if (userToken || appAccent) {
    store.dispatch(
      setPersistedDataAction({
        userToken: userToken,
        appAccent: appAccent,
        region: region,
        deviceType: userAgent,
      })
    );
  }
};

// ACTIONS
export const setPersistedDataAction = (payload) => {
  return {
    type: ACTION_TYPES.SET_PERSISTED_DATA,
    payload,
  };
};

// INITIAL STATE
const persistedDataInitialState = {
  userToken: "",
  appAccent: "",
  region: "",
};

// STATE ALTERING FUNCTIONS
const setAppConfigReducer = ({ userToken, appAccent, region }) => {
  return {
    userToken: userToken,
    appAccent: appAccent,
    region: region,
  };
};
const setUserDetailsReducerFn = (payload) => {
  localStorage.setItem("userDetails", JSON.stringify(payload));
  return {
    userDetails: payload,
  };
};
const setOrgDetailsReducerFn = (payload) => {
  localStorage.setItem("orgDetails", JSON.stringify(payload));
  return {
    orgDetails: payload,
  };
};
const setDeviceTypeReducerFn = (payload) => {
  localStorage.setItem("deviceType", payload);
  return {
    deviceType: payload,
  };
};
// REDUCER
const persistedDataReducer = (state = persistedDataInitialState, action) => {
  console.log(action, "line 64");

  switch (action.type) {
    case ACTION_TYPES.SET_PERSISTED_DATA: {
      return { ...state, ...setAppConfigReducer(action?.payload) };
    }
    case ACTION_TYPES.SET_USER_DETAILS_DATA: {
      return { ...state, ...setUserDetailsReducerFn(action?.payload) };
    }
    case ACTION_TYPES.SET_ORG_DETAILS_DATA: {
      return { ...state, ...setOrgDetailsReducerFn(action?.payload) };
    }
    // case ACTION_TYPES.SET_DEVICE_TYPE: {
    //   return { ...state, ...setDeviceTypeReducerFn(action?.payload) };
    // }
    default:
      return state;
  }
};

export default persistedDataReducer;
