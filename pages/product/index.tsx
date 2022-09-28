import { Category } from "@mui/icons-material";
import { DefaultProduct } from "app/api/auth/data";
import { BrandType, CategoryType } from "app/api/auth/models/product";
import { css } from "@emotion/react";

import ProductItem from "app/component/product";
import React, { useState } from "react";

const Product = () => {
  const [products, setProduct] = useState(DefaultProduct);

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
      style={{ display: "flex", padding: 16 }}
      css={css`
        background-color: var(--light-grey-color-shade);
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 900 }}>Brand</div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.marvel_legend)}
          >
            ML
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.mcfarlane)}
          >
            MCF
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.shf)}
          >
            SHF
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.dc_collectibles)}
          >
            DC COLLECTIBLES
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.mattel)}
          >
            MATTEL
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.figuart)}
          >
            FIGUART
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterBrand(BrandType.figma)}
          >
            FIGMA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 900 }}>Category</div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => filterCategory(CategoryType.action_figure)}
          >
            ACTION FIGURE
          </div>
          <div
            style={{ cursor: "pointer" }}
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
