import toast from "react-hot-toast";

// GET AWS ASSETS URL BY GIVING ASSET NAME AND FOLDER NAME
export const getAwsAssets = (assetName, folderName = "contentStoreCommon") => {
  const baseURL = "https://cp-assets-web.s3.ap-south-1.amazonaws.com";
  const courseWebviewPrefix = "courseWebview";

  return `${baseURL}/${courseWebviewPrefix}/${folderName}/${assetName}`;
};

// GET HSL COLOR FROM A STRING (basically can be used for Avatars)
export const getColorFromString = (name, s = 50, l = 80) => {
  let hasher = 0;
  for (let i = 0; i < name.length; i++) {
    hasher = name.charCodeAt(i) + ((hasher << 5) - hasher);
  }
  let h = hasher % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
};

// PARSING ERROR MESSAGE FROM API RESPONSE
// AND SHOW TOAST BY DEFAULT BASED ON showToast
export const parseError = (err, showToast = true) => {
  if (err.message === "Network Error") {
    return "No internet connection";
  }
  // console.log(err, "*********error**parseError");
  try {
    if (showToast && window)
      toast?.error(err?.response?.data?.message || "Something went wrong");
  } catch (error) {}
  return err?.response?.data?.message || "Something went wrong";
};

// COMMON UTIL FOR GETTING REDUX ACTION BY TYPE AND PAYLOAD
export const getActionObject = (type, payload) => {
  return {
    type,
    payload,
  };
};
