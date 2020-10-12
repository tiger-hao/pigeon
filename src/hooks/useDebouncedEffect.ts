import { useCallback, useEffect, DependencyList } from "react";

export function useDebouncedEffect<T extends (...args: any[]) => any>(effect: T, delay: number, deps: DependencyList) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};
