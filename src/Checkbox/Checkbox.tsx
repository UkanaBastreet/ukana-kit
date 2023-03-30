import React, { InputHTMLAttributes, useState } from "react";

import s from "./Checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  const [is, setIs] = useState(false);
  return (
    <>
      <span className={s.Checkbox}>
        <span
          onClick={() => setIs(!is)}
          className={[s.handle, is ? s.active : ""].join(" ")}
        >
          <span className={s.check}>
            {is && <div className={s.flag}></div>}
          </span>
        </span>
        <span>{children}</span>
      </span>
    </>
  );
};
