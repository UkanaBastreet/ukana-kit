import React from "react";

import s from "./Tag.module.scss";

interface TagProps {
  children?: React.ReactNode;
  color?:
    | "magenta"
    | "blue"
    | "cyan"
    | "geekBlue"
    | "gold"
    | "green"
    | "lime"
    | "orange"
    | "purple"
    | "red"
    | "volcano";
  dashed?: boolean;
  type?: "closable" | "new" | "common";
  size?: "default" | "small" | "large";
  onClick?: (e: any) => void;
  title?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  dashed,
  type,
  title,
  color,
  size,
}) => {
  return (
    <div
      title={title}
      className={[
        s.Tag,
        color ? s[color] : "",
        size ? s[size] : s.default,
        type ? s[type] : s.common,
        dashed ? s.dashed : "",
      ]
        .join(" ")
        .trim()}
    >
      <span>{children}</span>
    </div>
  );
};
