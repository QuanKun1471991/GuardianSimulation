import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T): undefined | T => {
  const ref = useRef<undefined | T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
