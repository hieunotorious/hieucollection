import { Flex, FlexProps } from "@chakra-ui/react";
import { useResponsive } from "app/hooks/useResponsive";

const Container = ({ children, ...props }: FlexProps) => {
  const { isBigScreen } = useResponsive();
  return (
    <Flex w={!isBigScreen ? "95vw" : "90vw"} m={"0 auto"} {...props}>
      {children}
    </Flex>
  );
};

export default Container;
