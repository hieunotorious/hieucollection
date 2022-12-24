import React, { useContext, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import link from "next/link";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { padding } from "@mui/system";
import { useRouter } from "next/router";
import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import { AuthContext } from "../../../context/authContext";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Flex,
  FlexProps,
  Text,
  Stack,
} from "@chakra-ui/react";
import { getProductId } from "app/services/ProductService";
import { addToCart } from "app/services/CartService";
function ProductId() {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);
  const [product, setProduct] = useState<ProductType>();
  const ratingStars = useMemo(
    () => new Array(product?.rating).fill(0),
    [product]
  );

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (router.query.id) {
      const call = async () => {
        const id = router.query.id?.toString() || "";
        const res = await getProductId(id);
        setProduct(res);
      };
      call();
    }
  }, [router]);

  const handleAddCart = async (id: string) => {
    const data = await addToCart(id, quantity);
    if (data) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: data };
        return undefined;
      });
      router.push("/cart");
    }
  };

  return (
    product && (
      <div
        key={product._id}
        style={{
          padding: "4rem",
          minHeight: "950px",
          width: "100%",
          boxSizing: "border-box",
          background: "White",
        }}
      >
        <div>
          <Link style={{}} href="/product">
            <button>
              <ArrowBackIcon
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontSize: 30,
                }}
              />
            </button>
          </Link>
        </div>
        <div
          style={{
            background: "white",
            marginTop: "3rem",
            display: isMobile ? "column" : "grid",
            gridTemplateColumns: " 1fr 1fr",
            gap: "4rem",
            alignItems: " center",
          }}
        >
          <Image
            style={{
              objectFit: "cover",
              borderRadius: 16,
              display: "flex",
            }}
            width={512}
            height={500}
            src={product.img}
            alt=""
            css={css`
              &:hover {
                -webkit-box-shadow: var(--box-shadow);
                box-shadow: var(--box-shadow);
               
              
            `}
          />
          <form
            style={{
              alignItems: "center",
              display: "grid",
              gap: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                borderBottom: "1px solid black",
                textTransform: "capitalize",
              }}
            >
              {product.name}
            </h2>
            <div
              className="ratings test-grey"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ display: "flex", width: 60 }}>
                {ratingStars.map((value, index) => {
                  return (
                    <StarIcon
                      key={index}
                      style={{ fill: "black", fontSize: "10" }}
                    />
                  );
                })}
              </div>
              <h3
                style={{
                  marginLeft: " 1rem",
                  color: "var(--grey-3)",
                  fontSize: "1rem",
                }}
              >
                ({product.review} Reviews)
              </h3>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
              }}
            >
              <a style={{ fontWeight: "bold" }}>Price: </a>${product.price}
              {product.sale && (
                <div>
                  <a style={{ fontWeight: "bold" }}>Sale: </a>$
                  {product.price - product.sale}
                </div>
              )}
            </h3>
            <div
              style={{
                lineHeight: 2,
                fontSize: "1rem",
              }}
            >
              <p style={{ textAlign: "justify", fontSize: "12px" }}>
                <a style={{ fontWeight: "bold" }}>Description: </a>
                {product.description}
              </p>
            </div>
            <div style={{}}>
              <h3
                style={{
                  color: "var(--grey-3)",
                  fontSize: "1rem",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  letterSpacing: " normal",
                  borderBottom: "1px solid black",
                  marginBottom: "2rem",
                }}
                className="brand"
              >
                <a style={{ fontWeight: "bold" }}>Brand: </a>
                {product.brand}
              </h3>
            </div>
            <div style={{ width: 50 }}>
              <NumberInput
                value={quantity}
                onChange={(value) => setQuantity(parseInt(value))}
                min={1}
                max={100}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              <Link style={{ color: "black" }} href="/checkout">
                <Stack spacing={4} direction="row" align="center">
                  <Button
                    style={{ width: "15rem", height: "3rem" }}
                    onClick={() => {
                      router.push("/cart");
                      handleAddCart(product._id);
                    }}
                    colorScheme="blue"
                    size="md"
                  >
                    {t("buy_now")}
                  </Button>
                </Stack>
              </Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link style={{ color: "black" }} href="/cart">
                  <Stack spacing={4} direction="row" align="center">
                    <Button
                      style={{ width: "15rem", height: "3rem" }}
                      onClick={() => {
                        router.push("/cart");
                        handleAddCart(product._id);
                      }}
                      variant="ghost"
                      colorScheme="blue"
                      size="md"
                    >
                      {t("add_to_cart")}
                    </Button>
                  </Stack>
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon
                style={{ fontSize: "4rem", fill: "#3B5998", cursor: "pointer" }}
              />
              <GoogleIcon
                style={{ fontSize: "4rem", fill: "#EA4335", cursor: "pointer" }}
              />
              <TwitterIcon
                style={{ fontSize: "4rem", fill: "#1DA1F2", cursor: "pointer" }}
              />
              <FavoriteBorderIcon
                style={{ fontSize: "4rem", fill: "red", cursor: "pointer" }}
              />
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ProductId;
