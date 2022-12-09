import { css } from "@emotion/react";
import Link from "next/link";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import React, { useState, useContext } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { AuthContext } from "../../context/authContext";
import {
  Button,
  Flex,
  Grid,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
function Nav() {
  const {
    user,
    updateUserCartQuantity,
    removeUserCart,
    removeAllCart,
    setUser,
  } = useContext(AuthContext);

  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { t } = useTranslation();
  const handleChangeLanguage = async (lang: string) => {
    await setLanguage(lang);
    setIsOpenLanguage(false);
  };
  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        top: "0px",
        left: "0px",
        width: "var(--chakra-sizes-full)",
        height: "72px",
        zIndex: 99,
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90vw",
          margin: "0px auto",
        }}
        css={css`
          -webkit-box-align: center;
          -webkit-box-pack: justify;
        `}
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          css={css`
            -webkit-box-align: center;
          `}
        >
          <div style={{ display: "flex", marginLeft: "3rem" }}>
            <Link href="/">
              <span
                style={{
                  color: "black",
                  cursor: "pointer",
                  marginRight: "2rem",
                  fontWeight: "bold",
                }}
              >
                {t("home")}
              </span>
            </Link>
            <Link href="/about">
              <span
                style={{
                  color: "black",
                  cursor: "pointer",
                  marginRight: "2rem",
                }}
              >
                {t("about")}
              </span>
            </Link>
            <Link href="/product">
              <span
                style={{
                  color: "black",
                  cursor: "pointer",
                  marginRight: "2rem",
                }}
              >
                {t("product")}
              </span>
            </Link>

            <Flex justifyContent="flex-end" alignItems="center">
              <Popover>
                <PopoverTrigger>
                  <Button>
                    <AccountBoxIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {user ? (
                    <>
                      <Link href="/profile">
                        <Button variant="unstyled"> {t("profile")}</Button>
                      </Link>

                      <Link href="/cart">
                        <Button variant="unstyled">
                          <ShoppingCartCheckoutIcon
                            style={{ color: "black" }}
                          />
                        </Button>
                      </Link>
                      <Link href="/">
                        <Button
                          onClick={() => setUser(undefined)}
                          variant="unstyled"
                        >
                          {t("logout")}
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link href="/signin">
                      <Button variant="unstyled"> {t("login")}</Button>
                    </Link>
                  )}
                </PopoverContent>
              </Popover>

              <Popover
                isOpen={isOpenLanguage}
                onClose={() => setIsOpenLanguage(false)}
              >
                <PopoverTrigger>
                  <Button
                    display="flex"
                    w="30px"
                    h="30px"
                    variant="unstyled"
                    minWidth={0}
                    p="4px"
                    onClick={() => setIsOpenLanguage(true)}
                  >
                    <LanguageIcon style={{ color: "black" }} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent w="120px">
                  <Button
                    variant="unstyled"
                    onClick={() => handleChangeLanguage("en")}
                  >
                    English
                  </Button>
                  <Button
                    variant="unstyled"
                    onClick={() => handleChangeLanguage("vi")}
                  >
                    Tiếng Việt
                  </Button>
                </PopoverContent>
              </Popover>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
