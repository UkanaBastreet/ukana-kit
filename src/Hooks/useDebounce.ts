import { useEffect, useState } from "react";

type T = any;

export const useDebounce = (callback: () => T, delay = 500) => {
  const [returnedValue, setReturnedValue] = useState<T | null>(null);
  let clear: () => void = () => {};

  useEffect(() => {
    clear = () => clearTimeout(timer);
    const timer = setTimeout(() => {
      setReturnedValue(callback());
    }, delay);

    return () => clear();
  }, [callback, delay]);

  return [returnedValue, clear];
};
