import { useEffect, useState } from "react";

const useDebounce = ({ value, delay }) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timoutId);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
