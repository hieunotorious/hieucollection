import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { floor, isEmpty } from "lodash";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup, Button } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import router, { useRouter } from "next/router";
import { AuthContext } from "app/context/authContext";
import { height } from "@mui/system";
const ProductItem = ({ product }: { product: ProductType }) => {
  const { t } = useTranslation();
  const { addUserCart } = useContext(AuthContext);
  return (
    <Link href={`product/${product.id}`}>
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
            src={`/${product.img}`}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ marginRight: 16, position: "relative", fontWeight: 600 }}
              css={css`
                ${(product.sale || product.sale === 0) &&
                ` &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 2px;
                width: 100%;
                background-color: var(--dark-grey-color);
                top: 50%;
                transform: translateY(-50%);
               
              }`}
              `}
            >
              {product.price}$
            </div>
            {(product.sale || product.sale === 0) && (
              <div>{floor(product.price - product.sale, 2)}$</div>
            )}
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              width: "100%",
              height: "32px",
            }}
          >
            {product.name}
          </div>
        </div>
        <ButtonGroup marginTop="1rem" marginBottom="1rem">
          <Link href="/checkout">
            <Button variant="solid" colorScheme="blue">
              {t("buy_now")}
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              style={{ width: "15rem", height: "3rem" }}
              onClick={() => {
                router.push("/cart");
                addUserCart(product.id);
              }}
              variant="ghost"
              colorScheme="blue"
              size="md"
            >
              {t("add_to_cart")}
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </Link>
  );
};

export default ProductItem;
