import { useState } from "react";

export const useSessionStorage = (key: string, initialValue: any = null) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  const setValueWithSessionStorage = (newValue: any) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValueWithSessionStorage];
};
