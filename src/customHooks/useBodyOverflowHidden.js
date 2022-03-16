import React from "react";

const setBodyOverflow = (overflow) => {
  document.body.style.overflow = overflow;
};

const useBodyOverflowHidden = () => {
  React.useEffect(() => {
    // SETTING BODY OVERFLOW HIDDEN TO STOP SCROLLING THE PAGE
    setBodyOverflow("hidden");
    return () => setBodyOverflow("unset");
  });
};

export default useBodyOverflowHidden;
