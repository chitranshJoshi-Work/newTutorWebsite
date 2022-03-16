const { default: CONSTANTS } = require("./constants");

// INITITALSTATE
const initialState = {
  tabListLoading: false,
  tabList: [],
  tabListError: false,
};

// FUNCTION
const setLoading = (value) => {
  return {
    tabListLoading: value,
  };
};

const setList = (value) => {
  return {
    tabList: value,
  };
};

const setError = (value) => {
  return {
    tabListError: value,
  };
};

// REDUCER
const tabBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.TABBAR_TAB_LIST_LOADING:
      return { ...state, ...setLoading(action.payload) };
    case CONSTANTS.TABBAR_TAB_LIST_SUCCESS:
      return { ...state, ...setList(action.payload) };
    case CONSTANTS.TABBAR_TAB_LIST_ERROR:
      return { ...state, ...setError(action.payload) };
    default:
      return state;
  }
};

export default tabBarReducer;
