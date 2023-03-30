import React from "react";
import { clns } from "../helpers";

import s from "./Quote.module.scss";

interface QuoteProps {
  children?: string;
  view?: "underline" | "delete" | "italic" | "strong" | "mark";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled";
  editable?: boolean;
}

export const Quote: React.FC<QuoteProps> = ({
  children,
  color,
  view,
  editable,
  ...props
}) => {
  return (
    <>
      <div
        className={clns(
          s.Quote,
          color ? s[color] : "",
          view ? s[view] : "",
          editable ? s.editable : ""
        )}
      >
        {children}
      </div>
    </>
  );
};
