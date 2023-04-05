import { useState, useEffect } from "react";

export const usePromise = <T extends unknown>(promise: Promise<T>) => {
  const [state, setState] = useState<
    [boolean, T | undefined, Error | undefined]
  >([true, undefined, undefined]);

  useEffect(() => {
    promise
      .then((result) => setState([false, result, undefined]))
      .catch((error) => setState([false, undefined, error]));
  }, []);

  return state;
};
