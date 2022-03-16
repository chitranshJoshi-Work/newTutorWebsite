import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseIcon from "@/images/CloseIcon.png";

function Modal({
  customClass,
  customProps,
  maxHeight,
  showModal,
  children,
  handleClose,
  header,
  showBottomLine = true,
}) {
  const [returnContent, setReturnContent] = useState(true);

  // useEffect(() => {
  //   if (showModal) {

  //     setReturnContent(showModal);
  //   } else {

  //   }
  // }, [showModal]);

  useEffect(() => {
    if (returnContent) {
    } else {
      setTimeout(() => {
        handleClose();
      }, 300);
    }
  }, [returnContent]);

  return (
    <div
      className={
        returnContent
          ? "ModalWrapper blockSlide ModalWrapper__Show"
          : "ModalWrapper blockSlide ModalWrapper__Hide"
      }
    >
      <div
        onClick={handleClose}
        className={
          returnContent ? "Backdrop Backdrop__Show" : "Backdrop Backdrop__Hide"
        }
      />
      <div
        className={
          returnContent
            ? `Modal Modal__Show ${customClass ? customClass : ""}`
            : `Modal Modal__Hide ${customClass ? customClass : ""}`
        }
        {...customProps}
      >
        <div
          className="Modal--Close"
          onClick={() => {
            setReturnContent(false);
            handleClose();
          }}
        >
          <Image
            src={CloseIcon}
            alt="X"
            width="24px"
            height="24px"
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          className="Modal__Head"
          style={{
            borderBottom: header ? "1px solid #e5e5e5" : "",
          }}
        >
          {header ? <div className="Modal__Head--Details">{header}</div> : ""}
        </div>

        <div className="Modal__Body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
