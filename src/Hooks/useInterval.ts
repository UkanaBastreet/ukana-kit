import { useState, useRef, useEffect } from "react";

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current?.();
    const intervalId = setInterval(tick, delay);
    return () => clearInterval(intervalId);
  }, [delay]);
};
