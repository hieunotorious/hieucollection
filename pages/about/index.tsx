import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, FlexProps, Stack, Text, Tooltip } from "@chakra-ui/react";
import ExpCard from "app/component/ExpCard";
import Container from "app/component/Container";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
import Breadcrumb from "app/component/Breadcrumb";
import { useRef } from "react";
import useOnScreen from "app/hooks/useOnScreen";
import Link from "next/link";
import APP_ROUTES from "app/constant/app_routes";
import Info from "app/component/Info";
import COLOR from "app/constant/color";
import ProgressBar from "app/component/ProgressBar";
type Props = {} & FlexProps;

const About = ({ ...props }: Props) => {
  const { isMobile, isMobileOrTablet, isTabletOrLaptop, isBigScreen } =
    useResponsive();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const testRef = useRef(null);
  const isSeen = useOnScreen(testRef);
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Flex direction="column" w="full" marginTop="5rem">
      <Breadcrumb
        links={[
          { title: t("home"), href: APP_ROUTES.HOME },
          { title: t("about"), href: APP_ROUTES.ABOUT },
        ]}
        current={t("about")}
      />
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Stack gap="6rem">
            <Stack gap="5rem">
              <Text textAlign="center" variant={isMobile ? "h5_mobile" : "h5"}>
                {t("about")}
              </Text>
              <Flex
                justifyContent="space-between"
                w="full"
                gap="1rem"
                direction={
                  isMobile
                    ? "column"
                    : isMobileOrTablet
                    ? "column"
                    : isTabletOrLaptop
                    ? "column"
                    : isBigScreen
                    ? "column"
                    : "row"
                }
              >
                <Stack
                  h={
                    isMobile
                      ? "none"
                      : isMobileOrTablet
                      ? "none"
                      : isTabletOrLaptop
                      ? "none"
                      : isBigScreen
                      ? "900px"
                      : "none"
                  }
                  width={
                    isMobile
                      ? "full"
                      : isMobileOrTablet
                      ? "full"
                      : isTabletOrLaptop
                      ? "full"
                      : isBigScreen
                      ? "full"
                      : "50%"
                  }
                >
                  <Image
                    style={{ borderRadius: "5rem" }}
                    width={
                      isMobile ? "300px" : isMobileOrTablet ? "500px" : "700px"
                    }
                    height={
                      isMobile
                        ? "300px"
                        : isMobileOrTablet
                        ? "500px"
                        : isTabletOrLaptop
                        ? "600px"
                        : isBigScreen
                        ? "900px"
                        : "650px"
                    }
                    src="/images/hieu2.jpg"
                    alt=""
                  />
                </Stack>

                <Stack
                  marginTop="1rem"
                  width={
                    isMobile
                      ? "full"
                      : isMobileOrTablet
                      ? "full"
                      : isTabletOrLaptop
                      ? "full"
                      : isBigScreen
                      ? "full"
                      : "50%"
                  }
                >
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {t("text8")}
                  </Text>
                  <Text variant={isMobile ? "h4_mobile" : "h4"}>
                    {t("text9")}
                  </Text>
                </Stack>
              </Flex>
            </Stack>

            <Info />

            <Flex
              position="relative"
              gap={isMobile ? "2rem" : "10rem"}
              ref={ref}
              marginBottom="4rem"
              direction={
                isMobile
                  ? "column"
                  : isMobileOrTablet
                  ? "column"
                  : isTabletOrLaptop
                  ? "column"
                  : isBigScreen
                  ? "column"
                  : "row"
              }
            >
              <Stack gap="2rem">
                <Flex
                  gap="1rem"
                  justifyContent="space-between"
                  direction={isMobile ? "column" : "row"}
                  alignItems="center"
                >
                  <Stack>
                    <Stack ref={testRef} overflow="hidden">
                      <Stack
                        data-aos="fade-right"
                        sx={{
                          borderRadius: "1rem",
                        }}
                      >
                        <Text variant={isMobile ? "h5_mobile" : "h5"}>
                          {t("Why choose us?")}
                        </Text>
                        <Text variant={isMobile ? "h6_mobile" : "h6"}>
                          {t("We serve the best products")}
                        </Text>
                      </Stack>
                    </Stack>

                    <Stack
                      gap="1rem"
                      sx={{
                        transform: `translateX(${isSeen ? 0 : -600}px)`,
                        opacity: isSeen ? 1 : 0,
                        transition: `all 1s ease-in`,
                        borderRadius: "1rem",
                      }}
                    >
                      <ProgressBar
                        title={t("Customer Satisfaction")}
                        progress={87}
                        isVisible={isVisible}
                      />
                      <ProgressBar
                        title={t("Top quality products")}
                        progress={93}
                        isVisible={isVisible}
                      />
                      <ProgressBar
                        title={t("Quality service")}
                        progress={83}
                        isVisible={isVisible}
                      />
                    </Stack>
                  </Stack>
                </Flex>
                <Stack
                  direction={
                    isMobile ? "column" : isMobileOrTablet ? "column" : "row"
                  }
                  justifyContent="center"
                  alignItems="center"
                  gap="1rem"
                >
                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/shflogo.png"
                        width="130px"
                        height="50px"
                        alt=""
                      />
                      <Text width="200px" variant="h1" textAlign="center">
                        {t("shf_figures")}
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/mcflogo.jpg"
                        width="50px"
                        height="50px"
                        alt=""
                      />

                      <Text width="200px" variant="h1" textAlign="center">
                        {t("mcfarlane_figures")}
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/hasbrologo.jpeg"
                        width="80px"
                        height="50px"
                        alt=""
                      />

                      <Text width="200px" variant="h1" textAlign="center">
                        {t("hasbro")}
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
                <Stack
                  direction={
                    isMobile ? "column" : isMobileOrTablet ? "column" : "row"
                  }
                  justifyContent="center"
                  alignItems="center"
                  gap="1rem"
                >
                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/medicomtoylogo.png"
                        width="80px"
                        height="50px"
                        alt=""
                      />
                      <Text width="200px" variant="h1" textAlign="center">
                        {t("medicom")}
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/dclogo.png"
                        width="60px"
                        height="50px"
                        alt=""
                      />

                      <Text width="200px" variant="h1" textAlign="center">
                        {t("dc")}
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    data-aos="zoom-in-up"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 25px",
                      borderRadius: "12px",
                      backgroundColor: COLOR.white,
                      boxShadow: `0px 2px 4px ${COLOR.sixth}`,
                    }}
                  >
                    <Stack alignItems="center">
                      <Image
                        src="/images/wweelitelogo.png"
                        width="50px"
                        height="50px"
                        alt=""
                      />

                      <Text width="200px" variant="h1" textAlign="center">
                        {t("wwe")}
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>

              <Stack>
                <Image
                  data-aos="flip-up"
                  style={{ borderRadius: "5rem" }}
                  src="/images/hieu1.jpeg"
                  alt=""
                  width={
                    isMobile ? "300px" : isMobileOrTablet ? "600px" : "900px"
                  }
                  height={
                    isMobile
                      ? "250px"
                      : isMobileOrTablet
                      ? "500px"
                      : isBigScreen
                      ? "900px"
                      : "700px"
                  }
                />
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default About;
