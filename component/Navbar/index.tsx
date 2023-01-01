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
} from "@chakra-ui/react";
import { Role } from "app/api/auth/models/user";
import Container from "../Container";
import { useResponsive } from "app/hooks/useResponsive";
function Nav() {
  const { isMobile } = useResponsive();
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
        h="48px"
        justifyContent="space-between"
        alignItems="center"
        background="b5def2"
      >
        <Flex w="full" h="3rem" background="b5def2">
          <Text style={{ fontFamily: "'Baloo', serif" }} fontSize="15px">
            {t("welcome_to_our_online_store!")}
          </Text>
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
      <Flex w="full" h="60px" background="#b5def2" alignItems="center">
        <Container>
          <Flex
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Flex w="full">
              {isMobile ? (
                <Flex>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      variant="outline"
                      icon={<MenuIcon />}
                    />
                    <MenuList>
                      <Link href="/">
                        <MenuItem fontFamily="'Baloo', serif">
                          {t("home")}
                        </MenuItem>
                      </Link>
                      <Link href="/about">
                        <MenuItem fontFamily="'Baloo', serif">
                          {t("about")}
                        </MenuItem>
                      </Link>
                      <Link href="/product">
                        <MenuItem fontFamily="'Baloo', serif">
                          {t("product")}
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Flex justifyContent="flex-start" w="full">
                  <Flex
                    style={{
                      fontSize: "2rem",
                      marginRight: "2rem",
                      fontFamily: "'Baloo', serif",
                      cursor: "pointer",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      fontWeight: 700,
                    }}
                  >
                    <Link href="/">
                      <div>{t("home")}</div>
                    </Link>
                  </Flex>
                  <Flex
                    style={{
                      fontSize: "2rem",
                      marginRight: "2rem",
                      fontFamily: "'Baloo', serif",
                      cursor: "pointer",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      fontWeight: 700,
                    }}
                  >
                    <Link href="/about">
                      <div>{t("about")}</div>
                    </Link>
                  </Flex>
                  <Flex
                    style={{
                      fontSize: "2rem",
                      fontFamily: "'Baloo', serif",
                      cursor: "pointer",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      fontWeight: 700,
                    }}
                  >
                    <Link href="/product">
                      <div>{t("product")}</div>
                    </Link>
                  </Flex>
                </Flex>
              )}
              <Flex w="full" justifyContent="flex-end" alignItems="center">
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
                            <Button variant="unstyled">{t("Admin")}</Button>
                          </Link>
                        )}

                        <Link href="/profile">
                          <Button variant="unstyled"> {t("profile")}</Button>
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
                        <Button variant="unstyled"> {t("login")}</Button>
                      </Link>
                    )}
                  </PopoverContent>
                </Popover>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}

export default Nav;
