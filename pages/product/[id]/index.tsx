import React, { useContext, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import link from "next/link";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { DefaultProduct } from "app/api/auth/data";
import { padding } from "@mui/system";
import { useRouter } from "next/router";
import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import { AuthContext } from "../../../context/authContext";

function ProductId() {
  const router = useRouter();
  const { addUserCart } = useContext(AuthContext);
  const [product, setProduct] = useState<ProductType>();
  const ratingStars = useMemo(
    () => new Array(product?.rating).fill(0),
    [product]
  );
  useEffect(() => {
    if (router.query.id) {
      setProduct(
        DefaultProduct.find((item, index) => item.id === router.query.id)
      );
    }
  }, [router]);

  return (
    product && (
      <div
        key={product.id}
        style={{
          padding: "4rem",
          minHeight: "950px",
          width: "100%",
          boxSizing: "border-box",
          background: " var(--light-grey-color-shade)",
        }}
      >
        <div
          style={{
            background: " var(--light-grey-color-shade)",
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: " 1fr 1fr",
            gap: "4rem",
            alignItems: " center",
          }}
        >
          <Image
            style={{ objectFit: "cover", borderRadius: "0.25rem" }}
            width={512}
            height={500}
            src={`/${product.img}`}
            alt=""
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
              <a style={{ fontWeight: "bold" }}>Price: </a>${product.sale}
            </h3>
            <div
              style={{
                lineHeight: 2,

                fontSize: "1rem",
              }}
            >
              <p style={{ textAlign: "justify" }}>
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
                }}
                className="brand"
              >
                <a style={{ fontWeight: "bold" }}>Brand: </a>
                {product.brand}
              </h3>
            </div>
            <div
              onClick={() => {
                router.push("/cart");
                addUserCart(product.id);
              }}
              style={{
                textTransform: "uppercase",
                fontWeight: "700",
                padding: "1.4rem 4.2rem",
                borderRadius: "1rem",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              Add to Cart
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ProductId;
