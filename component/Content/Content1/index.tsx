import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../../Container";
import { useResponsive } from "app/hooks/useResponsive";
import {
  Flex,
  Stack,
  Text,
  Box,
  Button,
  Card,
  Tooltip,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect, useState } from "react";

import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";
import { AuthContext } from "app/context/authContext";
import { AllType, BrandType, CategoryType } from "app/api/auth/models/product";
import Link from "next/link";
import Slide from "app/component/Slide";

export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};
const Content1 = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [products, setProduct] = useState(product);

  const filterName = (name: string) => {
    if (!!name.trim()) {
      const filterProducts = product.filter((item, index) => {
        return item.name.toUpperCase().indexOf(name.toUpperCase()) > -1;
      });

      setProduct(filterProducts);
    } else {
      setProduct(product);
    }
  };

  const filterAll = (all: AllType) => {
    const filterProducts = product.filter((item, index) => {
      return item.all === all;
    });
    setProduct(filterProducts);
  };

  const filterBrand = (brand: BrandType) => {
    const filterProducts = product.filter((item, index) => {
      return item.brand === brand;
    });
    setProduct(filterProducts);
  };
  const filterCategory = (category: CategoryType) => {
    const filterProducts = product.filter((item, index) => {
      return item.category === category;
    });
    setProduct(filterProducts);
  };
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);
  const { isMobile, isMobileOrTablet, isTabletOrLaptop, isBigScreen } =
    useResponsive();

  const router = useRouter();
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container justifyContent="center" direction="column" alignItems="center">
      <Stack
        alignItems="left"
        justifyContent="center"
        width={
          isMobile
            ? "300px"
            : isMobileOrTablet
            ? "710px"
            : isTabletOrLaptop
            ? "920px"
            : isBigScreen
            ? "1300px"
            : "1400px"
        }
      >
        <Text variant={isMobile ? "h5_mobile" : "h5"} data-aos="fade-up">
          {t("about")}
        </Text>
        <Text data-aos="fade-up" variant={isMobile ? "h6_mobile" : "h6"}>
          {t("text4")}
        </Text>
        <Text data-aos="fade-up" variant={isMobile ? "h4_mobile" : "h4"}>
          {t("text1")}
        </Text>
      </Stack>

      <Stack
        marginTop="5rem"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Flex direction="column" alignItems="center">
          <Text
            data-aos="fade-up"
            variant={isMobile ? "h5_mobile" : "h5"}
            textTransform="uppercase"
            textAlign={isMobile ? "center" : "center"}
          >
            {t("brand")}
          </Text>
          <Text
            data-aos="fade-up"
            width={isMobile ? "300px" : "1500px"}
            textAlign="center"
            variant={isMobile ? "h4_mobile" : "h4"}
          >
            {t("text2")}
          </Text>
        </Flex>
      </Stack>
      <Stack
        direction={isMobile ? "column" : isMobileOrTablet ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={isMobileOrTablet ? "1rem" : isTabletOrLaptop ? "1rem" : "10rem"}
        marginTop="5rem"
      >
        <Box
          data-aos="flip-right"
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
              src="/images/shflogo.webp"
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
          data-aos="flip-left"
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
          data-aos="flip-right"
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
        direction={isMobile ? "column" : isMobileOrTablet ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={isTabletOrLaptop ? "1rem" : "10rem"}
        marginTop="5rem"
      >
        <Box
          data-aos="flip-left"
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
              src="/images/medicomtoylogo.webp"
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
          data-aos="flip-right"
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
            <Image src="/images/dclogo.png" width="60px" height="50px" alt="" />

            <Text width="200px" variant="h1" textAlign="center">
              {t("dc")}
            </Text>
          </Stack>
        </Box>

        <Box
          data-aos="flip-left"
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
            <Link href="tel:0912590467">
              <Image
                src="/images/phoneMes.png"
                alt=""
                width="30px"
                height="30px"
              />
            </Link>
          </Stack>
        </Tooltip>
        <Tooltip
          label="102 Nguyễn Trãi, Thành Công, Thành phố Buôn Ma Thuột, Đắk Lắk"
          placement="top"
        >
          <Stack>
            <Link href="https://www.google.com/maps/place/102+Nguy%E1%BB%85n+Tr%C3%A3i,+Th%C3%A0nh+C%C3%B4ng,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6865306,108.0361911,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d7a35d6ff99:0x9eae08b73bf3f4df!8m2!3d12.6865306!4d108.038766!16s%2Fg%2F11fsjhqr51?hl=vi-VN&entry=ttu">
              <Image
                src="/images/Frame.png"
                width="30px"
                height="30px"
                alt=""
              />
            </Link>
          </Stack>
        </Tooltip>
      </Stack>

      <Flex
        direction={
          isMobile
            ? "column"
            : isMobileOrTablet
            ? "column"
            : isTabletOrLaptop
            ? "column"
            : "row"
        }
        justifyContent="center"
        alignItems="center"
        marginTop="5rem"
        gap="2rem"
      >
        <Stack>
          <Stack
            background="#FCF9EF"
            borderRadius="12px"
            paddingX="10px"
            height={
              isMobile
                ? "260px"
                : isTabletOrLaptop
                ? "320px"
                : isBigScreen
                ? "280px"
                : "330px"
            }
            width={
              isMobile
                ? "350px"
                : isMobileOrTablet
                ? "670px"
                : isBigScreen
                ? "900px"
                : "852px"
            }
          >
            <Text variant={isMobile ? "h5_mobile" : "h5"} data-aos="fade-up">
              {t("superhero")}
            </Text>
            <Text data-aos="fade-up" variant={isMobile ? "h6_mobile" : "h6"}>
              DC &amp; Marvel
            </Text>
            <Text data-aos="fade-up" variant={isMobile ? "h4_mobile" : "h4"}>
              {t("text3")}
            </Text>
          </Stack>
          <Link href="/product">
            <Button
              width={isMobile ? "150px" : "261px"}
              height={isMobile ? "40px" : "65px"}
              borderRadius="24px"
              backgroundColor="#EAA234"
              variant="unstyled"
              style={{
                color: "white",
                fontWeight: 700,
                fontFamily: "Balsamiq Sans,sans-serif",
                fontSize: "20px",
              }}
            >
              {t("shop_now")}
            </Button>
          </Link>
        </Stack>
        <Flex gap="2rem" data-aos="flip-up" mb="auto">
          <Stack
            sx={{
              transition: `all 300ms ease-in-out`,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Image
              style={{ borderRadius: "10px" }}
              width="273px"
              height="396px"
              src="/images/jlbanner.jpeg"
              alt=""
            />
          </Stack>
          <Stack
            sx={{
              transition: `all 300ms ease-in-out`,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Image
              style={{ borderRadius: "10px" }}
              width="273px"
              height="396px"
              src="/images/avenger.jpeg"
              alt=""
            />
          </Stack>
        </Flex>
      </Flex>

      <Stack marginTop="7rem" justifyContent="center" alignItems="center">
        <Text variant={isMobile ? "h5_mobile" : "h5"} textTransform="uppercase">
          {t("product")}
        </Text>
        <Flex
          gap={isTabletOrLaptop ? "1rem" : "3rem"}
          data-aos="zoom-in"
          direction={isMobile ? "column" : isMobileOrTablet ? "column" : "row"}
        >
          <Card
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              width: "300px",
              height: "105px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" justifyContent="space-between" w="90%">
              <Flex alignItems="center" gap="10px">
                <Stack
                  border="5px"
                  borderRadius="5px"
                  background="linear-gradient(180deg, #49A3F1 0%, #1A73E8 100%)"
                  width="6px"
                  height="50px"
                />
                <Text variant="h7">{t("top_new_products")}</Text>
              </Flex>
              <Stack
                justifyContent="space-between"
                direction="row"
                display="flex"
                alignItems="center"
              >
                <Stack>
                  <Image
                    style={{ borderRadius: "10px" }}
                    src="/images/logo.jpg"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              background="linear-gradient(90deg, #49A3F1 0%, #1A73E8 100%)"
              borderRadius="6px"
              height="30px"
              width="90%"
              justifyContent="center"
              mt="1rem"
              alignItems="center"
            >
              <Text
                fontSize="12px"
                style={{ fontWeight: 700 }}
                fontFamily="Be Vietnam Pro"
                color="#FFFFFF"
                mx="5px"
              >
                {t("shop_now")}
              </Text>
            </Stack>
          </Card>
          <Card
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              width: "300px",
              height: "105px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" justifyContent="space-between" w="90%">
              <Flex alignItems="center" gap="10px">
                <Stack
                  border="5px"
                  borderRadius="5px"
                  width="6px"
                  height="50px"
                  background="linear-gradient(180deg, #66BB6A 0%, #43A047 100%)"
                />
                <Text variant="h7">{t("top_sale_products")}</Text>
              </Flex>
              <Stack
                justifyContent="space-between"
                direction="row"
                display="flex"
                alignItems="center"
              >
                <Stack>
                  <Image
                    style={{ borderRadius: "10px" }}
                    src="/images/logo.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              background="linear-gradient(90deg, #66BB6A 0%, #43A047 100%)"
              borderRadius="6px"
              height="30px"
              width="90%"
              justifyContent="center"
              mt="1rem"
              alignItems="center"
            >
              <Text
                fontSize="12px"
                style={{ fontWeight: 700 }}
                fontFamily="Be Vietnam Pro"
                color="#FFFFFF"
                mx="5px"
              >
                {t("shop_now")}
              </Text>
            </Stack>
          </Card>
          <Card
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              width: "300px",
              height: "105px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" justifyContent="space-between" w="90%">
              <Flex alignItems="center" gap="10px">
                <Stack
                  border="5px"
                  borderRadius="5px"
                  background=" linear-gradient(180deg, #FF9452 0%, #FF6538 100%)"
                  width="6px"
                  height="50px"
                />
                <Text variant="h7">{t("top_pre_order_products")}</Text>
              </Flex>
              <Stack
                justifyContent="space-between"
                direction="row"
                display="flex"
                alignItems="center"
              >
                <Stack>
                  <Image
                    style={{ borderRadius: "10px" }}
                    src="/images/logo.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              background=" linear-gradient(90deg, #FF9452 0%, #FF6538 100%)"
              borderRadius="6px"
              height="30px"
              width="90%"
              justifyContent="center"
              mt="1rem"
              alignItems="center"
            >
              <Text
                fontSize="12px"
                style={{ fontWeight: 700 }}
                fontFamily="Be Vietnam Pro"
                color="#FFFFFF"
                mx="5px"
              >
                {t("shop_now")}
              </Text>
            </Stack>
          </Card>
        </Flex>
      </Stack>

      <Stack marginTop="7rem" justifyContent="center" alignItems="center">
        <Text variant={isMobile ? "h5_mobile" : "h5"} textTransform="uppercase">
          {t("category")}
        </Text>
        <Flex
          gap="3rem"
          data-aos="zoom-in"
          direction={isMobile ? "column" : "row"}
        >
          <Card
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              width: "300px",
              height: "105px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" justifyContent="space-between" w="90%">
              <Flex alignItems="center" gap="10px">
                <Stack
                  border="5px"
                  borderRadius="5px"
                  background=" linear-gradient(180deg, #FF3294 0%, #FF1D6F 100%)"
                  width="6px"
                  height="50px"
                />
                <Text variant="h7">{t("action_figure")}</Text>
              </Flex>

              <Stack
                justifyContent="space-between"
                direction="row"
                display="flex"
                alignItems="center"
              >
                <Stack>
                  <Image
                    style={{ borderRadius: "10px" }}
                    src="/images/logo.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              background=" linear-gradient(90deg, #FF3294 0%, #FF1D6F 100%)"
              borderRadius="6px"
              height="30px"
              width="90%"
              justifyContent="center"
              mt="1rem"
              alignItems="center"
            >
              <Text
                fontSize="12px"
                style={{ fontWeight: 700 }}
                fontFamily="Be Vietnam Pro"
                color="#FFFFFF"
                mx="5px"
              >
                {t("shop_now")}
              </Text>
            </Stack>
          </Card>
          <Card
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              width: "300px",
              height: "105px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              w="90%"
              alignItems="center"
            >
              <Flex alignItems="center" gap="10px">
                <Stack
                  border="5px"
                  borderRadius="5px"
                  width="6px"
                  height="50px"
                  background=" linear-gradient(90deg, #FFE248 0%, #FFB11B 100%)"
                />
                <Text textAlign="center" variant="h7">
                  {t("statue")}
                </Text>
              </Flex>
              <Stack
                justifyContent="space-between"
                direction="row"
                display="flex"
                alignItems="center"
                gap={isMobile ? "15rem" : isMobileOrTablet ? "2rem" : "17rem"}
              >
                <Stack>
                  <Image
                    style={{ borderRadius: "10px" }}
                    src="/images/logo.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack
              background=" linear-gradient(180deg, #FFE248 0%, #FFB11B 100%)"
              borderRadius="6px"
              height="30px"
              width="90%"
              justifyContent="center"
              mt="1rem"
              alignItems="center"
            >
              <Text
                fontSize="12px"
                style={{ fontWeight: 700 }}
                fontFamily="Be Vietnam Pro"
                color="#FFFFFF"
                mx="5px"
              >
                {t("shop_now")}
              </Text>
            </Stack>
          </Card>
        </Flex>
      </Stack>

      <Flex
        justifyContent="center"
        alignItems="center"
        marginTop="5rem"
        gap="2rem"
        direction={
          isMobile
            ? "column"
            : isMobileOrTablet
            ? "column"
            : isTabletOrLaptop
            ? "column"
            : "row"
        }
      >
        <Stack>
          <Stack
            background="#FCF9EF"
            borderRadius="12px"
            paddingX="10px"
            height={
              isMobile
                ? "250px"
                : isTabletOrLaptop
                ? "300px"
                : isBigScreen
                ? "270px"
                : "330px"
            }
            width={isMobile ? "350px" : isMobileOrTablet ? "710px" : "852px"}
          >
            <Text variant={isMobile ? "h5_mobile" : "h5"} data-aos="fade-up">
              Robots &amp; Anime
            </Text>
            <Text data-aos="fade-up" variant={isMobile ? "h6_mobile" : "h6"}>
              {t("transformer")} &amp; {t("anime")}
            </Text>
            <Text data-aos="fade-up" variant={isMobile ? "h4_mobile" : "h4"}>
              {t("text5")}
            </Text>
          </Stack>
          <Link href="/product">
            <Button
              width={isMobile ? "150px" : "261px"}
              height={isMobile ? "40px" : "65px"}
              borderRadius="24px"
              backgroundColor="#EAA234"
              variant="unstyled"
              style={{
                color: "white",
                fontWeight: 700,
                fontFamily: "Balsamiq Sans,sans-serif",
                fontSize: "20px",
              }}
            >
              {t("shop_now")}
            </Button>
          </Link>
        </Stack>
        <Flex gap="2rem" data-aos="flip-up">
          <Stack
            sx={{
              transition: `all 300ms ease-in-out`,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Image
              style={{ borderRadius: "10px" }}
              width="273px"
              height="396px"
              src="/images/animebanner.jpeg"
              alt=""
            />
          </Stack>
          <Stack
            sx={{
              transition: `all 300ms ease-in-out`,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Image
              style={{ borderRadius: "10px" }}
              width="273px"
              height="396px"
              src="/images/transformerbanner.jpeg"
              alt=""
            />
          </Stack>
        </Flex>
      </Flex>

      <Flex
        direction={
          isMobile
            ? "column"
            : isMobileOrTablet
            ? "column"
            : isTabletOrLaptop
            ? "column"
            : "row"
        }
        justifyContent="center"
        alignItems="center"
        marginTop="5rem"
        gap="2rem"
      >
        <Flex gap="2rem" data-aos="flip-up">
          <Stack
            sx={{
              transition: `all 300ms ease-in-out`,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Image
              style={{ borderRadius: "10px" }}
              width="703px"
              height="396px"
              src="/images/wwe.jpeg"
              alt=""
            />
          </Stack>
        </Flex>
        <Stack>
          <Stack
            background="#FCF9EF"
            borderRadius="12px"
            paddingX="10px"
            height={isMobile ? "230px" : isBigScreen ? "290px" : "330px"}
            width={isMobile ? "350px" : "710px"}
          >
            <Text data-aos="fade-up" variant={isMobile ? "h5_mobile" : "h5"}>
              {t("athlete")}
            </Text>
            <Text data-aos="fade-up" variant={isMobile ? "h6_mobile" : "h6"}>
              WWE &amp; UFC
            </Text>
            <Text variant={isMobile ? "h4_mobile" : "h4"}>{t("text6")}</Text>
          </Stack>
          <Link href="/product">
            <Button
              width={isMobile ? "150px" : "261px"}
              height={isMobile ? "40px" : "65px"}
              borderRadius="24px"
              backgroundColor="#EAA234"
              variant="unstyled"
              style={{
                color: "white",
                fontWeight: 700,
                fontFamily: "Balsamiq Sans,sans-serif",
                fontSize: "20px",
              }}
            >
              {t("shop_now")}
            </Button>
          </Link>
        </Stack>
      </Flex>

      {/* <Slide /> */}
    </Container>
  );
};

export default Content1;
