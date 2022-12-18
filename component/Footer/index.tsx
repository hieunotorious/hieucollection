import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { css } from "@emotion/react";
import { useResponsive } from "app/hooks/useResponsive";
function Footer() {
  const { isMobile, isTabletOrLaptop, isDesktop } = useResponsive();
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <nav
      style={{
        width: isMobile ? "100%" : "100%",
        height: "100%",
        marginTop: "200px",
      }}
    >
      <Container
        style={{
          display:
            router.pathname === "/cart" ||
            router.pathname === "/signin" ||
            router.pathname === "/signup" ||
            router.pathname === "/product" ||
            router.pathname === "/admin" ||
            router.pathname === "/checkout" ||
            router.pathname === "/profile"
              ? "none"
              : "flex",
        }}
      ></Container>

      <div
        style={{
          background: "black",
          minHeight: "6.7rem",
          padding: "2rem 0",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: isMobile ? "column" : "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "auto 330px",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              opacity: 1,
              marginLeft: isMobile ? "100px" : "300px",
            }}
          >
            {t(
              "copyright_2022_all_right_reserved_designed_and_developed_by_Ma_Ngoc_Hieu"
            )}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              height: "32px",
              marginRight: "200px",
            }}
          >
            <div
              className=""
              style={{
                width: 52,
                height: 32,
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
              style={{
                width: 52,
                height: 32,

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
              style={{
                width: 52,
                height: 32,

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
