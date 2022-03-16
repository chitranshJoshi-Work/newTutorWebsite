import CONSTANTS from "./constants";

const initialState = {
  liveCardDataLoading: false,
  liveCardData: null,
  liveClassDataError: false,
};

const setLiveCardDataLoading = (value) => {
  return {
    liveCardDataLoading: value,
  };
};

const setLiveCardData = (value) => {
  return {
    liveCardData: value,
  };
};

const setLiveClassDataError = (value) => {
  return {
    liveClassDataError: value,
  };
};

const courseGoLiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GOLIVE_DATA_LOADING:
      return {
        ...state,
        ...setLiveCardDataLoading(action.payload),
      };

    case CONSTANTS.GOLIVE_DATA_SUCCESS:
      return {
        ...state,
        ...setLiveCardData(action.payload),
      };

    case CONSTANTS.GOLIVE_DATA_ERROR:
      return {
        ...state,
        ...setLiveClassDataError(action.payload),
      };

    default:
      return state;
  }
};

export default courseGoLiveReducer;
