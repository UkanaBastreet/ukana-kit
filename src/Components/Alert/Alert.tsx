import React, { ReactNode } from "react";

import s from "./Alert.module.scss";

interface AlertProps {
  children?: ReactNode;
  title: string;
  description?: string;
  banner?: boolean;
  view: "error" | "info" | "success" | "warning";
}

export const Alert: React.FC<AlertProps> = ({
  children,
  title,
  description,
  banner,
  view,
  ...props
}) => {
  return (
    <>
      <div
        className={[s.Alert, banner ? s.banner : "", view ? s[view] : ""]
          .join(" ")
          .trim()}
      >
        <header>{title}</header>
        {children && <main>{children}</main>}
        {children}
      </div>
    </>
  );
};
