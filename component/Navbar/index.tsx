import {
  Button,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Role } from "app/api/auth/models/user";
import APP_ROUTES from "app/constant/app_routes";
import COLOR from "app/constant/color";
import { useResponsive } from "app/hooks/useResponsive";
import { logout } from "app/services/AuthService";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Container from "../Container";
function Nav() {
  const router = useRouter();
  const { isMobile, isMobileOrTablet, isTabletOrLaptop, isDesktop } =
    useResponsive();
  const { user, setUser } = useContext(AuthContext);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { t } = useTranslation();
  const handleChangeLanguage = async (lang: string) => {
    await setLanguage(lang);
    setIsOpenLanguage(false);
  };

  const handleLogout = async () => {
    const data = await logout();
    if (data.success) {
      setUser(undefined);
      localStorage.clear();
    }
  };

  return (
    <Flex
      direction="column"
      h="12rem"
      position="sticky"
      top="0"
      zIndex={99}
      paddingTop={isMobile ? "0" : "3rem"}
      bg={COLOR.white}
    >
      <Container
        display={
          isMobile
            ? "flex"
            : isMobileOrTablet
            ? "flex"
            : isTabletOrLaptop
            ? "flex"
            : "none"
        }
        h="48px"
        justifyContent="space-between"
        alignItems="center"
        background="b5def2"
        mt={isMobile ? "0" : "1rem"}
      >
        <Flex w="full" h="2rem" background="b5def2">
          <Text variant="h4_mobile">{t("welcome_to_our_online_store!")}</Text>
        </Flex>
        <Flex>
          <Popover
            isOpen={isOpenLanguage}
            onClose={() => setIsOpenLanguage(false)}
          >
            <PopoverTrigger>
              <Button
                display="flex"
                w="30px"
                h={isMobile ? "30px" : "1px"}
                variant="unstyled"
                minWidth={0}
                p="4px"
                onClick={() => setIsOpenLanguage(true)}
              >
                <LanguageIcon style={{ color: COLOR.black }} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="120px">
              <Button
                variant="unstyled"
                onClick={() => handleChangeLanguage("en")}
              >
                English
              </Button>
              <Button
                variant="unstyled"
                onClick={() => handleChangeLanguage("vi")}
              >
                Tiếng Việt
              </Button>
            </PopoverContent>
          </Popover>
        </Flex>
      </Container>
      <Flex
        w="full"
        h={isMobile ? "60px" : "50px"}
        background={
          isMobile
            ? `linear-gradient(180deg, ${COLOR.primary} 0%, ${COLOR.white} 100%)`
            : isMobileOrTablet
            ? `linear-gradient(180deg, ${COLOR.primary} 0%, ${COLOR.white} 100%)`
            : isTabletOrLaptop
            ? `linear-gradient(180deg, ${COLOR.primary} 0%, ${COLOR.white} 100%)`
            : "#FFFFFF"
        }
        alignItems="center"
      >
        <Container>
          <Flex
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Flex w="full">
              {isMobileOrTablet || isTabletOrLaptop ? (
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  w="full"
                >
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      variant="outline"
                      icon={<MenuIcon />}
                    />
                    <MenuList>
                      <Link href={APP_ROUTES.HOME}>
                        <Text paddingX="1rem" variant="h4_mobile">
                          {t("home")}
                        </Text>
                      </Link>
                      <Link href={APP_ROUTES.ABOUT}>
                        <Text paddingX="1rem" variant="h4_mobile">
                          {t("about")}
                        </Text>
                      </Link>
                      <Link href={APP_ROUTES.PRODUCT.INDEX}>
                        <Text paddingX="1rem" variant="h4_mobile">
                          {t("product")}
                        </Text>
                      </Link>
                    </MenuList>
                  </Menu>

                  <Popover>
                    <PopoverTrigger>
                      <Button>
                        <AccountBoxIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent w="100px">
                      {user ? (
                        <>
                          {user.role === Role.admin && (
                            <Link href="/admin">
                              <Text paddingX="1rem" variant="h4_mobile">
                                {t("Admin")}
                              </Text>
                            </Link>
                          )}

                          <Link href={APP_ROUTES.PROFILE}>
                            <Text paddingX="1rem" variant="h4_mobile">
                              {t("profile")}
                            </Text>
                          </Link>

                          <Link href={APP_ROUTES.CART}>
                            <Text paddingX="1rem" variant="h4_mobile">
                              <ShoppingCartCheckoutIcon
                                style={{ color: COLOR.black }}
                              />
                            </Text>
                          </Link>
                          <Link href={APP_ROUTES.HOME}>
                            <Text
                              onClick={() => handleLogout()}
                              variant="h4_mobile"
                              paddingX="1rem"
                            >
                              {t("logout")}
                            </Text>
                          </Link>
                        </>
                      ) : (
                        <Link href={APP_ROUTES.SIGNIN}>
                          <Text paddingX="1rem" variant="h4_mobile">
                            {t("login")}
                          </Text>
                        </Link>
                      )}
                    </PopoverContent>
                  </Popover>
                </Flex>
              ) : (
                <Container>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    // gap={isMobileOrTablet ? "15rem" : "25rem"}
                    width="full"
                  >
                    <Image
                      src="/images/logo.png"
                      alt=""
                      width="150px"
                      height="150px"
                    />
                    {user ? (
                      <Flex gap="15rem">
                        <Link href={APP_ROUTES.HOME}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.HOME
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("home")}
                          </Text>
                        </Link>
                        <Link href={APP_ROUTES.PRODUCT.INDEX}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.PRODUCT.INDEX
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("product")}
                          </Text>
                        </Link>
                        <Link href={APP_ROUTES.CONTACT}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.CONTACT
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("contact")}
                          </Text>
                        </Link>
                        <Link href="/hieucollection">
                          <Text
                            variant="h4"
                            color={
                              router.pathname === "/hieucollection"
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            Hieucollection
                          </Text>
                        </Link>
                      </Flex>
                    ) : (
                      <Flex gap={isMobileOrTablet ? "5rem" : "3rem"}>
                        <Link href={APP_ROUTES.HOME}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.HOME
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("home")}
                          </Text>
                        </Link>

                        <Link href={APP_ROUTES.ABOUT}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.ABOUT
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("about")}
                          </Text>
                        </Link>

                        <Link href={APP_ROUTES.PRODUCT.INDEX}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.PRODUCT.INDEX
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("product")}
                          </Text>
                        </Link>
                        <Link href={APP_ROUTES.CONTACT}>
                          <Text
                            variant="h4"
                            color={
                              router.pathname === APP_ROUTES.CONTACT
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            {t("contact")}
                          </Text>
                        </Link>
                        <Link href="/hieucollection">
                          <Text
                            variant="h4"
                            color={
                              router.pathname === "/hieucollection"
                                ? COLOR.primary
                                : COLOR.secondary
                            }
                          >
                            Hieucollection
                          </Text>
                        </Link>
                      </Flex>
                    )}

                    <Flex>
                      {isMobile ? (
                        <Flex
                          w="full"
                          justifyContent="flex-end"
                          alignItems="center"
                        >
                          <Popover>
                            <PopoverTrigger>
                              <Button>
                                <AccountBoxIcon />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent w="100px">
                              {user ? (
                                <>
                                  {user.role === Role.admin && (
                                    <Link href="/admin">
                                      <Button variant="unstyled">
                                        {t("Admin")}
                                      </Button>
                                    </Link>
                                  )}

                                  <Link href={APP_ROUTES.PROFILE}>
                                    <Button variant="unstyled">
                                      {t("profile")}
                                    </Button>
                                  </Link>

                                  <Link href={APP_ROUTES.CART}>
                                    <Button variant="unstyled">
                                      <ShoppingCartCheckoutIcon
                                        style={{ color: COLOR.black }}
                                      />
                                    </Button>
                                  </Link>
                                  <Link href={APP_ROUTES.HOME}>
                                    <Button
                                      onClick={() => handleLogout()}
                                      variant="unstyled"
                                    >
                                      {t("logout")}
                                    </Button>
                                  </Link>
                                </>
                              ) : (
                                <Link href={APP_ROUTES.SIGNIN}>
                                  <Button variant="unstyled">
                                    {t("login")}
                                  </Button>
                                </Link>
                              )}
                            </PopoverContent>
                          </Popover>
                        </Flex>
                      ) : (
                        <Stack
                          direction="row"
                          w="full"
                          justifyContent="flex-end"
                          alignItems="center"
                          spacing={4}
                        >
                          {user ? (
                            <>
                              <Menu>
                                <MenuButton
                                  as={Button}
                                  h="44px"
                                  border={`1px solid ${COLOR.primary}`}
                                  background={`linear-gradient(to right, ${COLOR.primary} 0%, ${COLOR.white} 100%)`}
                                  transform="skew(-10deg)"
                                  variant="unstyled"
                                  paddingX="1rem !important"
                                >
                                  <Text variant="h1">{t("my_account")}</Text>
                                </MenuButton>
                                <MenuList>
                                  <MenuGroup
                                    color={COLOR.fifth}
                                    fontSize="13px"
                                    title={t("info")}
                                  >
                                    {user.role === Role.admin && (
                                      <Link href="/admin">
                                        <Text
                                          variant="h1"
                                          paddingX="1rem"
                                          style={{
                                            color:
                                              router.pathname === "/admin"
                                                ? COLOR.primary
                                                : COLOR.secondary,
                                          }}
                                        >
                                          {t("Admin")}
                                        </Text>
                                      </Link>
                                    )}
                                    <Link href={APP_ROUTES.PROFILE}>
                                      <Text
                                        variant="h1"
                                        paddingX="1rem"
                                        style={{
                                          color:
                                            router.pathname ===
                                            APP_ROUTES.PROFILE
                                              ? COLOR.primary
                                              : COLOR.secondary,
                                        }}
                                      >
                                        {t("profile")}
                                      </Text>
                                    </Link>
                                    <Link href={APP_ROUTES.CART}>
                                      <Text
                                        variant="h1"
                                        paddingX="1rem"
                                        style={{
                                          color:
                                            router.pathname === APP_ROUTES.CART
                                              ? COLOR.primary
                                              : COLOR.secondary,
                                        }}
                                      >
                                        {t("cart")}
                                      </Text>
                                    </Link>
                                  </MenuGroup>
                                  <MenuDivider />
                                  <MenuGroup
                                    color={COLOR.fifth}
                                    fontSize="13px"
                                    title={t("help")}
                                  >
                                    <Link href="/FAQ">
                                      <Text
                                        variant="h1"
                                        paddingX="1rem"
                                        style={{
                                          color:
                                            router.pathname === "/Faq"
                                              ? COLOR.primary
                                              : COLOR.secondary,
                                        }}
                                      >
                                        {t("FAQ")}
                                      </Text>
                                    </Link>
                                    <Link href={APP_ROUTES.CONTACT}>
                                      <Text
                                        variant="h1"
                                        paddingX="1rem"
                                        color={
                                          router.pathname === APP_ROUTES.CONTACT
                                            ? COLOR.primary
                                            : COLOR.secondary
                                        }
                                      >
                                        {t("contact")}
                                      </Text>
                                    </Link>
                                  </MenuGroup>
                                  <MenuDivider />
                                  <Link href={APP_ROUTES.HOME}>
                                    <Text
                                      onClick={() => handleLogout()}
                                      variant="h1"
                                      paddingX="1rem"
                                    >
                                      {t("logout")}
                                    </Text>
                                  </Link>
                                </MenuList>
                              </Menu>
                            </>
                          ) : (
                            <Flex gap="2rem" alignItems="center">
                              <Link href={APP_ROUTES.SIGNIN}>
                                <Button
                                  w="101px"
                                  h="44px"
                                  transform="skew(-10deg)"
                                  border={`1px solid ${COLOR.primary}`}
                                  background={`"linear-gradient(to right, ${COLOR.primary} 0%, ${COLOR.white} 100%)`}
                                  variant="unstyled"
                                >
                                  <Text variant="h1">{t("login")}</Text>
                                </Button>
                              </Link>
                              <Link href={APP_ROUTES.SIGNUP}>
                                <Button
                                  w="101px"
                                  h="44px"
                                  transform="skew(-10deg)"
                                  border={`1px solid ${COLOR.primary}`}
                                  background={`"linear-gradient(to right, ${COLOR.primary} 0%, ${COLOR.white} 100%)`}
                                  variant="unstyled"
                                >
                                  <Text variant="h1">{t("signup")}</Text>
                                </Button>
                              </Link>
                            </Flex>
                          )}
                          <Flex>
                            <Popover
                              isOpen={isOpenLanguage}
                              onClose={() => setIsOpenLanguage(false)}
                            >
                              <PopoverTrigger>
                                <Button
                                  display="flex"
                                  variant="unstyled"
                                  minWidth={0}
                                  p="4px"
                                  h="50px"
                                  onClick={() => setIsOpenLanguage(true)}
                                >
                                  <LanguageIcon
                                    style={{
                                      color: COLOR.black,
                                      fontSize: "30px",
                                    }}
                                  />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent w="120px" h="80px" p="1rem">
                                <Button
                                  variant="unstyled"
                                  onClick={() => handleChangeLanguage("en")}
                                >
                                  <Text variant="h1"> English</Text>
                                </Button>
                                <Divider />
                                <Button
                                  variant="unstyled"
                                  onClick={() => handleChangeLanguage("vi")}
                                >
                                  <Text variant="h1"> Tiếng Việt</Text>
                                </Button>
                              </PopoverContent>
                            </Popover>
                          </Flex>
                        </Stack>
                      )}
                    </Flex>
                  </Flex>
                </Container>
              )}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}

export default Nav;
