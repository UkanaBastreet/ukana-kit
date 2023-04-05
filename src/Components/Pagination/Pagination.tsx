import React, { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import s from "./Pagination.module.scss";

interface PaginationProps {
  count: number;
  limit: number;
  target: number;
  onSelectHandler: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  count,
  limit,
  target,
  onSelectHandler,
}) => {
  const [pagesList, setPagesList] = useState<number[]>([]);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setSelected(target);
    let arr: number[] = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    setPagesList(arr);
  }, []);

  const onClickHandler = (p: number) => {
    onSelectHandler(p);
    setSelected(p);
  };
  function incrementPage(): void {
    selected && setSelected((s) => s + 1);
  }
  function decrementPage(): void {
    selected && setSelected((s) => s - 1);
  }

  return (
    <div className={s.Pagination}>
      <Button disabled={selected <= 1} onClick={decrementPage}>
        {"<"}
      </Button>
      {selected &&
        pagesList
          .filter((p) => {
            let delta = Math.ceil(limit / 2);
            let rate = 0;
            if (count - selected < delta) {
              rate = count - selected - delta + 1;
            } else if (selected < delta) {
              rate = delta - selected;
            }
            return p > selected - delta + rate && p < selected + delta + rate;
          })
          .map((p) => (
            <Button
              // design={+p === +selected ? "active" : "ghost"}
              disabled={+p === +selected}
              onClick={() => onClickHandler(p)}
              key={p}
            >
              {p}
            </Button>
          ))}
      <Button disabled={selected >= count} onClick={incrementPage}>
        {">"}
      </Button>
    </div>
  );
};
