import axios from "axios";

const makeDebugAPICall = (data) => {
  // console.log("debug data ");
  // console.log("============================");
  // console.log(data);
  // console.log("============================");
  axios
    .post(
      "https://connetme.loca.lt/check",
      { data: JSON.stringify(data) },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .catch((err) => console.log(err));
};
export default makeDebugAPICall;
