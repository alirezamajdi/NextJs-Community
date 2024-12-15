import { useState, useEffect } from "react";
export const useClient = () => {
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);
  return { isLoad };
};
