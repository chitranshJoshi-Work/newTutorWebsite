import axios from "axios";
import {
  getApiGraphUrl,
  getHeaders,
  getCountryCode,
  getUserAgent,
} from "@/root/src/utils/getAxiosConfig";

import { store } from "@/root/store";
export function executeQuery(payload) {
  const state = store.getState();
  const region = state?.persistedData?.organization?.countryCode;
  let regionHeader = axios.defaults.headers.common["region"];
  if (regionHeader !== region) {
    axios.defaults.headers.common["region"] = region ? region : "IN";
  }

  // variables = { ...variables, token };
  console.log("((((((((((((payloadVariables", payload);
  console.log(getUserAgent(), "ck");
  return axios
    .post(
      `${getApiGraphUrl()}`,
      {
        query: payload?.query,
        variables: {
          token: getHeaders()["x-access-token"],
          ...payload?.variables,
        },
      },
      {
        headers: {
          region: getCountryCode(),
          // "User-Agent": "getUserAgent()",
          // more: getUserAgent()
        },
      }
    )
    .then((response) => {
      let { errors } = response.data;
      if (errors)
        return {
          message: errors[0].message,
          data: response.data,
          hasErrors: true,
        };
      return response;
    })
    .catch((err) => {
      return err;
    });
}
