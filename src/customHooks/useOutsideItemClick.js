import React from "react";

const useOutsideItemClick = (func) => {
  React.useEffect(() => {
    document.addEventListener("click", func);
    return () => document.removeEventListener("click", func);
  }, [func]);
};

export default useOutsideItemClick;
