import React, { ButtonHTMLAttributes } from "react";
import { clns } from "../helpers";
import s from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "small" | "default" | "large";
  view?: "primary" | "default" | "dashed" | "text" | "link";
  danger?: boolean;
  ghost?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  view = "default",
  danger,
  children,
  ...props
}) => {
  return (
    <button
      className={clns(
        s.Button,
        size ? s[size] : "",
        s[view],
        danger ? s.danger : ""
      )}
      {...props}
    >
      {children}
    </button>
  );
};
