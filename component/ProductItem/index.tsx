import { ProductType } from "app/api/auth/models/product";
import { css } from "@emotion/react";
import { useContext } from "react";
import { floor } from "lodash";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup, Button, Flex, Text, Stack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import { AuthContext } from "app/context/authContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToCart } from "app/services/CartService";
import { useResponsive } from "app/hooks/useResponsive";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import APP_ROUTES from "app/constant/app_routes";
const ANIMATION_TIME = 500;

type ProductItemProps = {
  product: ProductType;
  size?: number;
};

const ProductItem = ({ product, size = 200 }: ProductItemProps) => {
  const { t } = useTranslation();
  const { user, setUser } = useContext(AuthContext);
  const { isMobile } = useResponsive();

  const handleAddCart = async (id: string) => {
    if (user) {
      const data = await addToCart(id, 1);
      if (data) {
        setUser((prevState) => {
          if (prevState) return { ...prevState, cart: data };
          return undefined;
        });
      }
    }
    router.push(APP_ROUTES.CART);
  };
  return (
    <Link href={APP_ROUTES.PRODUCT.DETAIL(product._id)}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          background: "white",
          width: size,
          borderRadius: 16,
          marginBottom: 35,
          marginLeft: isMobile ? "none" : 25,
        }}
      >
        <Stack
          w="full"
          h="full"
          position="relative"
          spacing={0}
          _hover={{
            ".hover_item": {
              opacity: 1,
            },
            ".hover_item .button_group": {
              transform: "translateY(0)",
            },
            ".hover_item .icon": {
              transform: "translateY(0)",
              opacity: 1,
            },
          }}
        >
          <Stack w="full" h="full">
            <div
              css={css`
                width: ${size}px;
                height: ${size}px;
                overflow: hidden;
                border-radius: 1rem;
              `}
            >
              <Image
                style={{ transition: `all ${ANIMATION_TIME}ms ease-in-out` }}
                objectFit="cover"
                width={size}
                height={size}
                src={product.img}
                alt=""
              />
            </div>
            <Stack mt="2rem !important">
              <Stack overflow="hidden" textOverflow="ellipsis" h="32px">
                <Text
                  fontWeight={600}
                  fontSize="1rem"
                  width="100%"
                  textAlign="center"
                >
                  {product.name}
                </Text>
              </Stack>

              <Stack direction="row" justifyContent="center">
                <div
                  style={{
                    marginRight: 16,
                    position: "relative",
                    fontWeight: 600,
                  }}
                  css={css`
                    ${(product.sale || product.sale === 0) &&
                    ` &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 2px;
                width: 100%;
                background-color: var(--dark-grey-color);
                top: 50%;
                transform: translateY(-50%);
              }`}
                  `}
                >
                  {product.price}$
                </div>
                {(product.sale || product.sale === 0) && (
                  <div>{floor(product.price - product.sale, 2)}$</div>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            position="absolute"
            w="full"
            h="full"
            className="hover_item"
            opacity={0}
            transition={`all ${ANIMATION_TIME}ms ease-in-out`}
            bg="white"
            overflow="hidden"
          >
            <Image
              style={{ transition: `all ${ANIMATION_TIME}ms ease-in-out` }}
              objectFit="cover"
              width={size}
              height={size}
              src="/images/logo.png"
              alt=""
            />
            <Stack
              overflow="hidden"
              textOverflow="ellipsis"
              mt="2rem !important"
              h="32px"
            >
              <Text fontWeight={600} fontSize="1rem" textAlign="center">
                {product.name}
              </Text>
            </Stack>

            <ButtonGroup
              alignItems="center"
              justifyContent="center"
              transform="translateY(30px)"
              transition={`all ${ANIMATION_TIME}ms ease-in-out`}
              className="button_group"
            >
              <Link href="/checkout">
                <Button variant="solid" colorScheme="blue">
                  {t("buy_now")}
                </Button>
              </Link>
              <Link href={APP_ROUTES.CART}>
                <Button
                  onClick={() => handleAddCart(product._id)}
                  variant="ghost"
                  colorScheme="blue"
                  size="md"
                >
                  {t("add_to_cart")}
                </Button>
              </Link>
            </ButtonGroup>
            <Stack
              mt="0 !important"
              position="absolute"
              right="0"
              top="0"
              h="50%"
              w="30px"
              sx={{
                ".icon": {
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#FFD600",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "translateY(-50px)",
                  opacity: 0,
                },
              }}
              spacing={4}
            >
              <Stack
                className="icon"
                transition={`all ${ANIMATION_TIME + 200}ms ease-in-out`}
              >
                <RemoveRedEyeIcon style={{ color: "white" }} />
              </Stack>
              <Stack
                className="icon"
                transition={`all ${ANIMATION_TIME + 300}ms ease-in-out`}
              >
                <FavoriteBorderIcon style={{ color: "white" }} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </Link>
  );
};

export default ProductItem;
