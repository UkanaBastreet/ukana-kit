import React from "react";

import s from "./Slot.module.scss";

interface SlotProps {}

export const Slot: React.FC<SlotProps> = () => {
  return (
    <>
      <div className={s.Slot}>Slot component</div>
    </>
  );
};
