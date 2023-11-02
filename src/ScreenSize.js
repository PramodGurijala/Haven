import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export const ScreenSize = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 800px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 800px) && (min-width: 430px)",
  });
  var ScreenWidth = (window.innerWidth > 0) ? window.innerWidth : Screen.width;
  return useMemo(
    () => ({
      isMobile,
      isLaptop,
      isTablet,
      ScreenWidth
    }),
    [isLaptop, isMobile, isTablet, ScreenWidth]
  );
};
