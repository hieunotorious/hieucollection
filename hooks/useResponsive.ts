import { useBreakpointValue } from "@chakra-ui/react";
export const useResponsive = () => {
  const isMobile = useBreakpointValue({
    sm: false,
    base: true,
  });

  const isTabletOrLaptop = useBreakpointValue({
    md: false,
    base: true,
  });

  const isDesktop = useBreakpointValue({
    lg: false,
    base: true,
  });

  const isBigscreen = useBreakpointValue({
    "2xl": false,
    base: true,
  });

  return { isBigscreen, isMobile, isTabletOrLaptop, isDesktop };
};
