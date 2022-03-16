import React, { useEffect, useState } from "react";

function Popup({ customClass, customProps, showPopup, children, handleClose }) {
  const [returnContent, setReturnContent] = useState(true);

  // useEffect(() => {
  //   if (returnContent) {
  //     document?.body?.setAttribute("style", "overflow-y: hidden;");
  //   } else {
  //     document?.body?.setAttribute("style", "overflow-y: unset;");
  //     setTimeout(() => {
  //       handleClose();
  //     }, 300);
  //   }
  // }, [returnContent]);

  return (
    <div
      className={
        returnContent
          ? "PopupWrapper blockSlide PopupWrapper__Show"
          : "PopupWrapper blockSlide PopupWrapper__Hide"
      }
    >
      <div
        onClick={() => setReturnContent(false)}
        className={
          returnContent ? "Backdrop Backdrop__Show" : "Backdrop Backdrop__Hide"
        }
      />
      <div
        className={
          returnContent
            ? `Popup Popup__Show ${customClass ? customClass : ""}`
            : `Popup Popup__Hide ${customClass ? customClass : ""}`
        }
        {...customProps}
      >
        {children}
      </div>
    </div>
  );
}

export default Popup;
