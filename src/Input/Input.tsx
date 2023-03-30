import React, { InputHTMLAttributes } from "react";
import s from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return <input className={s.Input} {...props} />;
};
