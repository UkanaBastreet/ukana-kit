import React, { FC, ReactNode } from "react";
import s from "./Dropdown.module.scss";

interface DropdownProps {
  children?: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
  return (
    <>
      <div className={s.Dropdown}>{children}</div>;
    </>
  );
};
