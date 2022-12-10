import React, { useContext } from "react";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SellIcon from "@mui/icons-material/Sell";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { css } from "@emotion/react";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../../context/authContext";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
function AdminNav() {
  const {
    user,
    updateUserCartQuantity,
    removeUserCart,
    removeAllCart,
    setUser,
  } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <div
      style={{
        borderRight: "0.5px solid rgb(230, 227, 227)",
        minHeight: "100vh",
        backgroundColor: "white",
        width: 200,
      }}
    >
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr style={{ height: 0, border: "0.5px solid rgb(230, 227, 227)" }} />
      <div style={{ paddingLeft: "10px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "#999",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            {t("main")}
          </p>
          <Link href="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <span style={{ cursor: "pointer" }}>Dashboard</span>
            </li>
          </Link>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "#999",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            {t("product")}
          </p>
          <Link href="/admin/users" style={{ textDecoration: "none" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                cursor: "pointer",
              }}
              css={css`
                hover: 
                     background-color: #ece8ff;
              `}
            >
              <PersonOutlineIcon style={{ fontSize: "18px", color: "black" }} />
              <span> {t("users")}</span>
            </li>
          </Link>
          <Link href="/admin/products" style={{ textDecoration: "none" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                cursor: "pointer",
              }}
              css={css`
                hover: 
                     background-color: #ece8ff;
              `}
            >
              <InventoryIcon style={{ fontSize: "18px", color: "black" }} />
              <span> {t("product")}</span>
            </li>
          </Link>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <LocalShippingIcon style={{ fontSize: "18px", color: "black" }} />
            <span>{t("delivery")}</span>
          </li>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "#999",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            {t("useful")}
          </p>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <InsertChartIcon style={{ fontSize: "18px", color: "black" }} />
            <span>{t("stats")}</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <NotificationsNoneIcon
              style={{ fontSize: "18px", color: "black" }}
            />
            <span>{t("notifications")}</span>
          </li>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "#999",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            {t("service")}
          </p>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <CommentIcon style={{ fontSize: "18px", color: "black" }} />
            <span>{t("client_comment")}</span>
          </li>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "#999",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            {t("user")}
          </p>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <AccountCircleIcon style={{ fontSize: "18px", color: "black" }} />
            <span>{t("profile")}</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
            css={css`
                hover: 
                     background-color: #ece8ff;
              `}
          >
            <ExitToAppIcon style={{ fontSize: "20px", color: "black" }} />
            <Link href={"/"}>
              <Button onClick={() => setUser(undefined)} variant="unstyled">
                {t("logout")}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
