import React, { useEffect, useState } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Man3Icon from "@mui/icons-material/Man3";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isCategory, setIscategory] = useState("");

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
    <div className="holder">
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
            >
              <span></span>
              <button
                type="button"
                onClick={onToggleCategory}
                className="btn category-toggler-btn text-white"
              >
                <i className="flex">
                  <ExpandMoreIcon style={{ fill: "white", fontSize: "40" }} />{" "}
                </i>
              </button>
            </div>

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
                <Link href="/shop" className="nav-link">
                  <span style={{ color: "black" }} className="nav-link-text">
                    Shop
                  </span>
                </Link>
              </li>
            </ul>

            <ul id="category-list-items" className={`bg-white ${isCategory}`}>
              <li>
                <a href="#">MCFARLANE</a>
              </li>
              <li>
                <a href="#">MARVEL LEGEND</a>
              </li>
              <li>
                <a href="#">SHF</a>
              </li>
              <li>
                <a href="#">DC COLLECTIBLES</a>
              </li>
              <li>
                <a href="#">MATTEL</a>
              </li>
              <li>
                <a href="#">FIGMA</a>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse flex">
            <ul className="navbar-nav text-uppercase">
              <li className="nav-item">
                <Link href="/" className="nav-link active-link">
                  <span className="nav-link-text">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  <span className="nav-link-text">About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/shop" className="nav-link">
                  <span className="nav-link-text">Shop</span>
                </Link>
              </li>
            </ul>
            <div className="account-info">
              <a href="" className="btn text-white">
                <i className="flex">
                  <ShoppingCartIcon style={{ fill: "black", fontSize: "20" }} />{" "}
                </i>
              </a>
              <a href="signin" className="btn text-white">
                <i className="flex">
                  <Man3Icon style={{ fill: "black", fontSize: "20" }} />{" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
