import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: any = null) => {
  if (typeof window !== "undefined") {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    const setValueWithLocalStorage = (newValue: any) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setValueWithLocalStorage];
  } else {
    return [false];
  }
};
