import React from "react";

import s from "./Text.module.scss";

interface TextProps {
  children?: string;
  view?:  "underline" | "delete" | "italic" | "strong" | "mark";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled";
  editable?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  color,
  view,
  editable,
  ...props
}) => {
  return (
    <p
      contentEditable={editable}
      className={[
        s.Text,
        color ? s[color] : "",
        view ? s[view] : "",
        editable ? s.editable : "",
      ]
        .join(" ")
        .trim()}
    >
      {children?.toString()}
    </p>
  );
};
