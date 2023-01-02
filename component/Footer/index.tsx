import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
function Footer() {
  const { isMobile } = useResponsive();
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Flex direction="column" w="full">
      <Container
        style={{
          display:
            router.pathname === "/cart" ||
            router.pathname === "/signin" ||
            router.pathname === "/signup" ||
            router.pathname === "/product" ||
            router.pathname === "/admin" ||
            router.pathname === "/checkout" ||
            router.pathname === "/profile" ||
            router.pathname === "/about"
              ? "none"
              : "flex",
        }}
      >
        <Flex
          display={isMobile ? "column" : "grid"}
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          textAlign="left"
          mb="6rem"
          gap="20rem"
        >
          <Flex
            textAlign={isMobile ? "center" : "left"}
            direction="column"
            h={isMobile ? "200px" : "full"}
            w="full"
            lineHeight="1.8"
          >
            <Text fontWeight="700" fontSize="2.1rem">
              chubedan.netlify.app
            </Text>
            <Text
              mt="1rem"
              textAlign={isMobile ? "center" : "left"}
              whiteSpace={isMobile ? "break-spaces" : "nowrap"}
            >
              {t("thank_you_for_shopping_with_us_your_order_is_on_the_way")}
            </Text>
            <Text>{t("have_a_wonderful_day!")}</Text>
            <Flex
              mt="1rem"
              direction="row"
              cursor="pointer"
              gap="1rem"
              textAlign="center"
              justifyContent={isMobile ? "center" : "none"}
            >
              <Link href="https://www.facebook.com/profile.php?id=100004517205574">
                <FacebookIcon
                  style={{ width: "23px", height: "23px", fill: "3B5998" }}
                />
              </Link>
              <Link href="https://www.instagram.com/hieucollection___/">
                <InstagramIcon
                  style={{ width: "23px", height: "23px", fill: "#BC2A8D" }}
                />
              </Link>
              <Link href="https://github.com/hieunotorious">
                <GitHubIcon
                  style={{ width: "23px", height: "23px", fill: "#000000" }}
                />
              </Link>

              <TwitterIcon
                style={{ width: "23px", height: "23px", fill: "#1DA1F2" }}
              />
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
              fontWeight="700"
              fontSize="2.1rem"
              textAlign={isMobile ? "center" : "left"}
            >
              {t("contact_us")}
            </Text>
            <Text mt="1rem">hieumn2001@gmail.com</Text>
            <Text> Phone: (+84) 912590467</Text>
          </Flex>
          <Flex
            direction="column"
            h={isMobile ? "150px" : "full"}
            w="full"
            lineHeight="1.5"
            alignItems="center"
          >
            <Text
              fontWeight="700"
              fontSize="2.1rem"
              whiteSpace="nowrap"
              textAlign={isMobile ? "center" : "left"}
            >
              {t("store_at")}
            </Text>
            <Text mt="1rem  ">Target</Text>
            <Text>Amazon</Text>
            <Text>Walmart</Text>
          </Flex>

          <Flex
            direction="column"
            h={isMobile ? "110px" : "full"}
            w="full"
            lineHeight="1.5"
            alignItems="center"
          >
            <Text
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
          marginTop: isMobile ? "none" : "2rem",
        }}
      >
        <Flex
          style={{
            marginLeft: isMobile ? "none" : "300px",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "1.5rem",
              opacity: 1,
              marginLeft: isMobile ? "none" : "300px",
              textAlign: "center",
            }}
          >
            {t(
              "copyright_2022_all_right_reserved_designed_and_developed_by_Ma_Ngoc_Hieu"
            )}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
