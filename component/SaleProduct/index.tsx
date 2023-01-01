import React, { useContext, useEffect, useState } from "react";
import { useResponsive } from "app/hooks/useResponsive";

import { shuffle } from "lodash";
import { css } from "@emotion/react";

import { Flex, Text } from "@chakra-ui/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { AllType, ProductType } from "app/api/auth/models/product";

import useTranslation from "next-translate/useTranslation";
import Container from "app/component/Container";
import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";

import { addToCart } from "app/services/CartService";
import { AuthContext } from "app/context/authContext";
import router from "next/router";
import ProductItem from "app/component/ProductItem";
export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const SaleProduct = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [saleProducts, setSaleProducts] = useState(product);
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
    setNameProducts4(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/dceased/i) > -1;
        })
      ).slice(0, 8)
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
    </Container>
  );
};

export default SaleProduct;
