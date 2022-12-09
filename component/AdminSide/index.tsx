import React from "react";
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
function AdminNav() {
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
            MAIN
          </p>
          <Link href="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#7451f8",
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
            LISTS
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
              <PersonOutlineIcon
                style={{ fontSize: "18px", color: "#7451f8" }}
              />
              <span>Users</span>
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
              <InventoryIcon style={{ fontSize: "18px", color: "#7451f8" }} />
              <span>Products</span>
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
            <CreditCardIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Orders</span>
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
            <LocalShippingIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Delivery</span>
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
            USEFUL
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
            <InsertChartIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Stats</span>
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
              style={{ fontSize: "18px", color: "#7451f8" }}
            />
            <span>Notifications</span>
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
            SERVICE
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
            <CommentIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Client comment</span>
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
            USER
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
            <AccountCircleIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Profile</span>
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
            <ExitToAppIcon style={{ fontSize: "18px", color: "#7451f8" }} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
