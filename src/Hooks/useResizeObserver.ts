import { useState, useRef, useEffect, MutableRefObject } from "react";

export const useResizeObserver = <T extends Element>(
  ref: MutableRefObject<T>
): [number, number] => {
  const [dimension, setDimension] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimension([width, height]);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return dimension;
};
