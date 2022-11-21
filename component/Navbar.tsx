import React, { useEffect, useState } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Man3Icon from "@mui/icons-material/Man3";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
function Navbar() {
  const [isCategory, setIscategory] = useState("");
  const { t } = useTranslation();

  const onToggleCategory = () => {
    if (isCategory === "") {
      setIscategory("show-category-items");
    } else {
      setIscategory("");
    }
  };

  const [itCategory, setItcategory] = useState("");
  const navShowBtn = () => {
    if (itCategory === "") {
      setItcategory("side-navbar-show");
    }
  };

  const navHideBtn = () => {
    setItcategory("");
  };

  return (
    <nav className="navbar bg-brown flex">
      <div className="container flex">
        <div className="toggler-and-category bg-brown text-white flex">
          <button
            type="button"
            onClick={navShowBtn}
            className="btn navbar-show-btn text-white"
          >
            <i className="flex">
              <MenuIcon style={{ fill: "white", fontSize: "30" }} />{" "}
            </i>
          </button>
          <div
            className="category-list"
            style={{ display: "flex", alignItems: "center" }}
          ></div>

          <ul
            id="side-navbar"
            className={`bg-white text-uppercase ${itCategory} ${itCategory}`}
          >
            <button
              type="button"
              onClick={navHideBtn}
              className="btn navbar-hide-btn text-dark"
            >
              <i className="flex">
                <CloseIcon style={{ fill: "black", fontSize: "30" }} />{" "}
              </i>
            </button>

            <li className="nav-item">
              <Link href="/" className="nav-link active-link">
                <span style={{ color: "black" }} className="nav-link-text">
                  Home
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link">
                <span style={{ color: "black" }} className="nav-link-text">
                  About
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/product" className="nav-link">
                <span style={{ color: "black" }} className="nav-link-text">
                  Shop
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse flex">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item">
              <Link href="/" className="nav-link active-link">
                <span style={{ fontWeight: 900 }} className="nav-link-text">
                  Home
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link">
                <span className="nav-link-text">About</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/product" className="nav-link">
                <span className="nav-link-text">Shop</span>
              </Link>
            </li>
          </ul>
          <div style={{ display: "flex", marginLeft: "8rem" }}>
            <Link href="/cart" className="btn text-white">
              <i className="flex">
                <ShoppingCartIcon style={{ fill: "black", fontSize: "20" }} />{" "}
              </i>
            </Link>
            <Link
              href="/signin"
              style={{ margin: "5rem" }}
              className="btn text-white"
            >
              <i className="flex">
                <Man3Icon style={{ fill: "black", fontSize: "20" }} />{" "}
              </i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
