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
  type?: "closable" | "new" | "default";
  onClick?: (e: any) => void;
  title?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  dashed,
  type = "default",
  title,
  color,
}) => {
  return (
    <div
      title={title}
      className={[s.Tag, color ? s[color] : "", s[type], dashed ? s.dashed : ""]
        .join(" ")
        .trim()}
    >
      <span>{children}</span>
    </div>
  );
};
