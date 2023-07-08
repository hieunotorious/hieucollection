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
          { title: t("home"), href: "/" },
          { title: t("about"), href: "/about" },
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

            <Stack
              sx={{
                border: "1px solid #EAA234",
                borderRadius: "50px",
                position: "fixed",
                right: isMobile ? "5px" : "10px",
                top: "30%",
                zIndex: "99",
                padding: isMobile ? "10px 5px" : "40px 15px",
                gap: "20px",
              }}
            >
              <Tooltip label="hieumn2001@gmail.com" placement="top">
                <Stack>
                  <Link href="mailto:hieumn2001@gmail.com">
                    <Image
                      src="/images/EmailMes.png"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </Link>
                </Stack>
              </Tooltip>

              <Tooltip label="0912590467" placement="top">
                <Stack>
                  <a href="tel:0912590467">
                    <Image
                      src="/images/phoneMes.png"
                      alt=""
                      width="30px"
                      height="30px"
                    />
                  </a>
                </Stack>
              </Tooltip>
              <Tooltip
                label="102 Nguyễn Trãi, Thành Công, Thành phố Buôn Ma Thuột, Đắk Lắk"
                placement="top"
              >
                <Stack>
                  <Link href="https://www.google.com/maps/place/102+Nguy%E1%BB%85n+Tr%C3%A3i,+Th%C3%A0nh+C%C3%B4ng,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6865306,108.0361911,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d7a35d6ff99:0x9eae08b73bf3f4df!8m2!3d12.6865306!4d108.038766!16s%2Fg%2F11fsjhqr51?hl=vi-VN&entry=ttu">
                    <Image
                      src="/images/frame.png"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </Link>
                </Stack>
              </Tooltip>
            </Stack>

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
                      <Stack>
                        <Stack direction="row">
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            zIndex="1"
                          >
                            {t("Customer Satisfaction")}
                          </Text>
                        </Stack>
                        <Stack
                          sx={{
                            position: "relative",
                            background: "#FDE0A1",
                            borderRadius: "8px",
                          }}
                          height="12px"
                        >
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            style={{
                              color: "#41332C",
                              fontWeight: 400,
                              fontFamily: "Balsamiq Sans",
                              marginRight: "10rem",
                              position: "absolute",
                              transition: "all 3000ms ease-in-out",
                              top: -30,
                              left: isVisible ? "87%" : 0,
                            }}
                          >
                            87%
                          </Text>
                          <Stack
                            sx={{
                              width: isVisible ? "87%" : 0,
                              height: "100%",
                              background: "#EAA234",
                              borderRadius: "8px",
                              transition: "all 3000ms ease-in-out",
                            }}
                          />
                        </Stack>
                      </Stack>
                      <Stack>
                        <Stack direction="row">
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            style={{
                              color: "#41332C",
                              fontWeight: 700,
                              fontFamily: "Balsamiq Sans",
                            }}
                            zIndex="1"
                          >
                            {t("Top quality products")}
                          </Text>
                        </Stack>
                        <Stack
                          sx={{
                            position: "relative",
                            background: "#FDE0A1",
                            borderRadius: "8px",
                          }}
                          height="12px"
                        >
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            style={{
                              color: "#41332C",
                              fontWeight: 400,
                              fontFamily: "Balsamiq Sans",
                              marginRight: "10rem",
                              position: "absolute",
                              transition: "all 3000ms ease-in-out",
                              top: -30,
                              left: isVisible ? "93%" : 0,
                            }}
                          >
                            93%
                          </Text>
                          <Stack
                            sx={{
                              width: isVisible ? "93%" : 0,
                              height: "100%",
                              background: "#EAA234",
                              borderRadius: "8px",
                              transition: "all 3000ms ease-in-out",
                            }}
                          />
                        </Stack>
                      </Stack>
                      <Stack>
                        <Stack direction="row" justifyContent="space-between">
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            style={{
                              color: "#41332C",
                              fontWeight: 700,
                              fontFamily: "Balsamiq Sans",
                            }}
                            zIndex="1"
                          >
                            {t("Quality service")}
                          </Text>
                        </Stack>
                        <Stack
                          sx={{
                            position: "relative",
                            background: "#FDE0A1",
                            borderRadius: "8px",
                          }}
                          height="12px"
                        >
                          <Text
                            variant={isMobile ? "h4_mobile" : "h4"}
                            style={{
                              color: "#41332C",
                              fontWeight: 400,
                              fontFamily: "Balsamiq Sans",
                              marginRight: "10rem",
                              position: "absolute",
                              transition: "all 3000ms ease-in-out",
                              top: -30,
                              left: isVisible ? "83%" : 0,
                            }}
                          >
                            83%
                          </Text>
                          <Stack
                            sx={{
                              width: isVisible ? "83%" : 0,
                              height: "100%",
                              background: "#EAA234",
                              borderRadius: "8px",
                              transition: "all 3000ms ease-in-out",
                            }}
                          />
                        </Stack>
                      </Stack>
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 4px #F6921E",
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
