import axios from "axios";
import { CONSTANTS } from "./constants";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/root/src/utils/getAxiosConfig";

export const createOrderPostService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.CREATE_ORDER_POST]?.method,
      apiEndPoints[CONSTANTS.CREATE_ORDER_POST]?.url,
      payload
    ),
  });
};

export const createCheckoutGetService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.PAYMENT_CHECKOUT_GET]?.method,
      apiEndPoints[CONSTANTS.PAYMENT_CHECKOUT_GET]?.url,
      payload
    ),
  });
};

export const checkPaymentStatusGetService = async (payload) => {
  return await axios({
    ...getAxiosConfig(
      apiEndPoints[CONSTANTS.CHECK_PAYMENT_STATUS_GET]?.method,
      apiEndPoints[CONSTANTS.CHECK_PAYMENT_STATUS_GET]?.url,
      payload
    ),
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
