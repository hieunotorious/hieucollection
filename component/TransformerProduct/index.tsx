import { useContext, useEffect, useState } from "react";
import { useResponsive } from "app/hooks/useResponsive";

import { shuffle } from "lodash";
import { css } from "@emotion/react";

import { Flex, Text } from "@chakra-ui/react";

import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductType } from "app/api/auth/models/product";

import useTranslation from "next-translate/useTranslation";
import Container from "app/component/Container";
import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";

import { addToCart } from "app/services/CartService";
import { AuthContext } from "app/context/authContext";
import router from "next/router";
import ProductItem from "../ProductItem";
export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const TransformerProduct = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [nameProducts3, setNameProducts3] = useState(product);

  const { t } = useTranslation();
  const { isMobile } = useResponsive();
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
    setNameProducts3(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/transformers/i) > -1;
        })
      ).slice(0, 8)
    );
  }, [product]);

  const renderProducts = (product: ProductType, index: number) => {
    return <ProductItem product={product} key={product._id} />;
  };
  return (
    <Container direction="column">
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
    </Container>
  );
};

export default TransformerProduct;
