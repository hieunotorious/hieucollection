import { useContext, useEffect, useState, useMemo } from "react";
import { Gender, UpdateUser } from "../../api/auth/models/user";

import { AuthContext } from "app/context/authContext";

import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";
import { Button, Flex, Text } from "@chakra-ui/react";
import { round } from "lodash";
import { useResponsive } from "app/hooks/useResponsive";
import Link from "next/link";

function Checkout() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);
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
        background: "white",
        margin: "0 auto",
        minHeight: isMobile ? 610 : 795,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {user ? (
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

              <Button
                style={{
                  borderRadius: " 0.25rem",
                  fontWeight: "300",
                  cursor: "pointer",
                  border: "none",
                  textTransform: "uppercase",
                  width: 275,
                  background: "#3399FF",
                  color: "white",
                }}
                type="submit"
              >
                {t("pay")}
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          <Flex direction="column" alignItems="center">
            <Text
              fontWeight="600"
              fontSize={isMobile ? "4xl" : "5xl"}
              color="#222222"
              fontFamily="'Baloo', serif"
            >
              {t("need_login")}
            </Text>
            <Link href="/signin">
              <Text
                fontSize="15px"
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

export default Checkout;
