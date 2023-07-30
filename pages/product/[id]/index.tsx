import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { useRouter } from "next/router";
import { ProductType } from "app/api/auth/models/product";
import { AuthContext } from "../../../context/authContext";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Container from "app/component/Container";
import useTranslation from "next-translate/useTranslation";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Stack,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { getProductId } from "app/services/ProductService";
import { addToCart } from "app/services/CartService";
import Breadcrumb from "app/component/Breadcrumb";
import APP_ROUTES from "app/constant/app_routes";
function ProductId() {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  const { setUser } = useContext(AuthContext);
  const [product, setProduct] = useState<ProductType>();
  const ratingStars = useMemo(
    () => new Array(product?.rating).fill(0),
    [product]
  );

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (router.query.id) {
      const call = async () => {
        const id = router.query.id?.toString() || "";
        const res = await getProductId(id);
        setProduct(res);
      };
      call();
    }
  }, [router]);

  const handleAddCart = async (id: string) => {
    const data = await addToCart(id, quantity);
    if (data) {
      setUser((prevState) => {
        if (prevState) return { ...prevState, cart: data };
        return undefined;
      });
      router.push(APP_ROUTES.CART);
    }
  };

  return (
    product && (
      <Container>
        <Flex
          w="full"
          direction="column"
          title={product?.name || "Product"}
          marginTop="5rem"
        >
          <Breadcrumb
            links={[
              { title: t("home"), href: APP_ROUTES.HOME },
              { title: t("product"), href: APP_ROUTES.PRODUCT.INDEX },
              { title: product?.name || "", href: APP_ROUTES.HOME },
            ]}
            current={product?.name || ""}
          />
          <Stack
            sx={{
              border: "1px solid #EAA234",
              borderRadius: "50px",
              position: "fixed",
              right: isMobile ? "5px" : "10px",
              top: "30%",
              zIndex: "99",
              padding: isMobile ? "10px 5px" : "40px 15px",
              gap: "20px",
            }}
          >
            <Tooltip label="hieumn2001@gmail.com" placement="top">
              <Stack>
                <Link href="mailto:hieumn2001@gmail.com">
                  <Image
                    src="/images/EmailMes.png"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </Link>
              </Stack>
            </Tooltip>

            <Tooltip label="0912590467" placement="top">
              <Stack>
                <Link href="tel:0912590467">
                  <Image
                    src="/images/phoneMes.png"
                    alt=""
                    width="30px"
                    height="30px"
                  />
                </Link>
              </Stack>
            </Tooltip>
            <Tooltip
              label="102 Nguyễn Trãi, Thành Công, Thành phố Buôn Ma Thuột, Đắk Lắk"
              placement="top"
            >
              <Stack>
                <Link href="https://www.google.com/maps/place/102+Nguy%E1%BB%85n+Tr%C3%A3i,+Th%C3%A0nh+C%C3%B4ng,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6865306,108.0361911,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d7a35d6ff99:0x9eae08b73bf3f4df!8m2!3d12.6865306!4d108.038766!16s%2Fg%2F11fsjhqr51?hl=vi-VN&entry=ttu">
                  <Image
                    src="/images/frame.png"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </Link>
              </Stack>
            </Tooltip>
          </Stack>
          <div
            key={product._id}
            style={{
              padding: "2rem",
              minHeight: "950px",
              width: "95%",
              boxSizing: "border-box",
              background: "White",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <Link href={APP_ROUTES.PRODUCT.INDEX}>
                <button>
                  <ArrowBackIcon
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      fontSize: 30,
                    }}
                  />
                </button>
              </Link>
            </div>
            <div
              style={{
                background: "white",
                marginTop: "3rem",
                display: isMobile ? "column" : "grid",
                gridTemplateColumns: " 1fr 1fr",
                gap: "4rem",
                alignItems: " center",
              }}
            >
              <Flex
                position="relative"
                width={isMobile ? 300 : 800}
                height={isMobile ? 240 : 700}
              >
                <Image
                  style={{
                    objectFit: "cover",
                    borderRadius: 16,
                  }}
                  layout="fill"
                  src={product.img}
                  alt=""
                />
              </Flex>

              <form
                style={{
                  alignItems: "center",
                  display: "grid",
                  gap: "2rem",
                }}
              >
                <h2
                  style={{
                    marginTop: "1rem",
                    fontSize: isMobile ? "2rem" : "3rem",
                    borderBottom: "1px solid black",
                    paddingBottom: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  {product.name}
                </h2>
                <div
                  className="ratings test-grey"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? "1rem" : "3rem",
                  }}
                >
                  <div style={{ display: "flex", width: 60 }}>
                    {ratingStars.map((value, index) => {
                      return (
                        <StarIcon
                          key={index}
                          style={{
                            fill: "black",
                            fontSize: isMobile ? "15px" : "20px",
                          }}
                        />
                      );
                    })}
                  </div>
                  <h3
                    style={{
                      marginLeft: " 1rem",
                      color: "var(--grey-3)",
                      fontSize: isMobile ? "1rem" : "2rem",
                    }}
                  >
                    ({product.review} Reviews)
                  </h3>
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "1.25rem" : "2rem",
                  }}
                >
                  <a style={{ fontWeight: "bold" }}>Price: </a>${product.price}
                  {product.sale && (
                    <div>
                      <a style={{ fontWeight: "bold" }}>Sale: </a>$
                      {product.price - product.sale}
                    </div>
                  )}
                </h3>
                <div
                  style={{
                    lineHeight: 2,
                    fontSize: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: isMobile ? "1.25rem" : "2rem",
                    }}
                  >
                    <a style={{ fontWeight: "bold" }}>Description: </a>
                    {product.description}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      color: "var(--grey-3)",
                      fontSize: isMobile ? "1.25rem" : "2rem",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      letterSpacing: " normal",
                      borderBottom: "1px solid black",
                      paddingBottom: "1rem",
                    }}
                    className="brand"
                  >
                    <a style={{ fontWeight: "bold" }}>Brand: </a>
                    {product.brand}
                  </h3>
                </div>
                <div style={{ width: 50, marginLeft: "10px" }}>
                  <NumberInput
                    value={quantity}
                    onChange={(value) => setQuantity(parseInt(value))}
                    min={1}
                    max={100}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "1rem",
                    gap: "1rem",
                  }}
                >
                  <Link style={{ color: "black" }} href="/checkout">
                    <Stack spacing={5} direction="row" align="center">
                      <Button
                        style={{ width: "15rem", height: "3rem" }}
                        onClick={() => {
                          router.push(APP_ROUTES.CART);
                          handleAddCart(product._id);
                        }}
                        colorScheme="blue"
                        size={isMobile ? "md" : "xl"}
                      >
                        {t("buy_now")}
                      </Button>
                    </Stack>
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link style={{ color: "black" }} href={APP_ROUTES.CART}>
                      <Stack spacing={4} direction="row" align="center">
                        <Button
                          style={{ width: "15rem", height: "3rem" }}
                          onClick={() => {
                            router.push(APP_ROUTES.CART);
                            handleAddCart(product._id);
                          }}
                          variant="ghost"
                          colorScheme="blue"
                          size={isMobile ? "md" : "xl"}
                        >
                          {t("add_to_cart")}
                        </Button>
                      </Stack>
                    </Link>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isMobile ? "center" : "left",
                    marginLeft: "5px",
                  }}
                >
                  <FacebookIcon
                    style={{
                      fontSize: "4rem",
                      fill: "#3B5998",
                      cursor: "pointer",
                    }}
                  />
                  <GoogleIcon
                    style={{
                      fontSize: "4rem",
                      fill: "#EA4335",
                      cursor: "pointer",
                    }}
                  />
                  <TwitterIcon
                    style={{
                      fontSize: "4rem",
                      fill: "#1DA1F2",
                      cursor: "pointer",
                    }}
                  />
                  <FavoriteBorderIcon
                    style={{ fontSize: "4rem", fill: "red", cursor: "pointer" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </Flex>
      </Container>
    )
  );
}

export default ProductId;
