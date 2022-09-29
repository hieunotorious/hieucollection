import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isBigscreen = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return { isBigscreen, isMobile, isTablet };
};
