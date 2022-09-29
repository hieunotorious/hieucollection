import { Category } from "@mui/icons-material";
import { DefaultProduct } from "app/api/auth/data";
import { AllType, BrandType, CategoryType } from "app/api/auth/models/product";
import { css } from "@emotion/react";

import ProductItem from "app/component/product";
import React, { useState } from "react";
import { useResponsive } from "app/hooks/useResponsive";

const Product = () => {
  const [products, setProduct] = useState(DefaultProduct);
  const { isMobile } = useResponsive();

  const filterAll = (all: AllType) => {
    const filterProducts = DefaultProduct.filter((item, index) => {
      return item.all === all;
    });
    setProduct(filterProducts);
  };

  const filterBrand = (brand: BrandType) => {
    const filterProducts = DefaultProduct.filter((item, index) => {
      return item.brand === brand;
    });
    setProduct(filterProducts);
  };
  const filterCategory = (category: CategoryType) => {
    const filterProducts = DefaultProduct.filter((item, index) => {
      return item.category === category;
    });
    setProduct(filterProducts);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: 16,
        minHeight: 800,
        flexDirection: `${isMobile ? "column" : "row"}`,
      }}
      css={css`
        background-color: ${isMobile
          ? "white"
          : "var(--light-grey-color-shade)"};
      `}
    >
      <div
        style={{ width: 200, marginRight: 16, background: "white", padding: 8 }}
      >
        <div
          style={{ cursor: "pointer", fontWeight: 900 }}
          onClick={() => setProduct(DefaultProduct)}
        >
          All
        </div>
        <div
          style={{ cursor: "pointer", fontSize: 12 }}
          onClick={() => filterAll(AllType.new)}
        >
          NEW ARRIVAL
        </div>
        <div
          style={{ cursor: "pointer", fontSize: 12 }}
          onClick={() => filterAll(AllType.sale)}
        >
          SALE-PRODUCT
        </div>
        <div
          style={{ cursor: "pointer", fontSize: 12 }}
          onClick={() => filterAll(AllType.pre_order)}
        >
          PRE-ORDER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 900 }}>Brand</div>
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
          <div style={{ fontWeight: 900 }}>Category</div>

          <div
            style={{ cursor: "pointer", fontSize: 12 }}
            onClick={() => filterCategory(CategoryType.action_figure)}
          >
            ACTION FIGURE
          </div>
          <div
            style={{ cursor: "pointer", fontSize: 12 }}
            onClick={() => filterCategory(CategoryType.statue)}
          >
            STATUE
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "auto",
          flexWrap: "wrap",
          marginTop: 8,
        }}
      >
        {products.map((item, index) => {
          return <ProductItem product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
