import { Flex, Stack, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import "aos/dist/aos.css";
import { AllType, ProductType } from "app/api/auth/models/product";
import Info from "app/component/Info";
import ProductItem from "app/component/ProductItem";
import COLOR from "app/constant/color";
import useProducts from "app/hooks/useProducts";
import { useResponsive } from "app/hooks/useResponsive";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Container from "../../Container";
import ToyService from "./ToyService";

const Content1 = () => {
  const { isLoading, products } = useProducts();
  const [filterType, setFilterType] = useState(AllType.new);
  const { isMobile, isMobileOrTablet, isTabletOrLaptop } = useResponsive();

  const [currentProduct, setCurrentProduct] = useState<
    ProductType[] | undefined
  >([]);
  const { t } = useTranslation();

  const filterAll = useCallback(
    (all: AllType) => {
      const filterProducts = products
        ?.filter((item, index) => {
          return item.all === all;
        })
        .slice(0, 6);
      setFilterType(all);
      setCurrentProduct(filterProducts);
    },
    [products]
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    filterAll(filterType);
  }, [filterAll, filterType, isLoading]);
  const spin = keyframes`
     from {
        -webkit-transform: rotate(0deg)
    }
    to {
        -webkit-transform: rotate(360deg);
    }
`;
  return (
    <Container justifyContent="center" direction="column" alignItems="center">
      <Info />
      <Stack
        w="full"
        marginTop="7rem"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant={isMobile ? "h5_mobile" : "h5"} textTransform="uppercase">
          {t("product")}
        </Text>
        <Text
          data-aos="fade-up"
          width={isMobile ? "300px" : "1500px"}
          textAlign="center"
          variant={isMobile ? "h4_mobile" : "h4"}
        >
          {t("text2")}
        </Text>
        <Flex
          gap={isTabletOrLaptop ? "1rem" : "3rem"}
          direction={
            isMobile ? "column" : isMobileOrTablet ? "column" : "column"
          }
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            w="full"
            justifyContent="center"
            mt="30px"
            spacing={1}
          >
            <Stack
              w={isMobile ? "100%" : "15%"}
              direction={isMobile ? "row" : "column"}
            >
              <Text
                color={
                  filterType === AllType.new ? COLOR.primary : COLOR.secondary
                }
                variant="h4"
                onClick={() => filterAll(AllType.new)}
              >
                {t("top_new_products")}
              </Text>
              <Text
                color={
                  filterType === AllType.sale ? COLOR.primary : COLOR.secondary
                }
                variant="h4"
                onClick={() => filterAll(AllType.sale)}
              >
                {t("top_sale_products")}
              </Text>
              <Text
                color={
                  filterType === AllType.pre_order
                    ? COLOR.primary
                    : COLOR.secondary
                }
                variant="h4"
                onClick={() => filterAll(AllType.pre_order)}
              >
                {t("top_pre_order_products")}
              </Text>
            </Stack>
            <Stack
              w={isMobile ? "80%" : "70%"}
              direction="row"
              sx={{
                margin: "auto",
                flexWrap: isMobile ? "wrap" : "wrap",
                cursor: "pointer",
              }}
            >
              {currentProduct?.map((item: any, index: number) => {
                return <ProductItem product={item} key={item.id} size={300} />;
              })}
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Stack
        w="full"
        marginTop="7rem"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant={isMobile ? "h5_mobile" : "h5"} textTransform="uppercase">
          {t("service")}
        </Text>
        <Text
          data-aos="fade-up"
          width={isMobile ? "300px" : "1500px"}
          textAlign="center"
          variant={isMobile ? "h4_mobile" : "h4"}
        >
          {t("what_provide")}
        </Text>

        <Stack direction="row" mt="8rem !important" spacing="20px">
          <ToyService title="shipping" src="/images/shipping.png" />
          <ToyService title="gift" src="/images/gift.png" />
          <ToyService title="support" src="/images/support.png" />
          <ToyService title="money" src="/images/money.png" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Content1;
