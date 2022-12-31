import { textAlign } from "@mui/system";
import { AuthContext } from "app/context/authContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { LoginType } from "../../api/auth/models/user";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { getUser, login } from "app/services/UserService";
import { setTokens } from "app/utils/token";
import { useResponsive } from "app/hooks/useResponsive";
import Users from "../admin/users";
import { Password } from "@mui/icons-material";
function Login() {
  const [user, setUser] = useState<LoginType>({
    username: "",
    password: "",
  });

  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const { t } = useTranslation();
  const { setUser: setGlobalUser } = useContext(AuthContext);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const res = await login(user.username, user.password);
      if (res) {
        const { accessToken, refreshToken, expiredDate } = res;
        setTokens(accessToken, expiredDate, refreshToken);
        const loginUser = await getUser();
        if (loginUser) {
          toast({
            title: "Login Successful",
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
          setGlobalUser(loginUser);
          await router.push("/");
        }
      }
    } catch (error) {
      toast({
        title: "Incorrect Username or Password",
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
    // const dataIndex = data.findIndex(
    //   (item, index) => item.username === user.username
    // );
    // if (dataIndex > -1) {
    //   if (data[dataIndex].password === user.password) {
    //     console.log("successfully Login");
    //     setGlobalUser(data[dataIndex]);
    //     router.push("/");
    //   } else {
    //     console.log("wrong password");
    //   }
    // } else {
    //   console.log("User does not exist");
    // }
  };
  const handleClick = () => setShow(!show);
  const { isMobile } = useResponsive();
  return (
    <div
      style={{
        margin: "0 auto",
        minHeight: isMobile ? "700px" : 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "white",
      }}
    >
      <div>
        <div
          style={{
            padding: "1.25rem",
            borderRadius: "0.5rem",
            border: " 1px solid black",
            display: "grid",
            gap: "1rem",
            marginTop: " 4rem",
            width: "300px",
            background: "white",
          }}
        >
          <h1 style={{ textAlign: "center" }}>{t("login")}</h1>
          <label style={{}}>{t("username")}</label>
          <form onSubmit={submitForm}>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
                onChange={(event) => {
                  setUser((prevState) => ({
                    ...prevState,
                    username: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>
            <label>{t("password")}</label>
            <div>
              <InputGroup size="md">
                <Input
                  style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid black",
                    width: 275,
                    height: 30,
                  }}
                  type={show ? "text" : "password"}
                  onChange={(event) => {
                    setUser((prevState) => ({
                      ...prevState,
                      password: event.target.value,
                    }));
                  }}
                  required
                />
                <InputRightElement width="5.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "normal",
                color: "var(--text)",
                textDecoration: "underline",
              }}
            >
              {t("forgot_password?")}
            </div>
            <Button
              style={{
                borderRadius: " 0.25rem",
                fontWeight: "300",
                transition: " all .3s ease-in-out",
                cursor: "pointer",
                border: "none",
                textTransform: "uppercase",
                width: 275,
                background: "#3399FF",
                color: "white",
              }}
              type="submit"
              isLoading={isLoading}
            >
              {t("login")}
            </Button>
          </form>
        </div>
        <div
          style={{
            marginTop: " 1rem",
            display: "flex",
            alignItems: " center",
            borderRadius: "0.5rem",
            border: "1px solid black",
            padding: " 1.25rem",
            background: "white",
            marginBottom: "4rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginLeft: isMobile ? "none" : "1rem",
            }}
          >
            {t("not_a_member")}
            <a
              style={{ color: "blue", textDecoration: "underline" }}
              href="signup"
            >
              {t("signup")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
