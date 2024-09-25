import { useCallback, useEffect, useState } from "react";

export const useHasScrolledPast = (elementHeight: number) => {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const handleScroll = useCallback(() => {
    console.log(window.scrollY);
    console.log(elementHeight);
    if (window.scrollY > elementHeight) {
      setHasScrolledPast(true);
    } else {
      setHasScrolledPast(false);
    }
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return hasScrolledPast;
};
