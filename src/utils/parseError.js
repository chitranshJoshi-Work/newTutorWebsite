import toast from "react-hot-toast";

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

export default parseError;
