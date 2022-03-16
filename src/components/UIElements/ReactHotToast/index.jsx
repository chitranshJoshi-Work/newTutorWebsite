import React from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import styles from "./ReactHotToast.module.scss";

const ReactHotToast = () => {
  // TOAST POSITION
  const toastPosition = "bottom-center";
  const toastDuration = 1000;
  const toastLimit = 1;

  const { toasts } = useToasterStore();

  // LIMITING THE NUMBER OF TOASTS TO SHOW AT A TIME
  React.useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= toastLimit) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);

  return (
    <Toaster
      position={toastPosition}
      toastOptions={{
        duration: toastDuration,
        className: styles.reactHotToast,
        success: {
          className: `${styles.reactHotToast} ${styles["reactHotToast--success"]}`,
        },
        error: {
          className: `${styles.reactHotToast} ${styles["reactHotToast--error"]}`,
        },
      }}
    />
  );
};

export default ReactHotToast;
