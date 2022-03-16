import CONSTANTS from "./constants";

// INITIAL
const initialState = {
  upcomingClassListLoading: false,
  upcomingClassList: [],
  upcomingClassApiResponse: false,
  upcomingClassListError: false,

  upcomingClassOffset: 0,
  upcomingClassTotalCount: 0,
};

// FUNCTION
const setLoading = (value) => {
  return {
    upcomingClassListLoading: value,
  };
};

const setError = (value) => {
  return {
    upcomingClassListError: value,
  };
};

const setOffset = (value) => {
  return {
    upcomingClassOffset: value,
  };
};

const setTotalCount = (value) => {
  return {
    upcomingClassTotalCount: value,
  };
};

const setApiRes = (value) => {
  return {
    upcomingClassApiResponse: value,
    ...setLoading(false),
  };
};

const setList = ({ list, offset, totalCount, currentList }) => {
  console.log("UPCOMINGCLASSREF__OFFSET", offset);
  return {
    upcomingClassList: offset ? [...currentList, ...list] : list,
    ...setOffset(offset),
    ...setTotalCount(totalCount),
    ...setLoading(false),
  };
};

// REDUCER
const upcomingClassesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.UPCOMINGCLASSES_LIST_LOADING:
      return {
        ...state,
        ...setLoading(action.payload),
      };
    case CONSTANTS.UPCOMINGCLASSES_LIST_ERROR:
      return {
        ...state,
        ...setError(action.payload),
      };
    case CONSTANTS.UPCOMINGCLASSES_APIRES_SUCCESS:
      return {
        ...state,
        ...setApiRes(action.payload),
      };
    case CONSTANTS.UPCOMINGCLASSES_LIST_SUCCESS:
      return {
        ...state,
        ...setList(action.payload),
      };
    default:
      return state;
  }
};

export default upcomingClassesReducer;
