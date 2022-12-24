import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import React from "react";

const Container = ({ children, ...props }: FlexProps) => {
  const { isMobile, isTabletOrLaptop, isDesktop, isBigscreen } =
    useResponsive();
  return (
    <Flex w={!isBigscreen ? "95vw" : "90vw"} m={"0 auto"} {...props}>
      {children}
    </Flex>
  );
};

export default Container;
