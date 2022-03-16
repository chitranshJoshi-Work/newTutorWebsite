import CONSTANTS from "./constants";

// INITIAL STATE
const courseContentInitialState = {
  ACTIVE_COURSE_CONTENT_FOLDER_ID: 0,

  loadingStateGET_FREE_COURSE_CONTENT: true,
  apiResGET_FREE_COURSE_CONTENT: [],
  hasMoreGET_FREE_COURSE_CONTENT: true,
  lastOffsetGET_FREE_COURSE_CONTENT: 0,
  lenGET_FREE_COURSE_CONTENT: 0,

  loadingStateGET_COURSE_CONTENT: true,
  apiResGET_COURSE_CONTENT: [],
  hasMoreGET_COURSE_CONTENT: true,
  lastOffsetGET_COURSE_CONTENT: 0,
  lenGET_COURSE_CONTENT: 0,

  currentFolderGET_COURSE_CONTENT: {},
  parentFolderGET_COURSE_CONTENT: {},

  loadingStateGET_COURSE_CONTENT_TEST_STATS: false,
  apiResGET_COURSE_CONTENT_TEST_STATS: {},

  loadingStateADD_PREVIEW_VIDEO_CONTENT: false,
  apiResADD_PREVIEW_VIDEO_CONTENT: {},
};

// FUNCTIONS TO ALTER STATE
const setFetchingContent = (loadingState) => {
  return {
    loadingStateGET_COURSE_CONTENT: loadingState,
  };
};
const setOffset = (offset, dontChangeOffset = false) => {
  return dontChangeOffset
    ? {}
    : {
        lastOffsetGET_COURSE_CONTENT: offset,
      };
};
const setHasMore = (hasMore) => {
  return {
    hasMoreGET_COURSE_CONTENT: hasMore,
  };
};
const setOffsetFreeContent = (offset, dontChangeOffset = false) => {
  return dontChangeOffset
    ? {}
    : {
        lastOffsetGET_FREE_COURSE_CONTENT: offset,
      };
};
const setHasMoreFreeContent = (hasMore) => {
  return {
    hasMoreGET_FREE_COURSE_CONTENT: hasMore,
  };
};
const setCourseContent = (
  { apiRes, offset, hasMore, dontChangeOffset },
  currCourseContent = []
) => {
  return {
    apiResGET_COURSE_CONTENT: [...currCourseContent, ...apiRes],
    ...setOffset(offset, dontChangeOffset),
    ...setHasMore(hasMore),
  };
};
const setCurrentFolder = (currentFolderDetails) => {
  return {
    currentFolderGET_COURSE_CONTENT: currentFolderDetails,
  };
};
const setParentFolder = (parentFolderDetails) => {
  return {
    parentFolderGET_COURSE_CONTENT: parentFolderDetails,
  };
};

const setFetchingFreeContent = (loadingState) => {
  return {
    loadingStateGET_FREE_COURSE_CONTENT: loadingState,
  };
};
const setFreeCourseContent = (
  { apiRes, offset, hasMore, dontChangeOffset },
  currCourseContent = []
) => {
  return {
    apiResGET_FREE_COURSE_CONTENT: [...currCourseContent, ...apiRes],
    ...setOffsetFreeContent(offset, dontChangeOffset),
    ...setHasMoreFreeContent(hasMore),
  };
};

// FUNCTIONS TO ALTER TEST STATS STATES
const clearCourseContentTestStats = () => {
  return {
    apiResGET_COURSE_CONTENT_TEST_STATS: {},
  };
};
const setFetchingTestStats = (loadingState) => {
  return {
    loadingStateGET_COURSE_CONTENT_TEST_STATS: loadingState,
  };
};
const fetchingTestStats = (apiRes) => {
  return {
    apiResGET_COURSE_CONTENT_TEST_STATS: apiRes,
  };
};

// FUNCTIONS TO ALTER PREVIEW VIDEO ITEM STATES
const clearPreviewVideoContent = () => {
  return {
    apiResADD_PREVIEW_VIDEO_CONTENT: {},
  };
};
const setFetchingVideoContent = (loadingState) => {
  return {
    loadingStateADD_PREVIEW_VIDEO_CONTENT: loadingState,
  };
};
const setPreviewVideoContent = (apiRes) => {
  return {
    apiResADD_PREVIEW_VIDEO_CONTENT: apiRes,
  };
};

// FUNCTIONS TO CLEAR CONTENT STATES
const clearCourseContent = () => {
  return {
    apiResGET_COURSE_CONTENT: [],
  };
};
const clearFreeCourseContent = () => {
  return {
    apiResGET_FREE_COURSE_CONTENT: [],
  };
};

// FUNCTION TO SET ACTIVE FOLDER ID
const setActiveFolderId = (folderId) => {
  return {
    ACTIVE_COURSE_CONTENT_FOLDER_ID: folderId,
  };
};

// REDUCER
const courseContentReducer = (state = courseContentInitialState, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIVE_COURSE_CONTENT_FOLDER_ID: {
      return { ...state, ...setActiveFolderId(action?.payload) };
    }

    // COURSE CONTENT REDUCER CASES
    case CONSTANTS.CLEAR_COURSE_CONTENT: {
      return { ...state, ...clearCourseContent() };
    }
    case CONSTANTS.GET_COURSE_CONTENT_LOADER: {
      return { ...state, ...setFetchingContent(true) };
    }
    case CONSTANTS.GET_COURSE_CONTENT_SUCCESS: {
      return {
        ...state,
        ...setFetchingContent(false),
        ...setCourseContent(action?.payload?.courseContent),
        ...setCurrentFolder(action?.payload?.currentFolderDetails),
        ...setParentFolder(action?.payload?.parentFolderDetails),
      };
    }
    case CONSTANTS.GET_COURSE_CONTENT_LOADED_MORE: {
      return {
        ...state,
        ...setFetchingContent(false),
        ...setCourseContent(
          action?.payload?.courseContent,
          state?.apiResGET_COURSE_CONTENT
        ),
      };
    }
    case CONSTANTS.GET_COURSE_CONTENT_FAILURE: {
      return { ...state, ...setFetchingContent(false) };
    }

    // FREE COURSE CONTENT REDUCER CASES
    case CONSTANTS.CLEAR_FREE_COURSE_CONTENT: {
      return { ...state, ...clearFreeCourseContent() };
    }
    case CONSTANTS.GET_FREE_COURSE_CONTENT_LOADER: {
      return { ...state, ...setFetchingFreeContent(true) };
    }
    case CONSTANTS.GET_FREE_COURSE_CONTENT_SUCCESS: {
      return {
        ...state,
        ...setFetchingFreeContent(false),
        ...setFreeCourseContent(action?.payload?.courseContent),
      };
    }
    case CONSTANTS.GET_FREE_COURSE_CONTENT_LOADED_MORE: {
      return {
        ...state,
        ...setFetchingFreeContent(false),
        ...setFreeCourseContent(
          action?.payload?.courseContent,
          state?.apiResGET_FREE_COURSE_CONTENT
        ),
      };
    }
    case CONSTANTS.GET_FREE_COURSE_CONTENT_FAILURE: {
      return { ...state, ...setFetchingFreeContent(false) };
    }

    // TEST STATS REDUCER CASES
    case CONSTANTS.CLEAR_FREE_COURSE_CONTENT: {
      return { ...state, ...clearCourseContentTestStats() };
    }
    case CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_LOADER: {
      return { ...state, ...setFetchingTestStats(true) };
    }
    case CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_SUCCESS: {
      return {
        ...state,
        ...setFetchingTestStats(false),
        ...fetchingTestStats(action?.payload),
      };
    }
    case CONSTANTS.GET_COURSE_CONTENT_TEST_STATS_FAILURE: {
      return { ...state, ...setFetchingTestStats(false) };
    }

    // VIDEO PREVIEW ITEM CASES
    case CONSTANTS.CLEAR_PREVIEW_VIDEO_CONTENT: {
      return { ...state, ...clearPreviewVideoContent() };
    }
    case CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_LOADER: {
      return { ...state, ...setFetchingVideoContent(true) };
    }
    case CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_SUCCESS: {
      return {
        ...state,
        ...setPreviewVideoContent(action?.payload),
        ...setFetchingVideoContent(true),
      };
    }
    case CONSTANTS.ADD_PREVIEW_VIDEO_CONTENT_FAILURE: {
      return {
        ...state,
        ...clearPreviewVideoContent(),
        ...setFetchingVideoContent(false),
      };
    }
    default:
      return state;
  }
};

export default courseContentReducer;
