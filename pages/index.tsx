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
import Header from "app/component/Header";
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
  return (
    <Container direction="column">
      <Section />
      <Flex display={isMobile ? "flex" : "none"} justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop="1rem"
          >
            <Image
              src="/images/HIEUCOLLECTION.png"
              width={250}
              height={250}
              alt=""
            ></Image>

            <Flex mb="1rem">
              <Input
                onChange={(event) => filterName(event.target.value)}
                placeholder={t("search")}
                style={{
                  fontSize: 12,
                  border: "1px solid black",
                  padding: "1rem",
                  width: "290px",
                  height: "20px",
                }}
              />
            </Flex>
            <Header />
            <Flex direction="column" alignItems="center">
              <Text
                fontWeight="600"
                fontSize="26px"
                color="#222222"
                fontFamily="'Baloo', serif"
                textTransform="uppercase"
              >
                {t("new_arrival")}
              </Text>
              <Flex w="50%" h="2px" background="red" mb="2rem" />
            </Flex>
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

      <Flex marginTop="5rem" justifyContent="center" alignItems="center">
        <Flex>
          <Flex direction="column" alignItems="center">
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
            <Flex w="50%" h="2px" background="red" mb="2rem" />
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
          <Flex direction="column" alignItems="center">
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
              textTransform="uppercase"
            >
              {t("pre_order")}
            </Text>
            <Flex w="20%" h="2px" background="red" mb="2rem" />
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
      <Flex marginTop="5rem" justifyContent="center" alignItems="center">
        <Flex>
          <Flex direction="column" alignItems="center">
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
              textTransform="uppercase"
              textAlign={isMobile ? "center" : "center"}
            >
              {t("spiderman_figures")}
            </Text>
            <Flex w="50%" h="2px" background="red" mb="2rem" />
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
            {nameProducts2.map((item, index) => (
              <SwiperSlide style={{ width: 216 }} key={item._id}>
                {renderProducts(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
      <Banner />

      <Flex marginTop="5rem" justifyContent="center" alignItems="center">
        <Flex>
          <Flex direction="column" alignItems="center">
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
            <Flex w="50%" h="2px" background="red" mb="2rem" />
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
            {nameProducts3.map((item, index) => (
              <SwiperSlide style={{ width: 216 }} key={item._id}>
                {renderProducts(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>

      <Banners />

      <Flex justifyContent="center">
        <Flex direction="column" w={isMobile ? "full" : "70%"}>
          <Flex justifyContent="center" alignItems="center" marginTop="5rem">
            <Flex>
              {isMobile ? (
                <Flex direction="column" alignItems="center">
                  <Text
                    fontWeight="600"
                    fontSize="26px"
                    color="#222222"
                    fontFamily="'Baloo', serif"
                    textTransform="uppercase"
                  >
                    {t("sale_product")}
                  </Text>
                  <Flex w="50%" h="2px" background="red" mb="2rem" />
                </Flex>
              ) : (
                <Flex direction="column" alignItems="center">
                  <Text
                    fontSize="26px"
                    color="#222222"
                    fontFamily="'Baloo', serif"
                    textTransform="uppercase"
                    fontWeight="600"
                  >
                    {t("DCEASED")}
                  </Text>
                  <Flex w="50%" h="2px" background="red" mb="2rem" />
                </Flex>
              )}
            </Flex>
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
