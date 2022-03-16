import CONSTANTS from "./constants";

export const getUpcomingClassesAction = (payload) => {
  return {
    type: CONSTANTS.UPCOMINGCLASSES_LIST_GET,
    payload,
  };
};
