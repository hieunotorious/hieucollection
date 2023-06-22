import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, FlexProps, Stack, Text, Tooltip } from "@chakra-ui/react";
import Container from "app/component/Container";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";

type Props = {} & FlexProps;

const Content2 = ({ ...props }: Props) => {
  const { isMobile, isMobileOrTablet } = useResponsive();
  const { t } = useTranslation();

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container justifyContent="center" alignItems="center">
      <Stack gap="6rem">
        <Stack gap="5rem">
          <Text variant={isMobile ? "h5_mobile" : "h5"}>{t("location")}</Text>
          <Text variant={isMobile ? "h6_mobile" : "h6"}>
            {t("location_des")}
          </Text>
        </Stack>
        <Flex gap="5rem">
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/goku.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/luffy.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/spidermanhasbro.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
        </Flex>
        <Flex gap="5rem">
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/optimus.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/batmanmcf.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
          <Image
            style={{ borderRadius: "5px" }}
            src="/images/nhatrang.jpeg"
            alt=""
            width="182px"
            height="138px"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Content2;
