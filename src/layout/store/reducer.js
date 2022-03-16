import CONSTANTS from "./constants";
// INITITALSTATE
const initialState = {
  allowScroll: true,
  heading: "",
};

// FUNCTIONS
const setHeading = (value) => {
  return {
    heading: value,
  };
};

const toggleScroll = (value) => {
  return {
    allowScroll: value,
  };
};

// REDUCER
const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LAYOUT_PAGE_HEADING:
      return {
        ...state,
        ...setHeading(action.payload),
      };
    case CONSTANTS.LAYOUT_SCROLL_TOGGLE:
      return {
        ...state,
        ...toggleScroll(action.payload),
      };
    default:
      return state;
  }
};

export default layoutReducer;
