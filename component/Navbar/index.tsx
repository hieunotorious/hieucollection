import Link from "next/link";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { useState, useContext } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { AuthContext } from "../../context/authContext";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "app/services/UserService";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  IconButton,
  Stack,
  MenuGroup,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";
import { Role } from "app/api/auth/models/user";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
import { useRouter } from "next/router";
import Image from "next/image";
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
    <Flex direction="column" h="12rem" background="b5def2">
      <Container
        display={isMobile ? "flex" : "none"}
        h="48px"
        justifyContent="space-between"
        alignItems="center"
        background="b5def2"
      >
        <Flex w="full" h="3rem" background="b5def2">
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
                h="30px"
                variant="unstyled"
                minWidth={0}
                p="4px"
                onClick={() => setIsOpenLanguage(true)}
              >
                <LanguageIcon style={{ color: "black" }} />
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
        h="60px"
        background={isMobile ? "#b5def2" : "#FFFFFF"}
        alignItems="center"
        mt={isMobile ? "0" : "3rem"}
      >
        <Container>
          <Flex
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Flex w="full">
              {isMobile ? (
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap="28rem"
                >
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      variant="outline"
                      icon={<MenuIcon />}
                    />
                    <MenuList>
                      <Link href="/">
                        <Text paddingX="1rem" variant="h4_mobile">
                          {t("home")}
                        </Text>
                      </Link>
                      <Link href="/about">
                        <Text paddingX="1rem" variant="h4_mobile">
                          {t("about")}
                        </Text>
                      </Link>
                      <Link href="/product">
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

                          <Link href="/profile">
                            <Text paddingX="1rem" variant="h4_mobile">
                              {" "}
                              {t("profile")}
                            </Text>
                          </Link>

                          <Link href="/cart">
                            <Text paddingX="1rem" variant="h4_mobile">
                              <ShoppingCartCheckoutIcon
                                style={{ color: "black" }}
                              />
                            </Text>
                          </Link>
                          <Link href="/">
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
                        <Link href="/signin">
                          <Text paddingX="1rem" variant="h4_mobile">
                            {t("login")}
                          </Text>
                        </Link>
                      )}
                    </PopoverContent>
                  </Popover>
                </Flex>
              ) : (
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={isMobileOrTablet ? "15rem" : "25rem"}
                >
                  <Image
                    src="/images/logo.jpg"
                    alt=""
                    width="200px"
                    height="200px"
                  />
                  {user ? (
                    <Flex gap="30rem">
                      <Link href="/product">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/product"
                              ? "#FFD600"
                              : "#41332C"
                          }
                        >
                          {t("product")}
                        </Text>
                      </Link>
                      <Link href="/contact">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/contact"
                              ? "#FFD600"
                              : "#41332C"
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
                              ? "#FFD600"
                              : "#41332C"
                          }
                        >
                          Hieucollection
                        </Text>
                      </Link>
                    </Flex>
                  ) : (
                    <Flex gap={isMobileOrTablet ? "5rem" : "3rem"}>
                      <Link href="/">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/" ? "#FFD600" : "#41332C"
                          }
                        >
                          {t("home")}
                        </Text>
                      </Link>

                      <Link href="/about">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/about" ? "#FFD600" : "#41332C"
                          }
                        >
                          {t("about")}
                        </Text>
                      </Link>

                      <Link href="/product">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/product"
                              ? "#FFD600"
                              : "#41332C"
                          }
                        >
                          {t("product")}
                        </Text>
                      </Link>
                      <Link href="/contact">
                        <Text
                          variant="h4"
                          color={
                            router.pathname === "/contact"
                              ? "#FFD600"
                              : "#41332C"
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
                              ? "#FFD600"
                              : "#41332C"
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

                                <Link href="/profile">
                                  <Button variant="unstyled">
                                    {" "}
                                    {t("profile")}
                                  </Button>
                                </Link>

                                <Link href="/cart">
                                  <Button variant="unstyled">
                                    <ShoppingCartCheckoutIcon
                                      style={{ color: "black" }}
                                    />
                                  </Button>
                                </Link>
                                <Link href="/">
                                  <Button
                                    onClick={() => handleLogout()}
                                    variant="unstyled"
                                  >
                                    {t("logout")}
                                  </Button>
                                </Link>
                              </>
                            ) : (
                              <Link href="/signin">
                                <Button variant="unstyled">
                                  {" "}
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
                                border="1px solid #FFD600"
                                background="linear-gradient(to right, #FFD600 0%, #FFFFFF 100%)"
                                borderRadius="8px"
                                variant="unstyled"
                                paddingX="1rem !important"
                              >
                                <Text variant="h1">{t("my_account")}</Text>
                              </MenuButton>
                              <MenuList>
                                <MenuGroup
                                  color="#FF9A00"
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
                                              ? "#FFD600"
                                              : "#41332C",
                                        }}
                                      >
                                        {t("Admin")}
                                      </Text>
                                    </Link>
                                  )}
                                  <Link href="/profile">
                                    <Text
                                      variant="h1"
                                      paddingX="1rem"
                                      style={{
                                        color:
                                          router.pathname === "/profile"
                                            ? "#FFD600"
                                            : "#41332C",
                                      }}
                                    >
                                      {t("profile")}
                                    </Text>
                                  </Link>
                                  <Link href="/cart">
                                    <Text
                                      variant="h1"
                                      paddingX="1rem"
                                      style={{
                                        color:
                                          router.pathname === "/cart"
                                            ? "#FFD600"
                                            : "#41332C",
                                      }}
                                    >
                                      {t("cart")}
                                    </Text>
                                  </Link>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup
                                  color="#FF9A00"
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
                                            ? "#FFD600"
                                            : "#41332C",
                                      }}
                                    >
                                      {t("FAQ")}
                                    </Text>
                                  </Link>
                                  <Link href="/contact">
                                    <Text
                                      variant="h1"
                                      paddingX="1rem"
                                      color={
                                        router.pathname === "/contact"
                                          ? "#FFD600"
                                          : "#41332C"
                                      }
                                    >
                                      {t("contact")}
                                    </Text>
                                  </Link>
                                </MenuGroup>
                                <MenuDivider />
                                <Link href="/">
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
                            <Link href="/signin">
                              <Button
                                w="101px"
                                h="44px"
                                border="1px solid #FFD600"
                                background="linear-gradient(to right, #FFD600 0%, #FFFFFF 100%)"
                                borderRadius="8px"
                                variant="unstyled"
                              >
                                <Text variant="h1">{t("login")}</Text>
                              </Button>
                            </Link>
                            <Button
                              h="44px"
                              border="1px solid #FFD600"
                              background="linear-gradient(to right, #FFD600 0%, #FFFFFF 100%)"
                              borderRadius="8px"
                              variant="unstyled"
                              paddingX="1rem !important"
                            >
                              <Text variant="h1">{t("sign_up_newletter")}</Text>
                            </Button>
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
                                onClick={() => setIsOpenLanguage(true)}
                              >
                                <LanguageIcon
                                  style={{ color: "black", fontSize: "30px" }}
                                />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent w="120px">
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
              )}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}

export default Nav;
