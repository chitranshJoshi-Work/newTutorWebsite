import CONSTANTS from "./constants";

export const setPageHeadingAction = (payload = "") => {
  return {
    type: CONSTANTS.LAYOUT_PAGE_HEADING,
    payload,
  };
};

export const toggleHeaderScrollEffectAction = (payload) => {
  return {
    type: CONSTANTS.LAYOUT_SCROLL_TOGGLE,
    payload,
  };
};
