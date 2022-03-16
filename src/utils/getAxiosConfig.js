import { store } from "@/root/store";

// DEFUALT APP_API_VERSION IF NOT PROVIDED IN URL OBJECT
const DEFAULT_API_VERSION = 20;

// NEXT_PUBLIC_ENV
const urlObject = {
  PROD: {
    BASE_URL: "https://api.classplusapp.com",
    API_GRAPH_URL: "https://api.classplusapp.com/cams/graph-api",
  },
  PREPROD: {
    BASE_URL: "https://apip-gcp.classplusapp.com",
    API_GRAPH_URL: "https://apip-gcp.classplusapp.com/cams/graph-api",
  },
  STAGING: {
    BASE_URL: "https://store.amarendra.dev.classplus.co",
    API_GRAPH_URL: "https://store.amarendra.dev.classplus.co/cams/graph-api",
  },
};

// GET STATIC TOKEN
const getStaticToken = () =>
  "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc0MDU4ODcsIm9yZ0lkIjoxNzAsInR5cGUiOjEsIm1vYmlsZSI6IjkxNzAzMjQyNzc1OCIsIm5hbWUiOiJIUFZNWFdESSIsImVtYWlsIjoic3VicmF2ZXRpQGNsYXNzcGx1cy5jbyIsImlzSW50ZXJuYXRpb25hbCI6MCwiZGVmYXVsdExhbmd1YWdlIjoiRU4iLCJjb3VudHJ5Q29kZSI6IklOIiwiY291bnRyeUlTTyI6IjkxIiwidGltZXpvbmUiOiJHTVQrNTozMCIsImlhdCI6MTY0NjkxMDM0OSwiZXhwIjoxNjQ3NTE1MTQ5fQ.9N1M70wqByyDGZ6B8enqgws69ISLw7XTPJap1dWhNnioU-uuLIb5X-GBcmK8dgOI";

// FUNCTION TO GET API BASE URL AND API VERSION
const getApiBaseURL = () => {
  return urlObject[process.env.NEXT_PUBLIC_ENV || "PREPROD"]?.BASE_URL;
};

export const getApiGraphUrl = () => {
  return urlObject[process.env.NEXT_PUBLIC_ENV || "PREPROD"]?.API_GRAPH_URL;
};

const getApiVersion = () => {
  return (
    urlObject[process.env.NEXT_PUBLIC_ENV || "PREPROD"]?.API_VERSION ||
    DEFAULT_API_VERSION
  );
};

// FETCHING USER TOKEN FROM URL
export const getUserToken = () => {
  // FETCHING ALL USER TOKENS STORED
  const userTokenReducer = store?.getState()?.persistedDataReducer?.userToken;
  const userTokenQueryParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window?.location?.search).get("token")
      : "";
  const userTokenLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("userToken")
      : "";
  const userTokenStatic = getStaticToken();

  // RETURNING USER TOKEN BASED ON PRIORITY
  const userToken =
    userTokenReducer ||
    userTokenQueryParam ||
    userTokenLocalStorage ||
    userTokenStatic;
  return userToken;
};
export const getCountryCode = () => {
  const countryCodeFromReducer =
    store?.getState()?.persistedDataReducer?.countryCode;
  const countryCodeParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window?.location?.search).get("region")
      : "";
  const countryCodeLocalStorage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("countryCode")
      : "";

  // RETURNING USER TOKEN BASED ON PRIORITY
  const countryCode =
    countryCodeParam ||
    countryCodeParam ||
    countryCodeLocalStorage ||
    countryCodeFromReducer ||
    "IN";

  return countryCode;
};
export const getUserAgent = () => {
  if (typeof window === "undefined") {
    return "server-render";
  }
  return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof window !== "undefined" && window?.navigator.userAgent
  )
    ? "Mobile - Android"
    : /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "Mobile - iOS"
    : "WEB";
};
// FUNCTION TO GET API HEADERS
export const getHeaders = (customToken, countryCode) => {
  // console.log(customToken, "getHeaders()");

  //"user-Agent": "Mobile - iOS",
  //"user-Agent": "Mobile - Android",
  console.log(countryCode, "region");
  return {
    "x-access-token": customToken || getUserToken(),
    "Api-Version": getApiVersion(),
    region: countryCode ? countryCode : getCountryCode(),
    // "user-agent": getUserAgent(),
    // "user":getUserAgent(),
  };
};

// DEFAULT AXIOS CONFIG FOR API CALLS
const getAxiosConfig = (
  method,
  urlCallback,
  payload,
  customToken,
  countryCode,
  extraHeaders
) => {
  return {
    method: method, // API METHOD ex. GET POST PATCH
    url: `${getApiBaseURL()}${urlCallback(payload)}`, // PASSING WHOLE PAYLOAD OBJECT IN URL CALLBACK (DESTRUCT IN ENDPOINTS)
    ...(method === "GET" ? {} : { data: payload }), // PAYLOAD DATA
    headers: { ...getHeaders(customToken, countryCode), ...extraHeaders }, // API HEADERS // CUSTOM TOKEN IF DON'T WANT TO USE USER TOKEN
  };
};

export default getAxiosConfig;
