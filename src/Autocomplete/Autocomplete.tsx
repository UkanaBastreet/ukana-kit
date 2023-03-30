import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  InputHTMLAttributes,
  useState,
} from "react";
import { Input } from "../Input/Input";
import s from "./Autocomplete.module.scss";

interface AutoCompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  itemsList: itemsListType[];
  onSelectHandler: (item: itemsListType) => void;
}
type itemsListType = {
  id: number;
  value: string;
};

export const Autocomplete: FC<AutoCompleteProps> = ({
  itemsList,
  onSelectHandler,
  ...props
}) => {
  const [list, setList] = useState(itemsList);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selecting, setSelecting] = useState<boolean>(false);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setIsOpen(true);
    const { value } = e.target;
    setList(() =>
      itemsList.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (list.length !== 1) return;
    onSelectHandler(list[0]);
    setSelecting(false);
    setIsOpen(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className={s.Autocomplete}>
      <Input
        onChange={onChangeHandler}
        onFocus={() => setIsOpen(true)}
        onBlur={() => !selecting && setIsOpen(false)}
        {...props}
      />
      {isOpen && (
        <ul
          className={s.itemsList}
          onMouseEnter={() => setSelecting(true)}
          onMouseLeave={() => setSelecting(false)}
        >
          {list.length !== 0 ? (
            list.map((item) => (
              <li
                onClick={() => {
                  onSelectHandler(item);
                  setSelecting(false);
                  setIsOpen(false);
                }}
                key={item.id}
              >
                {item.value}
              </li>
            ))
          ) : (
            <li className={s.noResultsLi}>No results...</li>
          )}
        </ul>
      )}
    </form>
  );
};
