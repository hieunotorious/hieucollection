import React, { useContext, useMemo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserCart } from "app/api/auth/models/user";
import product from "../product";
import { AuthContext } from "../../context/authContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { round } from "lodash";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { Button, Flex, FlexProps, Text, Stack } from "@chakra-ui/react";
import {
  clearCart,
  removeFromCart,
  updateCartQuantity,
} from "app/services/CartService";
import { useResponsive } from "app/hooks/useResponsive";
function Cart() {
  const { t } = useTranslation();
  const { user, setUser } = useContext(AuthContext);

  const totalPrice = useMemo(() => {
    if (user && user.cart.length > 0) {
      let total = 0;
      user.cart.forEach((item) => {
        total +=
          (item.sale ? item.price - item.sale : item.price) * item.quantity;
      });
      return round(total, 2);
    }
    return 0;
  }, [user]);

  const updateUserCartQuantity = async (id: string, minus?: boolean) => {
    const data = await updateCartQuantity(id, minus);
    if (data) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: data };
        return undefined;
      });
    }
  };

  const removeUserCart = async (id: string) => {
    const data = await removeFromCart(id);
    if (data) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: data };
        return undefined;
      });
    }
  };

  const removeAllCart = async () => {
    const data = await clearCart();
    if (data?.success) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: [] };
        return undefined;
      });
    }
  };
  const { isMobile } = useResponsive();
  const renderCartItem = (item: UserCart) => {
    return (
      <div
        style={{
          display: isMobile ? "row" : "grid",
          marginBottom: "2rem",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "360px 1fr 1fr 1fr auto",
          borderBottom: "1px solid black",
          paddingBottom: "1rem",
          background: "white",
        }}
        key={item.product_id}
      >
        <div style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: isMobile ? "flex" : "grid",
              gridTemplateColumns: "100px 200px",
              gridGap: "1rem",
              gap: "1rem",
              justifyContent: isMobile ? "center" : "none",
            }}
          >
            <Image
              width={isMobile ? "75px" : "100%"}
              height={isMobile ? "112px" : "100%"}
              objectFit="cover"
              src={item.img}
              alt=""
            />
            <h3
              style={{
                display: isMobile ? "none" : "flex",
                margin: "2rem",
                fontSize: isMobile ? "2px" : 20,
                fontWeight: 700,
                textAlign: "center",
                fontFamily: "cursive",
              }}
            >
              {item.name}
            </h3>
          </div>
        </div>
        <div
          style={{
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "2.25rem",
            fontFamily: "cursive",
          }}
        >
          <h3>${item.sale ? item.price - item.sale : item.price}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            fontFamily: "cursive",
          }}
        >
          <button
            type="button"
            onClick={() =>
              item.quantity > 1 && updateUserCartQuantity(item.product_id, true)
            }
          >
            <RemoveIcon
              style={{
                display: isMobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#102a42",
              }}
            />
          </button>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.quantity}
          </h2>
          <button onClick={() => updateUserCartQuantity(item.product_id)}>
            <AddIcon
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#102a42",
              }}
            />
          </button>
        </div>

        <div
          style={{
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 700,
            fontSize: "2.25rem",
            fontFamily: "cursive",
          }}
        >
          $
          {round(
            (item.sale ? item.price - item.sale : item.price) * item.quantity,
            2
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "2.25rem",
          }}
        ></div>
        <div>
          <button type="button" onClick={() => removeUserCart(item.product_id)}>
            <DeleteIcon
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "2.25rem",
                fontFamily: "cursive",
              }}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: 900,
        padding: "0 4rem",
        background: "white",
        justifyContent: "center",
      }}
    >
      {user ? (
        <Flex direction="column">
          <div>
            <div
              style={{
                display: isMobile ? "none" : "grid",
                marginBottom: "2rem",
                justifyContent: "center",
                textAlign: "center",
                gridTemplateColumns: "360px 1fr 1fr 1fr auto",
                borderBottom: "1px solid black",
                fontSize: "3rem",
                textTransform: "uppercase",
                fontFamily: "serif",
                background: "white",
              }}
            >
              <p>{t("item")}</p>
              <p>{t("price")}</p>
              <p>{t("quantity")}</p>
              <p>{t("subtotal")}</p>
              <span></span>
            </div>

            <div>
              {user && user.cart.length > 0 && user.cart.map(renderCartItem)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              margin: "1rem",
              padding: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                background: "black",
                border: "2px solid black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
              }}
            >
              <Link style={{}} href="/product">
                <button>
                  <ArrowBackIcon
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  />
                </button>
              </Link>
            </div>
            <div
              style={{
                borderRadius: "10px",
                background: "black",
                border: "2px solid black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="button" onClick={() => removeAllCart()}>
                  <DeleteIcon
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Gill Sans",
              width: "100%",
            }}
          >
            <article
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                width: 300,
                height: 150,
                marginBottom: 16,
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                  padding: "1rem",
                  marginBottom: "5rem",
                  gap: "1rem",
                  textAlign: "center",
                }}
              >
                <h3>
                  {t("subtotal")}:<span>${totalPrice}</span>
                </h3>
                <h3>
                  {t("shipping_fee")}:<span>{t("free")}</span>
                </h3>
                <hr />
                <h2 style={{ marginBottom: "1rem" }}>
                  {t("order_total")}: <span>${totalPrice}</span>
                </h2>
              </form>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Gill Sans",
              width: "100%",
            }}
          >
            <article>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                  padding: "1rem",
                  marginBottom: "5rem",
                  gap: "1rem",
                  textAlign: "center",
                }}
              >
                <h3>
                  <Link style={{ color: "black" }} href="/checkout">
                    <Stack spacing={4} direction="row" align="center">
                      <Button border="2px" colorScheme="red" size="lg">
                        {t("checkout")}
                      </Button>
                    </Stack>
                  </Link>
                </h3>
              </form>
            </article>
          </div>
        </Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          {" "}
          <Flex direction="column" alignItems="center">
            {" "}
            <Text
              fontWeight="600"
              fontSize="5xl"
              color="#222222"
              fontFamily="'Baloo', serif"
            >
              {t("need_login")}{" "}
            </Text>{" "}
            <Link href="/signin">
              <Text
                fontSize="20px"
                color="#3399FF"
                fontFamily="'Baloo', serif"
                textDecoration="underline"
                cursor="pointer"
              >
                {t("click")}
              </Text>
            </Link>
          </Flex>
        </Flex>
      )}
    </div>
  );
}

export default Cart;
