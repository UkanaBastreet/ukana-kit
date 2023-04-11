import React, { ReactNode } from "react";
import { clns } from "../../helpers";

import s from "./Header.module.scss";

interface HeaderProps {
  children?: ReactNode;
  className: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <div className={clns(className, s.Header)} {...props}>
        {children}
      </div>
    </>
  );
};
