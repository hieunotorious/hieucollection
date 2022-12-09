import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
function Footer() {
  const router = useRouter();
  const { t } = useTranslation();
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
            router.pathname === "/product" ||
            router.pathname === "/admin"
              ? "none"
              : "block",
        }}
        className="container"
      >
        <div className="footer-content py grid text-center">
          <div className="footer-item">
            <h3>chubedan.netlify.app</h3>
            <p className="text">
              {t(
                "thank_you_for_shopping_with_us_your_order_is_on_the_way_have_a_wonderful_day!"
              )}
            </p>
            <ul className="social-links flex">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100004517205574"
                  className="flex"
                >
                  <FacebookIcon style={{ fill: "3B5998" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hieucollection___/"
                  className="flex"
                >
                  <InstagramIcon style={{ fill: "#BC2A8D" }} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MNgcHiu2" className="flex">
                  <TwitterIcon style={{ fill: "#1DA1F2" }} />
                </a>
              </li>
              <li>
                <a href="https://github.com/hieunotorious" className="flex">
                  <GitHubIcon style={{ fill: "#000000" }} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h3>{t("contact_us")}</h3>
            <p className="text">Email: hieumn2001@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-end bg-dark">
        <div className="container grid">
          <p style={{ color: "white" }} className="text text-white text-center">
            {t(
              "copyright_2022_all_right_reserved_designed_and_developed_by_Ma_Ngoc_Hieu"
            )}
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
