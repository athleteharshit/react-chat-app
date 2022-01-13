import { useCallback, useEffect, useState } from "react";

export const useStateStorage = <TType extends any>(
  key: string,
  defaultValue: TType
) => {
  const [value, setState] = useState(defaultValue);

  useEffect(() => {
    const store = localStorage.getItem(key);
    if (store != null) {
      try {
        setState(JSON.parse(store) as TType);
      } catch (err) {
        localStorage.removeItem(key);
      }
    }
  }, [key]);

  const setValue = useCallback(
    (newValue: TType) => {
      setState(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, setValue];
};
