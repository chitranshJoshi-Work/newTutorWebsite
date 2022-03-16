import axios from "axios";
import CONSTANTS from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/root/src/utils/getAxiosConfig";

export const getAddressListService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.SHIPMENT_ADDRESSLIST_GET]?.method,
      apiEndPoints[CONSTANTS.SHIPMENT_ADDRESSLIST_GET]?.url,
      payload
    ),
  });
};

export const sendAddressDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.SHIPMENT_ADDRESSDATA_POST]?.method,
      apiEndPoints[CONSTANTS.SHIPMENT_ADDRESSDATA_POST]?.url,
      payload
    ),
  });
};

export const editAddressDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT]?.method,
      apiEndPoints[CONSTANTS.SHIPMENT_EDITADDRESSDATA_PUT]?.url,
      payload
    ),
  });
};

export const deleteAddressDataService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.SHIPMENT_DELETEADDRESSDATA_DELETE]?.method,
      apiEndPoints[CONSTANTS.SHIPMENT_DELETEADDRESSDATA_DELETE]?.url,
      payload
    ),
  });
};
