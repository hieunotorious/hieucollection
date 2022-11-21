import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/router";
function Footer() {
  const router = useRouter();

  return (
    <nav
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display:
            router.pathname === "/cart" ||
            router.pathname === "/signin" ||
            router.pathname === "/signup" ||
            router.pathname === "/product"
              ? "none"
              : "block",
        }}
        className="container"
      >
        <div className="footer-content py grid text-center">
          <div className="footer-item">
            <h3>chubedan.netlify.app</h3>
            <p className="text">
              Thank you for shopping with us your order is on the way. Have a
              wonderful day!
            </p>
            <ul className="social-links flex">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100004517205574"
                  className="flex"
                >
                  <FacebookIcon style={{ fill: "#4F4F4F" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hieucollection___/"
                  className="flex"
                >
                  <InstagramIcon style={{ fill: "#4F4F4F" }} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MNgcHiu2" className="flex">
                  <TwitterIcon style={{ fill: "#4F4F4F" }} />
                </a>
              </li>
              <li>
                <a href="https://github.com/hieunotorious" className="flex">
                  <GitHubIcon style={{ fill: "#4F4F4F" }} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h3>Contact Us</h3>
            <p className="text">Email: hieumn2001@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-end bg-dark">
        <div className="container grid">
          <p className="text text-white text-center">
            &copy; Copyright 2022. All Right Reserved. Designed and Developed by
            Ma Ngoc Hieu
          </p>
          <div className="flex payment">
            <div
              className=""
              style={{
                width: 52,
                height: 32,
                display: "flex",
              }}
            >
              <Image
                objectFit="contain"
                width="100%"
                height="100%"
                src="/images/pay_3.png"
                alt=""
              />
            </div>

            <div
              className=""
              style={{
                width: 52,
                height: 32,
                display: "flex",
                marginLeft: "1rem",
              }}
            >
              <Image
                objectFit="contain"
                width="100%"
                height="100%"
                src="/images/pay_4.png"
                alt=""
              />
            </div>

            <div
              className=""
              style={{
                width: 52,
                height: 32,
                display: "flex",
                marginLeft: "1rem",
              }}
            >
              <Image
                objectFit="contain"
                width="100%"
                height="100%"
                src="/images/pay_5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
