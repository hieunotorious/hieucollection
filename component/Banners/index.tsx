import { Button, Flex, FlexProps, Input, Text } from "@chakra-ui/react";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";
import Container from "app/component/Container";
import { useResponsive } from "app/hooks/useResponsive";
type Props = {} & FlexProps;

const Banner = ({ ...props }: Props) => {
  const { t } = useTranslation();
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  return (
    <Flex
      display={isMobile ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
      w="full"
      h="full"
    >
      <Flex direction="column" w={isMobile ? "90%" : "60%"}>
        <Flex gap="2rem" direction={isMobile ? "column" : "row"} w="full">
          <Flex
            position="relative"
            background="#b5def2"
            borderRadius="30px"
            w="full"
            gap="2rem"
            h="350px"
          >
            <Flex
              position="absolute"
              w="100%"
              h="full"
              top="0px"
              left="0px"
              zIndex={1}
            >
              <Image
                style={{ border: "1rem", borderRadius: "1rem" }}
                width="1000px"
                height="100%"
                src="/images/hieu1.jpg"
                alt=""
              />
            </Flex>
          </Flex>
          <Flex
            position="relative"
            background="#b5def2"
            borderRadius="30px"
            w="full"
            h="250px"
          >
            <Flex
              position="absolute"
              w="100%"
              h="full"
              top="0px"
              left="0px"
              zIndex={1}
            >
              <Image
                style={{ border: "1rem", borderRadius: "1rem" }}
                width="1000px"
                height="100%"
                src="/images/hieu1.jpeg"
                alt=""
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
