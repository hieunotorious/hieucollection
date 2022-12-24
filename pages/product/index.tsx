import { Category } from "@mui/icons-material";
import { AllType, BrandType, CategoryType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ProductItem from "app/component/ProductItem";
import React, { useState } from "react";
import { useResponsive } from "app/hooks/useResponsive";
import { Formik } from "formik";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { getProduct } from "app/services/ProductService";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
export const getStaticProps = async () => {
  const product = await getProduct();
  return {
    props: {
      product,
    },
  };
};

const Product = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [products, setProduct] = useState(product);
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
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

  return (
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
      {isMobile ? (
        <Flex>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ExpandMoreRoundedIcon />}
                >
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <div style={{ position: "relative", display: "flex" }}>
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
                          onClick={() => setProduct(product)}
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
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
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

                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div style={{ fontWeight: 900 }}>{t("category")}</div>

                          <div
                            style={{ cursor: "pointer", fontSize: 12 }}
                            onClick={() =>
                              filterCategory(CategoryType.action_figure)
                            }
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
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      ) : (
        <div style={{ position: "relative", display: "flex" }}>
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
              onClick={() => setProduct(product)}
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
      )}
      <div
        style={{
          display: "flex",

          justifyContent: isMobile ? "center" : "space-between",
          width: "100%",
          margin: "auto",
          flexWrap: "wrap",
          marginTop: 8,
          cursor: "pointer",
        }}
      >
        {products.map((item: any, index: number) => {
          return <ProductItem product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
