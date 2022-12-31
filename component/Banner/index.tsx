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
      display={isMobile ? "none" : "flex"}
      alignItems="center"
      justifyContent="center"
      w="full"
      h="full"
      mt="4rem"
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
                src="/images/tnk.jpeg"
                alt=""
              />
            </Flex>
            <Flex
              direction="column"
              w="full"
              h="350px"
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              <Text
                fontWeight="semibold"
                lineHeight="40px"
                letterSpacing="0.0015em"
                color=" #fff"
                fontFamily="'Baloo', serif"
                textTransform="uppercase"
              >
                BEST CHOICE
              </Text>
              <Text
                mt="1rem"
                fontSize={isMobile ? "10px" : "15px"}
                fontWeight="normal"
                lineHeight="26px"
                color=" #fff"
                marginTop="2rem"
              >
                Vitae, distinctio! Voluptates delectus nam voluptatem
                consequatur .
              </Text>
              <Flex
                _placeholder={{
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 14,
                  color: " #fff",
                }}
                fontSize="14px"
                background="b5def2"
                padding="10px 12px"
                borderRadius="12px"
                marginTop="2rem"
              >
                <Button
                  variant="submit"
                  _hover={{
                    opacity: 0.6,
                  }}
                  w="100px"
                  p="0"
                  boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
                  background="white"
                  borderRadius="12px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {t("shop_now")}
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            position="relative"
            background="#b5def2"
            borderRadius="30px"
            w="full"
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
                src="/images/spider.jpeg"
                alt=""
              />
            </Flex>
            <Flex
              direction="column"
              w="full"
              h="350px"
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              <Text
                fontWeight="semibold"
                lineHeight="40px"
                letterSpacing="0.0015em"
                color=" #fff"
                fontFamily="'Baloo', serif"
                textTransform="uppercase"
              >
                HieuCollection
              </Text>
              <Text
                mt="1rem"
                fontSize={isMobile ? "10px" : "16px"}
                fontWeight="normal"
                lineHeight="26px"
                color=" #fff"
                marginTop="2rem"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Text>
              <Flex
                _placeholder={{
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 14,
                  color: " #fff",
                }}
                fontSize="14px"
                background="b5def2"
                padding="10px 12px"
                borderRadius="12px"
                marginTop="2rem"
              >
                <Button
                  variant="submit"
                  _hover={{
                    opacity: 0.6,
                  }}
                  w="100px"
                  p="0"
                  boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
                  background="white"
                  borderRadius="12px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {t("shop_now")}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="full">
          <Flex
            position="relative"
            mt="2rem"
            background="#b5def2"
            borderRadius="1rem"
            w="full"
            gap="2rem"
            h="350px"
            direction={isMobile ? "column" : "row"}
          >
            <Flex w="100%" h="full" top="0px" left="0px" zIndex={1}>
              <Image
                style={{ border: "1rem", borderRadius: "1rem" }}
                width="1000px"
                height={isMobile ? "500px" : "100%"}
                src="/images/hieu1.jpeg"
                alt=""
              />
            </Flex>
            <Flex
              direction="column"
              w="full"
              h="350px"
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              <Text
                fontWeight="semibold"
                lineHeight="40px"
                letterSpacing="0.0015em"
                color=" #fff"
                fontFamily="'Baloo', serif"
                textTransform="uppercase"
              >
                BEST CHOICE
              </Text>
              <Text
                mt="1rem"
                fontSize={isMobile ? "10px" : "16px"}
                fontWeight="normal"
                lineHeight="26px"
                color=" #fff"
                marginTop="2rem"
              >
                Vitae, distinctio! Voluptates delectus nam voluptatem
                consequatur .
              </Text>
              <Flex
                _placeholder={{
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 14,
                  color: " #fff",
                }}
                fontSize="14px"
                background="b5def2"
                padding="10px 12px"
                borderRadius="12px"
                marginTop="2rem"
              >
                <Button
                  variant="submit"
                  _hover={{
                    opacity: 0.6,
                  }}
                  w="100px"
                  p="0"
                  boxShadow="0px 5px 14px rgba(247, 103, 67, 0.25)"
                  background="white"
                  borderRadius="12px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {t("shop_now")}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
