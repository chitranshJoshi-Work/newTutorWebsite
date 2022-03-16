const ENUMS = {
  OPEN_VIDU_NEW: {
    createRoute: "create/new",
    updateRoute: "schedule/update",
    type: 1,
  },
  OPEN_VIDU_SCHEDULED: {
    createRoute: "create/new",
    updateRoute: "schedule/update",
    getDataRoute: (sessionId) => `get/existing/${sessionId}`,
    type: 1,
  },
  AGORA_NEW: {
    createRoute: "classes/createSession",
  },
};

export default ENUMS;
