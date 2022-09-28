import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import React from "react";

const ProductItem = ({ product }: { product: ProductType }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        background: "white",
        width: 216,
        padding: 8,
        border: "1px solid black",
        borderRadius: 16,
        marginBottom: 8,
      }}
      css={css`
        &:hover {
          -webkit-box-shadow: var(--box-shadow);
          box-shadow: var(--box-shadow);
        }
      `}
    >
      <div
        css={css`
          width: 200px;
          height: 200px;
        `}
      >
        <img src={product.img} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{product.price}$</div>
        <div>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductItem;
