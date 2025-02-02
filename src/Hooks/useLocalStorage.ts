import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: any = null) => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key) || null;
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    const setValueWithLocalStorage = (newValue: any) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value ? JSON.parse(value) : null, setValueWithLocalStorage];
  } else {
    return [false];
  }
};
