import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { Flex, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import APP_ROUTES from "app/constant/app_routes";
import COLOR from "app/constant/color";
function Footer() {
  const { isMobile, isMobileOrTablet } = useResponsive();
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Flex direction="column" w="full" marginTop={isMobile ? "10rem" : "20rem"}>
      <Container
        style={{
          display:
            router.pathname === APP_ROUTES.CART ||
            router.pathname === APP_ROUTES.SIGNIN ||
            router.pathname === APP_ROUTES.SIGNUP ||
            router.pathname === APP_ROUTES.PRODUCT.INDEX ||
            router.pathname === "/admin" ||
            router.pathname === "/checkout" ||
            // router.pathname === "/profile" ||
            router.pathname === APP_ROUTES.ABOUT
              ? "none"
              : "flex",
        }}
      >
        <Flex
          display={isMobile ? "column" : isMobileOrTablet ? "grid" : "grid"}
          gridTemplateColumns={isMobileOrTablet ? "1fr 1fr" : "1fr 1fr 1fr 1fr"}
          mb="3rem"
          justifyContent="space-between"
          width="full"
          gap="2rem"
        >
          <Flex
            textAlign={
              isMobile ? "center" : isMobileOrTablet ? "left" : "center"
            }
            direction="column"
            h={isMobile ? "200px" : "full"}
            w="full"
            lineHeight="1.8"
          >
            <Text variant="h5" fontWeight="700" fontSize="2.1rem">
              chubedan.netlify.app
            </Text>
            <Text
              mt="1rem"
              textAlign="center"
              whiteSpace={isMobile ? "break-spaces" : "nowrap"}
              variant="h1"
            >
              {t("thank_you_for_shopping_with_us_your_order_is_on_the_way")}
            </Text>
            <Text variant="h1">{t("have_a_wonderful_day!")}</Text>
            <Flex
              mt="1rem"
              direction="row"
              cursor="pointer"
              gap="1rem"
              textAlign="center"
              justifyContent={
                isMobile ? "center" : isMobileOrTablet ? "left" : "center"
              }
            >
              <Link href="https://www.facebook.com/profile.php?id=100004517205574">
                <Tooltip label="NgocHieu" placement="top">
                  <FacebookIcon
                    style={{ width: "23px", height: "23px", fill: COLOR.fb }}
                  />
                </Tooltip>
              </Link>
              <Link href="https://www.instagram.com/hieucollection___/">
                <Tooltip label="hieucollection" placement="top">
                  <InstagramIcon
                    style={{ width: "23px", height: "23px", fill: COLOR.ins }}
                  />
                </Tooltip>
              </Link>
              <Link href="https://github.com/hieunotorious">
                <Tooltip label="hieunotorious" placement="top">
                  <GitHubIcon
                    style={{ width: "23px", height: "23px", fill: COLOR.black }}
                  />
                </Tooltip>
              </Link>
              <Link href="https://www.linkedin.com/in/hi%E1%BA%BFu-ng%E1%BB%8Dc-90b51924a/">
                <Tooltip label="HieuNgoc" placement="top">
                  <LinkedInIcon
                    style={{
                      width: "23px",
                      height: "23px",
                      fill: COLOR.LinkedIn,
                    }}
                  />
                </Tooltip>
              </Link>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            alignItems="center"
            h={isMobile ? "110px" : "full"}
            w="full"
            lineHeight="1.5"
          >
            <Text
              variant="h5"
              fontWeight="700"
              fontSize="2.1rem"
              textAlign={isMobile ? "center" : "left"}
            >
              {t("contact_us")}
            </Text>
            <Tooltip label="hieumn2001@gmail.com" placement="top">
              <Link href="mailto:hieumn2001@gmail.com" legacyBehavior>
                <Text mt="1rem" variant="h1">
                  hieumn2001@gmail.com
                </Text>
              </Link>
            </Tooltip>
            <Tooltip label="0912590467" placement="top">
              <a href="tel:0912590467">
                <Text variant="h1"> Phone: (+84) 912590467</Text>
              </a>
            </Tooltip>
          </Flex>
          <Flex
            direction="column"
            h={isMobile ? "150px" : "full"}
            w="full"
            lineHeight="1.5"
            alignItems={
              isMobile ? "center" : isMobileOrTablet ? "left" : "center"
            }
          >
            <Text
              variant="h5"
              fontWeight="700"
              fontSize="2.1rem"
              whiteSpace="nowrap"
              // textAlign={isMobile ? "center" : "left"}
            >
              {t("store_at")}
            </Text>
            <Text mt="1rem" variant="h1">
              Target
            </Text>
            <Text variant="h1">Amazon</Text>
            <Text variant="h1">Walmart</Text>
          </Flex>

          <Flex
            direction="column"
            h={isMobile ? "110px" : "full"}
            lineHeight="1.5"
            alignItems="center"
          >
            <Text
              variant="h5"
              fontWeight="700"
              fontSize="2.1rem"
              whiteSpace="nowrap"
              textAlign={isMobile ? "center" : "left"}
            >
              {t("payment")}
            </Text>
            <Flex
              direction={isMobile ? "row" : "row"}
              h={isMobile ? "110px" : "60px"}
              w="full"
              justifyContent="center"
            >
              <Flex>
                <Image
                  width={52}
                  height={32}
                  src="/images/master_card.svg"
                  alt=""
                />
              </Flex>
              <Flex>
                <Image
                  style={{ marginLeft: "0.1rem" }}
                  width={52}
                  height={32}
                  src="/images/visa.svg"
                  alt=""
                />
              </Flex>
              <Flex>
                <Image
                  style={{ marginLeft: "0.1rem" }}
                  width={52}
                  height={32}
                  src="/images/cirrus.svg"
                  alt=""
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Flex
        style={{
          background: "black",
          padding: "2rem 0",
          minHeight: "6.7rem",
          justifyContent: "center",

          // marginTop: isMobile ? "none" : "2rem",
        }}
      >
        <Flex
          style={{
            // marginLeft: isMobile ? "none" : "300px",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "1.5rem",
              opacity: 1,
              textAlign: "center",
            }}
          >
            {t(
              "copyright_all_right_reserved_designed_and_developed_by_Ma_Ngoc_Hieu"
            )}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
