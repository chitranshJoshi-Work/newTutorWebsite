export const getPaymentObj = (currentAmount, gatewayOrderId, responseNotes) => {
  console.log(responseNotes, "++++responseNotes", currentAmount);

  return JSON.stringify({
    screen: "UTIL_PAYMENTS",
    paramOne: currentAmount.toString(),
    paramTwo: JSON.stringify({
      deviceType: /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "ANDROID"
        : /iPhone|iPad|iPod/i.test(navigator.userAgent)
        ? "IOS"
        : "WEB",
      ...responseNotes,
    }),
    paramThree: gatewayOrderId,
  });
};
