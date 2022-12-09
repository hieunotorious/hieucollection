import { blue } from "@mui/material/colors";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { userlist } from "../../api/auth/data";
import { Gender, UpdateUser, User } from "../../api/auth/models/user";
import { css } from "@emotion/react";
import { Password } from "@mui/icons-material";
import { AuthContext } from "app/context/authContext";
import { info } from "console";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { Select, Input } from "@chakra-ui/react";
import { round } from "lodash";

function Checkout() {
  const [data, setData] = useState(userlist);

  const { t } = useTranslation();
  const { user, updateProfile } = useContext(AuthContext);
  const [tempuser, setTempUser] = useState<UpdateUser>({
    username: "",
    dob: "",
    phonenumber: "",
    address: "",
    displayName: "",
    gender: Gender.other,
  });
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
  const router = useRouter();
  const { createUser } = useContext(AuthContext);
  const submitForm = (event: any) => {
    event.preventDefault();
    updateProfile(tempuser);
  };

  useEffect(() => {
    setTempUser({
      username: user?.username ?? "",
      dob: user?.dob ?? "",
      phonenumber: user?.phonenumber ?? "",
      address: user?.address ?? "",
      displayName: user?.displayName ?? "",
      gender: user?.gender ?? Gender.other,
    });
  }, [user]);

  return (
    <div
      style={{
        background: "var(--light-grey-color-shade)",
        margin: "0 auto",
        minHeight: " 900px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <div
          style={{
            padding: "1.25rem",
            borderRadius: "0.5rem",
            border: " 1px solid black",
            display: "grid",
            gap: "1rem",
            marginTop: " 4rem",
            width: "300px",
            background: "white",
          }}
        >
          <h1 style={{ textAlign: "center" }}> {t("checkout")}</h1>
          <label style={{}}> {t("Email")}</label>
          <form onSubmit={submitForm}>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
                value={tempuser.username}
                onChange={(event) => {
                  setTempUser((prevState) => ({
                    ...prevState,
                    username: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <label style={{}}> {t("displayname")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
                value={tempuser.displayName}
                onChange={(event) => {
                  setTempUser((prevState) => ({
                    ...prevState,
                    displayName: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <label style={{}}> {t("phonenumber")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
                value={tempuser.phonenumber}
                onChange={(event) => {
                  setTempUser((prevState) => ({
                    ...prevState,
                    phonenumber: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <label style={{}}> {t("address")}</label>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
                value={tempuser.address}
                onChange={(event) => {
                  setTempUser((prevState) => ({
                    ...prevState,
                    address: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>
            <label style={{ marginTop: "2rem" }}>
              {t("subtotal")}:<span>${totalPrice}</span>
            </label>

            <input
              style={{
                borderRadius: " 0.25rem",
                fontWeight: "300",
                transition: " all .3s ease-in-out",
                cursor: "pointer",
                border: "none",
                textTransform: "uppercase",
                width: 275,
              }}
              type="submit"
              value={t("pay")}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
