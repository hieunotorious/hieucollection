import React, { useContext, useEffect, useState } from "react";
import Brand from "app/component/Brand";
import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { padding } from "@mui/system";
import { shuffle } from "lodash";
import { css } from "@emotion/react";
import SVG from "react-inlinesvg";
import { Button, ButtonGroup, Flex, Input, Text } from "@chakra-ui/react";
import Banner from "app/component/Banner";
import "swiper/css";
import { Autoplay } from "swiper";
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
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";

export const getServerSideProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const Home = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [products, setProduct] = useState(product);
  const [newProducts, setNewProducts] = useState(product);
  const [saleProducts, setSaleProducts] = useState(product);
  const [nameproducts, setNameProducts] = useState(product);
  const [preProducts, setPreProducts] = useState(product);
  const { t } = useTranslation();

  useEffect(() => {
    setNewProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.new;
        })
      ).slice(0, 4)
    );
    setNameProducts(
      shuffle(
        product.filter((item, index) => {
          return item.name.search(/dragon ball/i) > -1;
        })
      ).slice(0, 8)
    );
    setPreProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.pre_order;
        })
      ).slice(0, 4)
    );
    setSaleProducts(
      shuffle(
        product.filter((item, index) => {
          return item.all === AllType.sale;
        })
      ).slice(0, 4)
    );
  }, [product]);

  const renderProducts = (product: ProductType, index: number) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          background: "white",
          width: 216,
          padding: 8,
          borderRadius: 16,
          marginBottom: 35,
          marginLeft: 25,
        }}
        css={css`
          border: 2px dashed #f1f1f1;
          &:hover {
            -webkit-box-shadow: var(--box-shadow);
            box-shadow: var(--box-shadow);
            border: 2px dashed #ff33cc;
          }
        `}
      >
        <div
          css={css`
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 1rem;
            &:hover img {
              scale: 1.2;
            }
          `}
        >
          <Image
            style={{ transition: "all 300ms ease-in-out" }}
            objectFit="cover"
            width={200}
            height={200}
            src={product.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="price">
            <span className="new text-amber-900">${product.price}</span>
          </div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              width: "100%",
              height: "32px",
            }}
          >
            {product.name}
          </p>
          <ButtonGroup alignItems="center" spacing="2">
            <Link href="/checkout">
              <Button margin="2rem" variant="solid" colorScheme="blue">
                {t("buy_now")}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" colorScheme="blue">
                {t("add_to_cart")}
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    );
  };

  return (
    <Container direction="column">
      <Section />
      <Flex marginTop="19rem" justifyContent="center" alignItems="center">
        <Flex>
          <Flex>
            <Text
              fontWeight="600"
              fontSize="26px"
              color="#222222"
              fontFamily="'Baloo', serif"
            >
              DRAGONBALL FIGURES
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
        >
          <Swiper
            style={{ width: "100%" }}
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
            {nameproducts.map((item, index) => (
              <SwiperSlide style={{ width: 216 }} key={item._id}>
                {renderProducts(item, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
      <Banner />

      <Flex direction="row" justifyContent="center" alignItems="center">
        <Flex direction="column">
          <Flex justifyContent="center" alignItems="center" marginTop="19rem">
            <Link href="/checkout">
              <Button
                w="150px"
                h="50px"
                margin="2rem"
                variant="solid"
                colorScheme="blue"
              >
                {t("top_new_products")}
              </Button>
            </Link>
            <Link href="/checkout">
              <Button
                w="150px"
                h="50px"
                margin="2rem"
                variant="solid"
                colorScheme="blue"
              >
                {t("top_sale_products")}
              </Button>
            </Link>
            <Link href="/cart">
              <Button w="150px" h="50px" margin="2rem" colorScheme="blue">
                {t("top_pre_order_products")}
              </Button>
            </Link>
          </Flex>
          <Flex
            marginTop="5rem"
            border="2px"
            borderRadius="2xl"
            gap="3rem"
            borderColor="white"
          >
            {newProducts.map(renderProducts)}
          </Flex>
        </Flex>
      </Flex>
      <Brand />
      <NewLetter />
    </Container>
  );
};

export default Home;
