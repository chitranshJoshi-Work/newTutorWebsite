import toast from "react-hot-toast";

// FUNCTION TO PERFORM DEEPLINK ACTION FOR ANDROID AND IOS (paramOne should be string)
// const performActionAndroid = (actionType, paramOne) => {
//   window?.mobile?.performAction(
//     actionType,
//     paramOne
//   );
// }
// const performActioniOS = (actionType, paramOne) => {
//   window?.webkit?.messageHandlers?.performAction?.postMessage(
//     JSON.stringify({
//       screen: actionType,
//       paramOne: paramOne,
//     })
//   );
// }

// BOILERPLATE FUNCTION TO HIT DEEPLINK ACTION ON THE NATIVE APP (NEW)
// IF DON'T WANT TO HIT DEEPLINK ON THE PARTICULAR (iOS or android) DEVICE (pass the arguments as false)
export const hitContentDeeplinkNew = (
  actionType,
  paramOne,
  iOS = true,
  android = true,
  iOSparamOne = "", // INCASE YOU WANT TO SEND DIFFERENT PARAMS TO IOS NATIVE (should be string)
  iOSparamTwo = "", // INCASE YOU WANT TO SEND DIFFERENT PARAMS TO IOS NATIVE (should be string)
  androidParamOne = "" // INCASE YOU WANT TO SEND DIFFERENT PARAMS TO ANDROID NATIVE (should be string)
) => {
  try {
    // alert(`paramOne: ${iOSparamOne || JSON.stringify(paramOne)}`);
    console.log("A__________4", paramOne);
    android &&
      window?.mobile?.performAction(
        actionType,
        androidParamOne || JSON.stringify(paramOne)
      );
    iOS &&
      window?.webkit?.messageHandlers?.performAction?.postMessage(
        JSON.stringify({
          screen: actionType,
          paramOne: iOSparamOne || JSON.stringify(paramOne),
          ...(iOSparamTwo && { paramTwo: iOSparamTwo }),
        })
      );
  } catch (err) {
    toast.error("Something went wrong...");
  }
};

// BOILERPLATE FUNCTION TO HIT DEEPLINK ACTION ON THE NATIVE APP (OLD)
// IF DON'T WANT TO HIT DEEPLINK ON THE PARTICULAR (iOS or android) DEVICE (pass the arguments as false)
export const hitContentDeeplinkOld = (
  actionType,
  params,
  iOS = true,
  android = true
) => {
  const deeplinkJSON = {
    screen: actionType,
    ...(params?.paramOne && { paramOne: params?.paramOne }),
    ...(params?.paramTwo && { paramTwo: params?.paramTwo }),
    ...(params?.paramThree && { paramThree: params?.paramThree }),
    ...(params?.paramFour && { paramFour: params?.paramFour }),
    ...(params?.paramFive && { paramOne: params?.paramFive }),
  };
  console.log(deeplinkJSON);
  try {
    android &&
      window?.mobile?.onDeeplinkExecutedV2(JSON.stringify(deeplinkJSON));
    iOS &&
      window?.webkit?.messageHandlers?.onDeeplinkExecutedV2?.postMessage(
        JSON.stringify(deeplinkJSON)
      );
  } catch (err) {
    toast.error("Something went wrong...");
  }
};
