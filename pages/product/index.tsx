import { css } from "@emotion/react";
import { AllType, BrandType, CategoryType } from "app/api/auth/models/product";
import Image from "next/image";
import ProductItem from "app/component/ProductItem";
import { useResponsive } from "app/hooks/useResponsive";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import Breadcrumb from "app/component/Breadcrumb";
import useProducts from "app/hooks/useProducts";
import useTranslation from "next-translate/useTranslation";

const Product = () => {
  const { isLoading, products } = useProducts();
  const [currentProduct, setCurrentProduct] = useState(products);
  const { isMobile, isMobileOrTablet } = useResponsive();
  const { t } = useTranslation();
  const filterName = (name: string) => {
    if (!!name.trim()) {
      const filterProducts = currentProduct?.filter((item, index) => {
        return item.name.toUpperCase().indexOf(name.toUpperCase()) > -1;
      });

      setCurrentProduct(filterProducts);
    } else {
      setCurrentProduct(currentProduct);
    }
  };

  const filterAll = (all: AllType) => {
    const filterProducts = currentProduct?.filter((item, index) => {
      return item.all === all;
    });
    setCurrentProduct(filterProducts);
  };

  const filterBrand = (brand: BrandType) => {
    const filterProducts = currentProduct?.filter((item, index) => {
      return item.brand === brand;
    });
    setCurrentProduct(filterProducts);
  };
  const filterCategory = (category: CategoryType) => {
    const filterProducts = currentProduct?.filter((item, index) => {
      return item.category === category;
    });
    setCurrentProduct(filterProducts);
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setCurrentProduct(products);
  }, [isLoading, products]);

  return (
    <Flex direction="column" w="full" marginTop="5rem">
      <Breadcrumb
        links={[
          { title: t("home"), href: "/" },
          { title: t("product"), href: "/product" },
        ]}
        current={t("product")}
      />
      <div
        style={{
          display: "flex",
          padding: 16,
          minHeight: 900,
          alignItems: isMobile ? "center" : "initial",
          flexDirection: `${isMobile ? "column" : "row"}`,
        }}
        css={css`
          background-color: ${isMobile ? "white" : "white"};
        `}
      >
        <Flex
          display={isMobile ? "flex" : "none"}
          p="1rem"
          justifyContent="center"
        >
          <Flex direction="column">
            <Flex mb="1rem">
              <input
                onChange={(event) => filterName(event.target.value)}
                placeholder={t("search")}
                style={{
                  fontSize: 12,
                  border: "1px solid black",
                  padding: "1rem",
                  width: "190px",
                  height: "30px",
                  borderRadius: "1rem",
                }}
              />
            </Flex>
            <Flex direction="row" gap="2rem">
              <Flex w="50px">
                <Popover>
                  <PopoverTrigger>
                    <Button variant="ghost" colorScheme="blue">
                      {t("product")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>
                      <div
                        style={{
                          cursor: "pointer",
                          fontWeight: 900,
                          textAlign: "center",
                        }}
                        onClick={() => setCurrentProduct(currentProduct)}
                      >
                        {t("all")}
                      </div>
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody textAlign="center">
                      <div
                        style={{
                          cursor: "pointer",
                          fontSize: 12,
                        }}
                        onClick={() => filterAll(AllType.new)}
                      >
                        {t("new_arrival")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterAll(AllType.sale)}
                      >
                        {t("sale_product")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterAll(AllType.pre_order)}
                      >
                        {t("pre_order")}
                      </div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex w="50px">
                <Popover>
                  <PopoverTrigger>
                    <Button variant="ghost" colorScheme="blue">
                      {t("brand")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <div
                        style={{
                          cursor: "pointer",
                          fontWeight: 900,
                          textAlign: "center",
                        }}
                        onClick={() => setCurrentProduct(currentProduct)}
                      >
                        {t("all")}
                      </div>
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <div
                        style={{
                          cursor: "pointer",
                          fontSize: 12,
                        }}
                        onClick={() => filterBrand(BrandType.mafex)}
                      >
                        {t("MAFEX")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.dc_collectibles)}
                      >
                        {t("DC COLLECTIBLES")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.figuart)}
                      >
                        {t("FIGUART")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.shf)}
                      >
                        {t("SHF")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.marvel_legend)}
                      >
                        {t("MARVEL LEGEND")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.wwe)}
                      >
                        {t("WWE")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterBrand(BrandType.mcfarlane)}
                      >
                        {t("MCFARLANE")}
                      </div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex w="50px">
                <Popover>
                  <PopoverTrigger>
                    <Button variant="ghost" colorScheme="blue">
                      {t("category")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <div
                        style={{
                          cursor: "pointer",
                          fontWeight: 900,
                          textAlign: "center",
                        }}
                        onClick={() => setCurrentProduct(currentProduct)}
                      >
                        {t("all")}
                      </div>
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody textAlign="center">
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() => filterCategory(CategoryType.statue)}
                      >
                        {t("statue")}
                      </div>
                      <div
                        style={{ cursor: "pointer", fontSize: 12 }}
                        onClick={() =>
                          filterCategory(CategoryType.action_figure)
                        }
                      >
                        {t("action_figure")}
                      </div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
                  src="/images/frame.png"
                  width="30px"
                  height="30px"
                  alt=""
                />
              </Link>
            </Stack>
          </Tooltip>
        </Stack>
        <div
          style={{ position: "relative", display: isMobile ? "none" : "flex" }}
        >
          <div
            style={{
              width: 200,
              marginRight: 16,
              background: "white",
              padding: 8,
              position: "sticky",
              top: 80,
              left: 0,
              display: "flex",
              flexDirection: "column",
              height: "fit-content",
              marginLeft: isMobile ? 25 : "none",
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
            <input
              onChange={(event) => filterName(event.target.value)}
              placeholder={t("search")}
              style={{
                border: "1px solid black",
                padding: "1rem",
              }}
            />

            <div
              style={{ cursor: "pointer", fontWeight: 900 }}
              onClick={() => setCurrentProduct(currentProduct)}
            >
              {t("all")}
            </div>
            <div
              style={{ cursor: "pointer", fontSize: 12 }}
              onClick={() => filterAll(AllType.new)}
            >
              {t("new_arrival")}
            </div>
            <div
              style={{ cursor: "pointer", fontSize: 12 }}
              onClick={() => filterAll(AllType.sale)}
            >
              {t("sale_product")}
            </div>
            <div
              style={{ cursor: "pointer", fontSize: 12 }}
              onClick={() => filterAll(AllType.pre_order)}
            >
              {t("pre_order")}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 900 }}>{t("brand")}</div>
              <select
                onChange={(event) => {
                  filterBrand(event.target.value as BrandType);
                }}
              >
                {Object.values(BrandType).map((item, index) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 900 }}>{t("category")}</div>

              <div
                style={{ cursor: "pointer", fontSize: 12 }}
                onClick={() => filterCategory(CategoryType.action_figure)}
              >
                {t("action_figure")}
              </div>
              <div
                style={{ cursor: "pointer", fontSize: 12 }}
                onClick={() => filterCategory(CategoryType.statue)}
              >
                {t("statue")}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",

            justifyContent: isMobile ? "center" : "space-between",
            width: "100%",
            margin: "auto",
            flexWrap: isMobile ? "wrap" : "wrap",
            marginTop: 8,
            cursor: "pointer",
          }}
        >
          {currentProduct?.map((item: any, index: number) => {
            return <ProductItem product={item} key={item.id} />;
          })}
        </div>
      </div>
    </Flex>
  );
};

export default Product;
