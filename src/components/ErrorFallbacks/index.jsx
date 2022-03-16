import React from "react";
import FallbackComponent from "./FallbackComponent";

const ErrorFallbacks = ({ statusCode }) => {
  // ERROR FALLBACK CONTENT OBJECT
  const errorMessages = {
    404: {
      imageName: "brokenPencilThumbnail.svg",
      heading: "Ooops..!",
      text: "Page not found, please Page not found",
      buttonText: "Go Back",
    },
    500: {
      imageName: "brokenPencilThumbnail.svg",
      heading: "Ooops..!",
      text: "Something went wrong, please come back later",
      buttonText: "Try Again",
    },
    504: {
      imageName: "noInternetThumbnail.svg",
      heading: "Aaaah..!",
      text: "Could not connect to the internet. Please check your network.",
      buttonText: "Try Again",
    },
  };

  // FUNCTION TO GET ERROR MESSAGE OBJECT FROM STATUS CODE
  const getErrorMessage = (statusCode) => {
    if (errorMessages[statusCode]?.heading) {
      return errorMessages[statusCode];
    }
    return errorMessages[500];
  };

  return <FallbackComponent errorMessage={getErrorMessage(statusCode)} />;
};

export default ErrorFallbacks;
