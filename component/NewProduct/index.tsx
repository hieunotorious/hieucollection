import { useContext, useEffect, useState } from "react";
import { useResponsive } from "app/hooks/useResponsive";
import { shuffle } from "lodash";
import { css } from "@emotion/react";
import { Flex, Input, Text } from "@chakra-ui/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AllType, ProductType } from "app/api/auth/models/product";
import useTranslation from "next-translate/useTranslation";
import Container from "app/component/Container";
import { getProduct } from "app/services/ProductService";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { addToCart } from "app/services/CartService";
import { AuthContext } from "app/context/authContext";
import router from "next/router";
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

const NewProduct = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [products, setProduct] = useState(product);
  const [newProducts, setNewProducts] = useState(product);

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
    </Container>
  );
};

export default NewProduct;
