import { useBreakpointValue } from "@chakra-ui/react";
export const useResponsive = () => {
  const isSmallDevice = useBreakpointValue({
    sm: false,
    base: true,
  });

  const isMobile = useBreakpointValue({
    sm: false,
    base: true,
  });

  const isMobileOrTablet = useBreakpointValue({
    lg: false,
    base: true,
  });

  const isTabletOrLaptop = useBreakpointValue({
    xl: false,
    base: true,
  });
  const isDesktop = useBreakpointValue({
    lg: false,
    base: true,
  });
  const isBigScreen = useBreakpointValue({
    "2xl": false,
    base: true,
  });
  return {
    isBigScreen,
    isDesktop,
    isMobile,
    isMobileOrTablet,
    isSmallDevice,
    isTabletOrLaptop,
  };
};
