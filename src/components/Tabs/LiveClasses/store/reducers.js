import CONSTANTS from "./constants";

const inititalState = {
  liveClassLoading: false,
  liveCLassApiResponse: null,
  liveClassList: [],
  liveClassError: false,

  liveClassTotalCount: 0,
  liveClassOffset: 0,

  liveClassBeforeLoading: false,
  liveClassBeforeApiResponse: null,
  liveCLassBeforeError: false,

  liveClassModalDetailsLoading: false,
  liveClassModalDetailsApiResponse: null,
  liveCLassModalDetailsError: false,

  liveClassDeleteLoading: false,
  liveClassDeleteApiResponse: null,
  liveCLassDeleteError: false,

  liveClassActiveSessionId: null,
  liveClassActiveSessionIsAgora: null,

  showDetailModal: false,
  showDeleteModal: false,
};

// FUNCTIONS

// VIDEOS
const setLiveClassLoading = (value) => {
  return {
    liveClassLoading: value,
  };
};

const setLiveClassError = (value) => {
  return {
    liveClassError: value,
  };
};

const setLiveClassApiResponse = (value) => {
  return {
    liveClassApiResponse: value,
    liveClassLoading: false,
  };
};

const setLiveClassOffset = (value) => {
  return {
    liveClassOffset: value,
  };
};

const setLiveClassTotalCount = (value) => {
  return {
    liveClassTotalCount: value,
  };
};

const setLiveClassList = ({ list, offset, totalCount, currentList }) => {
  return {
    liveClassList: offset ? [...currentList, ...list] : list,
    ...setLiveClassOffset(offset),
    ...setLiveClassLoading(false),
    ...setLiveClassTotalCount(totalCount),
  };
};

// BEFORE
const setLiveClassBeforeLoading = (value) => {
  return {
    liveClassBeforeLoading: value,
  };
};

const setLiveClassBeforeError = (value) => {
  return {
    liveClassBeforeError: value,
  };
};

const setLiveClassBeforeApiResponse = (value) => {
  return {
    liveClassBeforeApiResponse: value,
  };
};

// MODAL
const setLiveClassModalDetailsLoading = (value) => {
  return {
    liveClassModalDetailsloading: value,
  };
};

const setLiveClassModalDetailsError = (value) => {
  return {
    liveClassModalDetailsError: value,
  };
};

const setLiveClassModalDetailsApiResponse = (value) => {
  return {
    liveClassModalDetailsApiResponse: value,
  };
};

// DETAILS
const setLiveClassDeleteLoading = (value) => {
  return {
    liveClassDeleteloading: value,
  };
};

const setLiveClassDeleteError = (value) => {
  return {
    liveClassDeleteError: value,
  };
};

const setLiveClassDeleteApiResponse = (value) => {
  return {
    liveClassDeleteApiResponse: value,
  };
};

// TOGGLES
const setShowDetailModal = (value) => {
  return {
    showDetailModal: value,
  };
};
const setShowDeleteModal = (value) => {
  return {
    showDeleteModal: value,
  };
};

// ACTIVESESSION
const setActiveSessionId = (value) => {
  return {
    liveClassActiveSessionId: value,
  };
};
const setActiveSessionIsAgora = (value) => {
  return {
    liveClassActiveSessionIsAgora: value,
  };
};

// REDUCER
const courseLiveClassReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CONSTANTS.LIVECLASSES_MODALSTATE_TOGGLE:
      return {
        ...state,
        ...setShowDetailModal(action.payload),
      };

    case CONSTANTS.LIVECLASSES_DELETEMODALSTATE_TOGGLE:
      return {
        ...state,
        ...setShowDeleteModal(action.payload),
      };

    case CONSTANTS.LIVECLASSES_VIDEOSDATA_LOADING:
      return {
        ...state,
        ...setLiveClassLoading(action.payload),
      };
    case CONSTANTS.LIVECLASSES_VIDEOSDATA_ERROR:
      return {
        ...state,
        ...setLiveClassError(action.payload),
      };
    case CONSTANTS.LIVECLASSES_VIDEOSDATA_SUCCESS:
      return {
        ...state,
        ...setLiveClassApiResponse(action.payload),
      };
    case CONSTANTS.LIVECLASSES_VIDEOSLIST_SUCCESS:
      return {
        ...state,
        ...setLiveClassList(action.payload),
      };

    case CONSTANTS.LIVECLASSES_BEFOREDATA_LOADING:
      return {
        ...state,
        ...setLiveClassBeforeLoading(action.payload),
      };
    case CONSTANTS.LIVECLASSES_BEFOREDATA_ERROR:
      return {
        ...state,
        ...setLiveClassBeforeError(action.payload),
      };
    case CONSTANTS.LIVECLASSES_BEFOREDATA_SUCCESS:
      return {
        ...state,
        ...setLiveClassBeforeApiResponse(action.payload),
      };

    case CONSTANTS.LIVECLASSES_DELETEDATA_LOADING:
      return {
        ...state,
        ...setLiveClassDeleteLoading(action.payload),
      };
    case CONSTANTS.LIVECLASSES_DELETEDATA_ERROR:
      return {
        ...state,
        ...setLiveClassDeleteError(action.payload),
      };
    case CONSTANTS.LIVECLASSES_DELETEDATA_SUCCESS:
      return {
        ...state,
        ...setLiveClassDeleteApiResponse(action.payload),
      };

    case CONSTANTS.LIVECLASSES_MODALDATA_LOADING:
      return {
        ...state,
        ...setLiveClassModalDetailsLoading(action.payload),
      };
    case CONSTANTS.LIVECLASSES_MODALDATA_ERROR:
      return {
        ...state,
        ...setLiveClassModalDetailsError(action.payload),
      };
    case CONSTANTS.LIVECLASSES_MODALDATA_SUCCESS:
      return {
        ...state,
        ...setLiveClassModalDetailsApiResponse(action.payload),
      };

    case CONSTANTS.LIVECLASSES_ACTIVESESSION_ID:
      return {
        ...state,
        ...setActiveSessionId(action.payload),
      };

    case CONSTANTS.LIVECLASSES_ACTIVESESSION_ISAGORA:
      return {
        ...state,
        ...setActiveSessionIsAgora(action.payload),
      };

    case CONSTANTS.LIVECLASS_CLEARDATA: {
      return inititalState;
    }
    default:
      return state;
  }
};

export default courseLiveClassReducer;
