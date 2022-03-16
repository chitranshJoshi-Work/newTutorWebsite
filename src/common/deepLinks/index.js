import makeDebugAPICall from "@/utils/debuggerAxios";

const BASE_URL = "https://store-farhan.dev.classplus.co";

export const makeApiCal = (action) => {
  // PARAMETERS - method, route, storeData, catchError, body
  switch (action.method) {
    case "GET":
      return fetch(`${BASE_URL}/${action.route}`, {
        method: "GET",
        headers: {
          //   "x-access-token": token,
          "Content-Type": "application/json",
          Connection: "keep-alive",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          res?.status === "success"
            ? action.storeData(res?.data)
            : action.catchError(res.message);
        })
        .catch((err) => {
          action.catchError(err);
        });
    case "POST":
      return fetch(`${BASE_URL}/${action.route}`, {
        method: "POST",
        headers: {
          //   "x-access-token": token,
          "Content-Type": "application/json",
          Connection: "keep-alive",
        },
        body: JSON.stringify(action.body),
      })
        .then((res) => res.json())
        .then((res) => {
          res?.status === "success"
            ? action.storeData(res?.data)
            : action.catchError(res.message);
        })
        .catch((err) => action.catchError(err));
    default:
      return;
  }
};

export const directDeepLink = (url, source, logDeepLinksToLocal) => {
  console.log(url, source, logDeepLinksToLocal);

  const action = {
    method: "POST",
    route: "v2/storeDeeplink",
    body: { deeplink: url },
    storeData: (e) => console.log(e),
    catchError: (e) => console.error(e),
  };
  switch (source) {
    case "SOURCE_HOME":
      return () => {
        window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
          JSON.stringify(url)
        );
        window?.mobile?.exceuteDeeplink(JSON.stringify(url));
        makeApiCal(action);
        if (logDeepLinksToLocal) {
          makeDebugAPICall(JSON.stringify(url));
        }
      };
    case "SOURCE_WEBVIEW":
      return () => {
        // window?.webkit?.messageHandlers?.onDeeplinkExecuted?.postMessage(
        //   `${url?.screen},${url?.paramOne},${url?.paramTwo}`
        // );
        window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
          JSON.stringify(url)
        );
        window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));

        makeApiCal(action);
        if (logDeepLinksToLocal) {
          makeDebugAPICall(JSON.stringify(url));
        }
      };
    case "CHAT_DETAILS_CREATE_V2":
      return () => {
        window?.webkit?.messageHandlers?.onDeeplinkExecuted?.postMessage(
          `${url?.screen},${url?.paramOne},${url?.paramTwo}`
        );

        // window?.mobile?.onDeeplinkExecuted(
        //   `${url?.screen},${url?.paramOne},${url?.paramTwo}${url?.paramThree}${url?.paramFour}`
        // );
        window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(url));

        makeApiCal(action);
        if (logDeepLinksToLocal) {
          makeDebugAPICall(JSON.stringify(url));
        }
      };
    case "UTIL_WHATSAPP":
      // alert();
      return (data) => {
        window.mobile.onDeeplinkExecutedV2(
          JSON.stringify({
            screen: "UTIL_WHATSAPP",
            paramOne: data?.paramOne,
            paramTwo: data?.paramTwo,
          })
        );
      };
    case "UTIL_DOWNLOAD":
      return (jsonVal) => {
        window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(jsonVal));
        //ios
        window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
          JSON.stringify(jsonVal)
        );
      };
    case "UTIL_WEBVIEW":
      return (data) => {
        window?.mobile?.onDeeplinkExecutedV2(
          JSON.stringify({
            screen: "UTIL_WEBVIEW",
            paramOne: data?.paramOne,
            paramThree: data?.paramThree,
          })
        );
      };
    case "UTIL_BROWSER":
      return (data) => {
        console.log(data?.shareUrl);

        console.log(data?.shareUrl);
        console.log(
          JSON.stringify({ screen: "UTIL_BROWSER", paramOne: data?.shareUrl })
        );
        window?.mobile?.onDeeplinkExecutedV2(
          JSON.stringify({
            screen: "ACTION_SHARE_COURSE",
            paramOne: data?.shareUrl,
          })
        );

        console.log(data);
        window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
          JSON.stringify({
            screen: "ACTION_SHARE_COURSE",
            paramOne: JSON.stringify(data?.shareUrl),
          })
        );
      };
    case "UTIL_BROWSER":
      return () => {
        window?.mobile?.onDeeplinkExecutedV2(
          JSON.stringify({
            screen: "UTIL_BROWSER",
            paramOne:
              "https://t.me/share/url?url=https://tutorwebsite.staging.classplus/1600&text=Hey!%20I%E2%80%99m%20learning%20with%20BnN%20Classes%20and%20you%20can%20too.%20Here%E2%80%99s%20a%20course%20you%20might%20like:%20Payment%20Course%20101%20by%20string.%0A%20%20https://tutorwebsite.staging.classplus/1600?",
            paramTwo:
              "Hey! I’m learning with BnN Classes and you can too. Here’s a course you might like: Payment Course 101 by string.\n  https://tutorwebsite.staging.classplus/1600?",
          })
        );
      };
    case "UTIL_SHARE":
      return () => {
        window?.mobile?.onDeeplinkExecutedV2(
          JSON.stringify({ screen: "UTIL_SHARE", paramOne: "text" })
        );
      };

    case "UTIL_COPY":
      return () => {
        window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
          JSON.stringify(url)
        );
        window?.mobile?.onDeeplinkExecutedV2(
          JSON.stringify({
            screen: "UTIL_COPY",
            paramOne: url,
          })
        );
        makeApiCal(action);
        if (logDeepLinksToLocal) {
          makeDebugAPICall(JSON.stringify(url));
        }
      };
    default:
      return;
  }
};
