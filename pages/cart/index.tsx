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
function Cart() {
  const { user, updateUserCartQuantity, removeUserCart, removeAllCart } =
    useContext(AuthContext);

  const totalPrice = useMemo(() => {
    if (user && user.cart.length > 0) {
      let total = 0;
      user.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return round(total, 2);
    }
    return 0;
  }, [user?.cart]);

  const renderCartItem = (item: UserCart) => {
    return (
      <div
        style={{
          display: "grid",
          marginBottom: "2rem",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "360px 1fr 1fr 1fr auto",
          borderBottom: "1px solid black",
          paddingBottom: "1rem",
        }}
        key={item.id}
      >
        <div style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 200px",
              gridGap: "1rem",
              gap: "1rem",
            }}
          >
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src={`/${item.img}`}
              alt=""
            />
            <h3
              style={{
                margin: "2rem",
                fontSize: 20,
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "2.25rem",
            fontFamily: "cursive",
          }}
        >
          <h3>${item.price}</h3>
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
            onClick={() => item.quantity > 1 && updateUserCartQuantity(item.id)}
          >
            <RemoveIcon
              style={{
                display: "flex",
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
          <button onClick={() => updateUserCartQuantity(item.id, true)}>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 700,
            fontSize: "2.25rem",
            fontFamily: "cursive",
          }}
        >
          ${round(item.price * item.quantity, 2)}
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
          <button type="button" onClick={() => removeUserCart(item.id)}>
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
        minHeight: 800,

        padding: "0 4rem",

        background: "var(--light-grey-color-shade)",
      }}
    >
      <div>
        <div
          style={{
            display: "grid",
            marginBottom: "2rem",
            justifyContent: "center",
            textAlign: "center",
            gridTemplateColumns: "360px 1fr 1fr 1fr auto",
            borderBottom: "1px solid black",
            fontSize: "3rem",
            textTransform: "uppercase",
            fontFamily: "serif",
          }}
        >
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
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
              Subtotal:
              <span>${totalPrice}</span>
            </h3>
            <h3>
              Shipping Fee:<span>Free</span>
            </h3>
            <hr />
            <h2 style={{ marginBottom: "1rem" }}>
              Order Total: <span>${totalPrice}</span>
            </h2>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Cart;
