import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { floor, isEmpty } from "lodash";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup, Button, Flex, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import router, { useRouter } from "next/router";
import { AuthContext } from "app/context/authContext";
import { height } from "@mui/system";
import { addToCart } from "app/services/CartService";
import { useResponsive } from "app/hooks/useResponsive";
const ProductItem = ({ product }: { product: ProductType }) => {
  const { t } = useTranslation();
  const { user, setUser } = useContext(AuthContext);
  const { isMobile } = useResponsive();

  const handleAddCart = async (id: string) => {
    if (user) {
      const data = await addToCart(id, 1);
      if (data) {
        setUser((prevState) => {
          if (prevState) return { ...prevState, cart: data };
          return undefined;
        });
      }
    }
    router.push("/cart");
  };
  return (
    <Link href={`product/${product._id}`}>
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
          marginLeft: isMobile ? "none" : 25,
        }}
        css={css`
          border: 2px dashed transparent;
          &:hover {
            border: 2px dashed #f1f1f1;
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginRight: 16,
                position: "relative",
                fontWeight: 600,
              }}
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

        <ButtonGroup
          marginTop="1rem"
          marginBottom="1rem"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="/checkout">
            <Button variant="solid" colorScheme="blue">
              {t("buy_now")}
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              onClick={() => handleAddCart(product._id)}
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
