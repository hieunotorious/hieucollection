import { blue } from "@mui/material/colors";
import React, { useContext, useState } from "react";

import { SignupType } from "../../api/auth/models/user";
import { css } from "@emotion/react";
import { Password } from "@mui/icons-material";
import { AuthContext } from "app/context/authContext";
import { info } from "console";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { setTokens } from "app/utils/token";
import { getUser, signup } from "app/services/UserService";
import { useResponsive } from "app/hooks/useResponsive";
function Signup() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const { t } = useTranslation();
  const [user, setUser] = useState<SignupType>({
    username: "",
    password: "",
    dob: "",
    email: "",
    confirm: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { setUser: setGlobalUser } = useContext(AuthContext);
  const submitForm = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const res = await signup(user.username, user.password, user.email);
    if (res) {
      const { accessToken, refreshToken, expiredDate } = res;
      setTokens(accessToken, expiredDate, refreshToken);
      const loginUser = await getUser();
      if (loginUser) {
        toast({
          title: "Signup Successful",
          status: "success",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
        setGlobalUser(loginUser);
        await router.push("/");
      }
    }
    setIsLoading(false);
  };
  const handleClick1 = () => setShow1(!show1);
  const { isMobile } = useResponsive();
  const handleClick2 = () => setShow2(!show2);

  return (
    <div
      style={{
        background: "white",
        margin: "0 auto",
        minHeight: isMobile ? 610 : 795,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
          <h1 style={{ textAlign: "center" }}>{t("signup")}</h1>
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

            <label style={{}}>Email</label>
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
                    email: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <label>{t("Password")}</label>
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
                  type={show1 ? "text" : "password"}
                  onChange={(event) => {
                    setUser((prevState) => ({
                      ...prevState,
                      password: event.target.value,
                    }));
                  }}
                  required
                />
                <InputRightElement width="5.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick1}>
                    {show1 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <label>{t("confirm_password")}</label>
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
                  type={show2 ? "text" : "password"}
                  onChange={(event) => {
                    setUser((prevState) => ({
                      ...prevState,
                      confirm: event.target.value,
                    }));
                  }}
                  required
                />
                <InputRightElement width="5.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick2}>
                    {show2 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "normal",
                color: "var(--text)",
              }}
            >
              {t(
                "by_clicking_reate_account_i_agree_that_i_have_read_and_accepted_the_and"
              )}
              <a style={{ color: "blue" }}>{t("terms_of_use")}</a> and
              <a style={{ color: "blue", padding: 2 }}>{t("privacy_policy")}</a>
            </div>
            <Button
              style={{
                borderRadius: " 0.25rem",
                fontWeight: "300",
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
              {t("signup")}
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
          }}
        >
          <div>
            {t("already_have_an_account?")}
            <a
              style={{ color: "blue", textDecoration: "underline" }}
              href="signin"
            >
              {t("login")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
