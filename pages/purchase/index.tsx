import { Image } from "@chakra-ui/react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Head from "next/head";
function Purchase() {
  return (
    <article style={{ margin: "2rem 0", display: "grid", gap: "3rem" }}>
      <div
        style={{
          background: "white",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1.5fr",
          gap: "6rem",
          alignItems: "center",
          borderRadius: "0.25rem",
          color: "blue",
          letterSpacing: "normal",
          fontWeight: "400",
          fontSize: "1rem",
        }}
      >
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <h4 style={{ textTransform: "uppercase" }}>Order placed</h4>
          <p>date</p>
        </div>
        <div
          style={{
            textTransform: "capitalize",
            display: "grid",
            gap: "0.5rem",
          }}
        >
          <h4 style={{ textTransform: "uppercase" }}>Delivery To</h4>
          <p>name</p>
          <p>phonenumber</p>
          <Head>email</Head>
          <p className="address"></p>
        </div>
        <div
          style={{
            textTransform: "capitalize",
            display: "grid",
            gap: "0.5rem",
          }}
        >
          <h4 style={{ textTransform: "uppercase" }}>Orderid: </h4>
          <p>
            Total bills:
            <span style={{ color: "red", fontWeight: 400 }}></span>
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Status: <LocalShippingIcon style={{ color: "orange" }} />
          </p>
        </div>
      </div>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "600px 1fr 1fr 1fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
            src=""
            alt=""
          />
        </div>
        <p style={{ color: "blue", fontWeight: 400 }}>price</p>
        <p style={{ display: "none" }}>quantity</p>
        <p style={{ display: "none" }}>
          Total:
          <span style={{ color: "blue", fontWeight: 400 }}></span>
        </p>
      </article>
    </article>
  );
}

export default Purchase;
