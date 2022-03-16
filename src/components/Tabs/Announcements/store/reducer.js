import CONSTANTS, { CONTENT_LIMIT } from "./constants";
// INITITALSTATE
const initialState = {
  announcementsList: [],
  announcementsListLoader: true,
  announcementsListError: false,
  announcementsListSuccess: false,
  hasMoreLists: false,
  announcementsCurrentAttachedList: [],
  offset: 0,
};

// FUNCTIONS
const toggleAnnouncementsListLoaderFn = (value) => {
  console.log("listb", value);
  return {
    announcementsListLoader: value,
    announcementsListSuccess: false,
    announcementsListError: false,
  };
};
const toggleAnnouncementsListSuccessFn = (state, value) => {
  console.log(value);
  return {
    announcementsList: value?.isMoreContentToAppend
      ? [...state.announcementsList, ...value.data]
      : [...value?.data],
    announcementsListLoader: false,
    announcementsListSuccess: true,
    announcementsListError: false,
    hasMoreLists: value.hasMore,
    offset: value?.offset + CONTENT_LIMIT,
  };
};
const toggleAnnouncementsListFailureFn = (value) => {
  return {
    announcementsListLoader: false,
    announcementsListSuccess: false,
    announcementsListError: value,
  };
};

// REDUCER
const announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ANNOUNCEMENTS_LIST_SUCCESS:
      return {
        ...state,
        ...toggleAnnouncementsListSuccessFn(state, action.payload),
      };
    case CONSTANTS.SET_ANNOUNCEMENTS_LIST_FAILURE:
      return {
        ...state,
        ...toggleAnnouncementsListFailureFn(action.payload),
      };

    case CONSTANTS.SET_ANNOUNCEMENTS_LIST_LOADER:
      return {
        ...state,
        ...toggleAnnouncementsListLoaderFn(action.payload),
      };
    case CONSTANTS.SET_ANNOUNCEMENTS_ATTACHED_LIST:
      return {
        ...state,
        announcementsCurrentAttachedList: [...action.payload],
      };
    case CONSTANTS.CLEAR_CURRENT_ANNOUNCEMENTS_ATTACHED_LIST:
      return {
        ...state,
        announcementsCurrentAttachedList: [],
      };
    default:
      return state;
  }
};

export default announcementsReducer;
