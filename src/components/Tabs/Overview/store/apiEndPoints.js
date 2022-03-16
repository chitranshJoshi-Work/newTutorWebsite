const endpoints = {
  GET_TAB_LISTS: {
    url: ({ courseId }) => `/v2/course/courseTabList/1668`,
    method: "GET",
  },
  GET_COURSE_OVERVIEW: {
    url: ({ courseId }) => `/v2/course/${courseId}?storeEvent=true`,
    method: "GET",
  },

  GET_USER_DETAILS: {
    url: () => `/v2/users/details`,
    method: "GET",
  },
  GET_ORG_DETAILS: {
    url: () => `/v2/org/details`,
    method: "GET",
  },
  POST_LIKE_COURSE: {
    url: ({ courseId }) => `/v2/course/like/update`,
    method: "POST",
  },
  GET_ORG_DETAILS: {
    url: ({ courseId }) => `/v2/org/details`,
    method: "GET",
  },
  POST_TIGHT_ON_BUDGET_BOTTOMSHEET: {
    url: ({}) => `/v2/course/installment/alert`,
    method: "POST",
  },
  FUNNEL_TRACK_API: {
    url: () => `/v2/course/storeEvent/track`,
    method: "POST",
    params: [],
  },
};
export default endpoints;
