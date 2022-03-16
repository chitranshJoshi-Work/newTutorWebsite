import { CONSTANTS } from "./constants";

const urlPrefix = `/v2/course/order`;
const apiEndPoints = {
  [CONSTANTS.CREATE_ORDER_POST]: {
    url: () => `${urlPrefix}/create`,
    method: "POST",
  },
  [CONSTANTS.PAYMENT_CHECKOUT_GET]: {
    url: (id) => `${urlPrefix}/checkout/${id}`,
    method: "GET",
  },
  [CONSTANTS.CHECK_PAYMENT_STATUS_GET]: {
    url: (id) => `${urlPrefix}/${id}/status`,
    method: "GET",
  },
};

export default apiEndPoints;
