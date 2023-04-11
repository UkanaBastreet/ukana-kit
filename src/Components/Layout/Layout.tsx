import React, { ReactNode } from "react";
import { clns } from "../../helpers";

import s from "./Layout.module.scss";

interface LayoutProps {
  children?: ReactNode;
  className: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <div className={clns(className, s.Layout)}>{children}</div>
    </>
  );
};
