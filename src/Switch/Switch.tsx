import React, { useState } from "react";

import s from "./Switch.module.scss";

interface SwitchProps {
  cb?: (is: boolean) => void;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ cb, disabled, ...props }) => {
  const [is, setIs] = useState(false);
  const toggle = () => {
    cb && cb(is);
    setIs((is) => !is);
  };
  return (
    <>
      <span
        className={[s.Switch, is ? s.active : "", disabled ? s.disabled : ""]
          .join(" ")
          .trim()}
        onClick={!disabled ? toggle : () => {}}
      >
        <div className={s.handle}></div>
      </span>
    </>
  );
};
