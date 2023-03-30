import React, { AnchorHTMLAttributes } from "react";

import s from "./Anchor.module.scss";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor: React.FC<AnchorProps> = ({ children, ...props }) => {
  return (
    <>
      <a {...props} title={props.href} className={s.Anchor}>
        {children}
      </a>
    </>
  );
};
