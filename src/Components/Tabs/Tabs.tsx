import React, { useState } from "react";

import s from "./Tabs.module.scss";

interface TabsProps {
  children?: React.ReactNode[];
  titles: string[];
  width?: string;
  height?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  width,
  height,
  titles,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className={s.Tabs} style={{ width, height }}>
        <ul className={s.header}>
          {titles.map((title, id) => (
            <li
              className={[s.tab, id === index ? s.active : ""].join(" ")}
              onClick={() => setIndex(id)}
              key={id}
            >
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <div className={s.body}>{children?.length && children[index]}</div>
      </div>
    </>
  );
};
