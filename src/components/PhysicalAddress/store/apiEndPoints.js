import CONSTANTS from "./constants";

const urlPrefix = "/v2/course/student/address";

const apiEndPoints = {
  [CONSTANTS.SHIPMENT_ADDRESSLIST_GET]: {
    url: () => `${urlPrefix}`,
    method: "GET",
  },
  [CONSTANTS.SHIPMENT_ADDRESSDATA_POST]: {
    url: () => `${urlPrefix}`,
    method: "POST",
  },
  [CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT]: {
    url: ({ addressId }) => `${urlPrefix}/${addressId}`,
    method: "PUT",
  },
  [CONSTANTS.SHIPMENT_DELETEADDRESSDATA_DELETE]: {
    url: ({ addressId }) => `${urlPrefix}/${addressId}`,
    method: "DELETE",
  },
};

export default apiEndPoints;
