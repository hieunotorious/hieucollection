import React, { useContext, useEffect, useState } from "react";
import Brand from "app/component/Brand";
import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { padding } from "@mui/system";
import { shuffle } from "lodash";
import { css } from "@emotion/react";
import SVG from "react-inlinesvg";
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Banner from "app/component/Banner";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  AllType,
  BrandType,
  CategoryType,
  ProductType,
} from "app/api/auth/models/product";
import Link from "next/link";
import Section from "app/component/Section";
import NewLetter from "app/component/NewLetter";
import useTranslation from "next-translate/useTranslation";
import Container from "app/component/Container";
import { getProduct } from "app/services/ProductService";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { addToCart } from "app/services/CartService";
import { AuthContext } from "app/context/authContext";
import router from "next/router";
import Banners from "app/component/Banners";
import ProductItem from "app/component/ProductItem";
export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const Home = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [products, setProduct] = useState(product);
  const [newProducts, setNewProducts] = useState(product);
  const [saleProducts, setSaleProducts] = useState(product);
  const [nameproducts, setNameProducts] = useState(product);
  const [preProducts, setPreProducts] = useState(product);
  const [nameProducts2, setNameProducts2] = useState(product);
  const [nameProducts3, setNameProducts3] = useState(product);
  const [nameProducts4, setNameProducts4] = useState(product);
  const { t } = useTranslation();
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  const { setUser } = useContext(AuthContext);

  const handleAddCart = async (id: string) => {
    const data = await addToCart(id, 1);
    if (data) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: data };
        return undefined;
      });
      router.push("/cart");
    }
  };
  useEffect(() => {
    setNewProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.new;
        })
      ).slice(0, 10)
    );
    setNameProducts(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/dragon ball/i) > -1;
        })
      ).slice(0, 8)
    );
    setNameProducts2(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/spider-man/i) > -1;
        })
      ).slice(0, 8)
    );
    setNameProducts3(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/transformers/i) > -1;
        })
      ).slice(0, 8)
    );
    setNameProducts4(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/dceased/i) > -1;
        })
      ).slice(0, 8)
    );
    setPreProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.pre_order;
        })
      ).slice(0, 10)
    );
    setSaleProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.sale;
        })
      ).slice(0, 10)
    );
  }, [product]);

  const renderProducts = (product: ProductType, index: number) => {
    return <ProductItem product={product} key={product._id} />;
  };

  return (
    <Container direction="column">
      <Section />
      <Flex display={isMobile ? "flex" : "none"} justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex
            fontSize="30px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop="4rem"
            textTransform="uppercase"
            fontWeight="900"
            fontFamily="Georgia, serif"
          >
            <Text mb="2rem">hieucollection</Text>
            <Link href="/product">
              <Button
                w="150px"
                h="50px"
                margin="2rem"
                variant="solid"
                colorScheme="blue"
              >
                {t("new_arrival")}
              </Button>
            </Link>
          </Flex>
          {!isMobile ? (
            <Flex
              marginTop="5rem"
              border="2px"
              borderRadius="2xl"
              gap="1rem"
              borderColor="white"
              display="grid"
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTabletOrLaptop
                  ? "1fr 1fr"
                  : isDesktop
                  ? "1fr 1fr 1fr"
                  : "1fr 1fr 1fr 1fr"
              }
            >
              {newProducts.map(renderProducts)}
            </Flex>
          ) : (
            <Flex width="full" marginTop="5rem">
              <Flex
                w="full"
                border="2px"
                borderRadius="2xl"
                gap="3rem"
                borderColor="white"
                css={css`
                  .swiper-button-prev,
                  .swiper-button-next {
                    color: black !important;
                  }
                `}
              >
                <Swiper
                  style={{ width: isMobile ? "full" : "60%" }}
                  spaceBetween={30}
                  slidesPerView="auto"
                  // effect={"coverflow"}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // coverflowEffect={{
                  //   rotate: 50,
                  //   stretch: 0,
                  //   depth: 100,
                  //   modifier: 1,
                  //   slideShadows: true,
                  // }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop
                  centeredSlides
                  grabCursor
                  className="mySwiper"
                >
                  {newProducts.map((item, index) => (
                    <SwiperSlide style={{ width: 216 }} key={item._id}>
                      {renderProducts(item, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Flex marginTop="10rem" justifyContent="center" alignItems="center">
        <Flex>
          <Flex>
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
              textTransform="uppercase"
              textAlign={isMobile ? "center" : "center"}
            >
              {t("dragonball_figures")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex width="full" marginTop="5rem">
        <Flex
          w="full"
          border="2px"
          borderRadius="2xl"
          gap="3rem"
          borderColor="white"
          css={css`
            .swiper-button-prev,
            .swiper-button-next {
              color: black !important;
            }
          `}
        >
          <Swiper
            style={{ width: isMobile ? "full" : "65%" }}
            spaceBetween={30}
            slidesPerView="auto"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop
            centeredSlides
            grabCursor
            className="mySwiper"
          >
            {nameproducts.map((item, index) => (
              <SwiperSlide style={{ width: 216 }} key={item._id}>
                {renderProducts(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
      <Flex display={isMobile ? "flex" : "none"} justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex justifyContent="center" alignItems="center">
            <Link href="/product">
              <Button
                w="150px"
                h="50px"
                margin="2rem"
                variant="solid"
                colorScheme="blue"
              >
                {t("pre_order")}
              </Button>
            </Link>
          </Flex>
          {!isMobile ? (
            <Flex
              marginTop="5rem"
              border="2px"
              borderRadius="2xl"
              gap="1rem"
              borderColor="white"
              display="grid"
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTabletOrLaptop
                  ? "1fr 1fr"
                  : isDesktop
                  ? "1fr 1fr 1fr"
                  : "1fr 1fr 1fr 1fr"
              }
            >
              {preProducts.map(renderProducts)}
            </Flex>
          ) : (
            <Flex width="full" marginTop="5rem">
              <Flex
                w="full"
                border="2px"
                borderRadius="2xl"
                gap="3rem"
                borderColor="white"
                css={css`
                  .swiper-button-prev,
                  .swiper-button-next {
                    color: black !important;
                  }
                `}
              >
                <Swiper
                  style={{ width: isMobile ? "90  %" : "60%" }}
                  spaceBetween={30}
                  slidesPerView="auto"
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop
                  centeredSlides
                  grabCursor
                  className="mySwiper"
                >
                  {preProducts.map((item, index) => (
                    <SwiperSlide style={{ width: 216 }} key={item._id}>
                      {renderProducts(item, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex justifyContent="center" alignItems="center" marginTop="5rem">
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
              textTransform="uppercase"
            >
              {t("spiderman_figures")}
            </Text>
          </Flex>
          {!isMobile ? (
            <Flex
              marginTop="5rem"
              border="2px"
              borderRadius="2xl"
              gap="1rem"
              borderColor="white"
              display="grid"
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTabletOrLaptop
                  ? "1fr 1fr"
                  : isDesktop
                  ? "1fr 1fr 1fr"
                  : "1fr 1fr 1fr 1fr"
              }
            >
              {nameProducts2.map(renderProducts)}
            </Flex>
          ) : (
            <Flex width="full" marginTop="5rem">
              <Flex
                w="full"
                border="2px"
                borderRadius="2xl"
                gap="3rem"
                borderColor="white"
                css={css`
                  .swiper-button-prev,
                  .swiper-button-next {
                    color: black !important;
                  }
                `}
              >
                <Swiper
                  style={{ width: isMobile ? "90  %" : "60%" }}
                  spaceBetween={30}
                  slidesPerView="auto"
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop
                  centeredSlides
                  grabCursor
                  className="mySwiper"
                >
                  {nameProducts2.map((item, index) => (
                    <SwiperSlide style={{ width: 216 }} key={item._id}>
                      {renderProducts(item, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Banner />

      <Flex justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex justifyContent="center" alignItems="center" marginTop="5rem">
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
              textTransform="uppercase"
              textAlign={isMobile ? "center" : "center"}
            >
              {t("transformer_figures")}
            </Text>
          </Flex>
          {!isMobile ? (
            <Flex
              marginTop="5rem"
              border="2px"
              borderRadius="2xl"
              gap="1rem"
              borderColor="white"
              display="grid"
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTabletOrLaptop
                  ? "1fr 1fr"
                  : isDesktop
                  ? "1fr 1fr 1fr"
                  : "1fr 1fr 1fr 1fr"
              }
            >
              {nameProducts3.map(renderProducts)}
            </Flex>
          ) : (
            <Flex width="full" marginTop="5rem">
              <Flex
                w="full"
                border="2px"
                borderRadius="2xl"
                gap="3rem"
                borderColor="white"
                css={css`
                  .swiper-button-prev,
                  .swiper-button-next {
                    color: black !important;
                  }
                `}
              >
                <Swiper
                  style={{ width: isMobile ? "90  %" : "60%" }}
                  spaceBetween={30}
                  slidesPerView="auto"
                  // effect={"coverflow"}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // coverflowEffect={{
                  //   rotate: 50,
                  //   stretch: 0,
                  //   depth: 100,
                  //   modifier: 1,
                  //   slideShadows: true,
                  // }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop
                  centeredSlides
                  grabCursor
                  className="mySwiper"
                >
                  {nameProducts3.map((item, index) => (
                    <SwiperSlide style={{ width: 216 }} key={item._id}>
                      {renderProducts(item, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Banners />

      <Flex justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex justifyContent="center" alignItems="center" marginTop="5rem">
            {isMobile ? (
              <Link href="/product">
                <Button
                  w="150px"
                  h="50px"
                  margin="2rem"
                  variant="solid"
                  colorScheme="blue"
                >
                  {t("sale_product")}
                </Button>
              </Link>
            ) : (
              <Text
                fontSize="26px"
                color="#222222"
                fontFamily="'Baloo', serif"
                textTransform="uppercase"
                fontWeight="600"
              >
                {t("DCEASED")}
              </Text>
            )}
          </Flex>
          {!isMobile ? (
            <Flex
              marginTop="5rem"
              border="2px"
              borderRadius="2xl"
              gap="1rem"
              borderColor="white"
              display="grid"
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTabletOrLaptop
                  ? "1fr 1fr"
                  : isDesktop
                  ? "1fr 1fr 1fr"
                  : "1fr 1fr 1fr 1fr"
              }
            >
              {nameProducts4.map(renderProducts)}
            </Flex>
          ) : (
            <Flex width="full" marginTop="5rem">
              <Flex
                w="full"
                border="2px"
                borderRadius="2xl"
                gap="3rem"
                borderColor="white"
                css={css`
                  .swiper-button-prev,
                  .swiper-button-next {
                    color: black !important;
                  }
                `}
              >
                <Swiper
                  style={{ width: isMobile ? "90  %" : "60%" }}
                  spaceBetween={30}
                  slidesPerView="auto"
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop
                  centeredSlides
                  grabCursor
                  className="mySwiper"
                >
                  {nameProducts4.map((item, index) => (
                    <SwiperSlide style={{ width: 216 }} key={item._id}>
                      {renderProducts(item, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Brand />
      <NewLetter />
    </Container>
  );
};

export default Home;
