import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  padding6,
  bRadius4,
  outline,
  small,
  xsmall,
  children,
  disabled,
  customClassName,
  ...buttonProps
}) => {
  return (
    <button
      className={`${styles.button} ${
        styles[outline ? "button--rippleEffectOutline" : "button--rippleEffect"]
      } ${outline && styles["button--outline"]} ${
        small && styles["button--small"]
      } ${xsmall && styles["button--xsmall"]} ${
        disabled && styles["button--disabled"]
      } ${bRadius4 && styles["button--bRadius4"]} ${
        padding6 && styles["button--padding6"]
      } ${customClassName ? customClassName : ""} `}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
