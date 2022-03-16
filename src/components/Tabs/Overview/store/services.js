import axios from "axios";
import apiEndPoints from "./apiEndPoints";
import getAxiosConfig from "@/utils/getAxiosConfig";
const token =
  "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6NDU4MDU2OCwib3JnSWQiOjEsInR5cGUiOjEsIm1vYmlsZSI6IjkxNzAzMjQyNzc1OCIsIm5hbWUiOiJqYW1lcyIsImVtYWlsIjoic3VicmF2ZXRpQGNsYXNzcGx1cy5jbyIsImlzSW50ZXJuYXRpb25hbCI6MCwiZGVmYXVsdExhbmd1YWdlIjoiZW4iLCJjb3VudHJ5Q29kZSI6IklOIiwiY291bnRyeUlTTyI6IjkxIiwidGltZXpvbmUiOiJHTVQrNTozMCIsImlhdCI6MTY0NDQ3MjEwMywiZXhwIjoxNjQ2MjAwMTAzfQ.2mD_39uZJE5tqp64lPSKEUvQrHZjYJ2KN6WPHgJlEHRSeHtiMycG4bTfOv3ra1g_";
export async function getTabListService(payload) {
  console.log(
    "services.js: getTabListService()",
    apiEndPoints.GET_TAB_LISTS.url()
  );

  return axios
    .get(apiEndPoints.GET_TAB_LISTS.url(payload), {
      headers: {
        "x-access-token": token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
}
export async function getCourseOverviewService(payload) {
  console.log("overview service");
  return axios({
    ...getAxiosConfig(
      apiEndPoints["GET_COURSE_OVERVIEW"]?.method,
      apiEndPoints["GET_COURSE_OVERVIEW"]?.url,
      payload,
      payload?.token,
      payload?.countryCode
    ),
  });
}
export async function getPriceActionService(payload) {
  return axios
    .get(``, {
      headers: {
        "x-access-token": token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
}
export async function postLikeCourseService(payload) {
  return axios({
    ...getAxiosConfig(
      apiEndPoints["POST_LIKE_COURSE"]?.method,
      apiEndPoints["POST_LIKE_COURSE"]?.url,
      payload
    ),
  });
}
export async function getUserDetailsActionService(payload) {
  return axios({
    ...getAxiosConfig(
      apiEndPoints["GET_USER_DETAILS"]?.method,
      apiEndPoints["GET_USER_DETAILS"]?.url,
      payload
    ),
  });
}

export async function getOrgDetailsService(payload) {
  return axios({
    ...getAxiosConfig(
      apiEndPoints["GET_ORG_DETAILS"]?.method,
      apiEndPoints["GET_ORG_DETAILS"]?.url,
      payload
    ),
  });
}
export async function postTightOnBudgetBottomSheetClose(payload) {
  return axios({
    ...getAxiosConfig(
      apiEndPoints["POST_TIGHT_ON_BUDGET_BOTTOMSHEET"]?.method,
      apiEndPoints["POST_TIGHT_ON_BUDGET_BOTTOMSHEET"]?.url,
      payload
    ),
  });
}
export async function funnelTrackingService(payload) {
  console.log(payload);

  return axios({
    ...getAxiosConfig(
      apiEndPoints["FUNNEL_TRACK_API"]?.method,
      apiEndPoints["FUNNEL_TRACK_API"]?.url,
      payload,
      null,
      null,
      { "device-type": localStorage.getItem("userAgent") }
    ),
  });
}
