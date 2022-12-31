import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import React from "react";
import ExpCard from "app/component/ExpCard";
import Container from "app/component/Container";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
type Props = {} & FlexProps;

const About = ({ ...props }: Props) => {
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  const { t } = useTranslation();
  return (
    <Container>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={isMobile ? "column" : "row"}
        minHeight={isMobile ? "550" : "800"}
      >
        <Flex position="relative">
          <Image width="100%" src="/images/hieu2.jpg" alt="" />
          <>
            <Flex
              w={isMobile ? "70px" : "190px"}
              h={isMobile ? "60px" : "170px"}
              position="absolute"
              bottom="-18px"
              right="0px"
            >
              <Image width="500px" src="/images/logo.jpg" alt="" />
            </Flex>
          </>
        </Flex>
        <Flex marginLeft="5rem" direction="column" mb="5rem" mt="5rem">
          <Flex direction="column">
            <Text
              color="#F66F4D"
              fontSize="1.25rem"
              fontWeight="semibold"
              letterSpacing="0.2em"
            >
              {t("experience")}
            </Text>
            <Text mt="1rem" fontWeight="semibold" lineHeight="66px">
              {t("story")}
            </Text>
            <Text
              mr={isMobile ? "50%" : "none"}
              mt="1rem"
              fontSize="md"
              fontWeight="medium"
              color="#5B5F62"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              deserunt aliquid consequatur velit a deleniti. Impedit illum
              libero officia, non ipsam provident consequuntur tenetur odio quod
              sunt necessitatibus reprehenderit cumque!
            </Text>
          </Flex>
          <Flex mt="2.5rem">
            <Flex>
              <ExpCard title="12K+" des={t("success")} />
              <ExpCard title="16+" des={t("award")} />
            </Flex>
            <ExpCard title="20+" des={t("experience")} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
