import React, { useState } from "react";
import { Input } from "../Input/Input";

import s from "./TreeSelect.module.scss";

interface TreeSelectProps {
  title?: string;
  tree?: TreeItemProps[];
  cb?: (item: any) => void;
}
interface TreeItemProps {
  id: number;
  value: string;
  next?: TreeItemProps[];
  cb?: (item: TreeItemProps) => void;
}

export const TreeSelect: React.FC<TreeSelectProps> = ({ tree, cb, title }) => {
  return (
    <div className={s.TreeSelect}>
      <Input placeholder={title} />
      <div className={s.listContainer}>
        <ul className={s.list}>
          {tree &&
            tree.map((item) => <TreeItem cb={cb} {...item} key={item.id} />)}
        </ul>
      </div>
    </div>
  );
};

const TreeItem: React.FC<TreeItemProps> = ({ value, next }) => {
  const [is, setIs] = useState(false);
  return (
    <li className={s.item}>
      <span className={s["item"]}>
        <span className={s.toggle} onClick={() => setIs((is) => !is)}>
          {next ? (is ? "-" : "+") : ""}
        </span>
        <span className={s.value}>{value}</span>
      </span>
      <div
      //  className={s.next}
       >
        {next && is && (
          <ul className={s.list}>
            {next.map((item) => (
              <TreeItem {...item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
