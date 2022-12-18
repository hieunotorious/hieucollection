import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";
import React from "react";

const Container = ({ children, ...props }: FlexProps) => {
  const { isMobile, isTabletOrLaptop, isDesktop, isBigscreen } =
    useResponsive();
  return (
    <Flex
      style={{ width: isBigscreen ? "95vw" : "90vw", margin: "0 auto" }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Container;
