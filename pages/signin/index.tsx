import { AuthContext } from "app/context/authContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { LoginType } from "../../api/auth/models/user";
import useTranslation from "next-translate/useTranslation";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  Flex,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { getUser, login } from "app/services/UserService";
import { setTokens } from "app/utils/token";
import { useResponsive } from "app/hooks/useResponsive";
import Breadcrumb from "app/component/Breadcrumb";
import { isAxiosError } from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Image from "next/image";

function Login() {
  const SigninSchema = Yup.object().shape({
    username: Yup.string()
      // .matches(
      //   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      //   "Định dạng email không đúng"
      // )
      .required("Bạn cần nhập thông tin vào"),
    password: Yup.string().required("Bạn cần nhập thông tin vào"),
  });
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const { t } = useTranslation();
  const { setUser: setGlobalUser } = useContext(AuthContext);
  const toast = useToast();

  const submitForm = async (values: { username: string; password: string }) => {
    // handle form submission here
    try {
      const res = await login(values.username, values.password);
      if (res) {
        const { accessToken, refreshToken, expiredDate } = res;
        setTokens(accessToken, expiredDate, refreshToken);
        const loginUser = await getUser();
        if (loginUser) {
          toast({
            title: t("login_successful"),
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
          setGlobalUser(loginUser);
          await router.push("/");
        }
      }
    } catch (err) {
      if (isAxiosError(err)) {
        toast({
          title: t(err.response?.data.message || ""),
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      }
    }

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
    <Flex direction="column" w="full" mt="3rem">
      <Breadcrumb
        links={[
          { title: t("home"), href: "/" },
          { title: t("login"), href: "/signin" },
        ]}
        current={t("login")}
      />

      <div
        style={{
          minHeight: isMobile ? 510 : 495,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "white",
        }}
      >
        <div
          style={{
            marginTop: "2rem",
            padding: "1.25rem",
            border: isMobile ? "none" : "1px solid #FFD600",
            display: "grid",
            gap: "1rem",
            width: isMobile ? "350px" : "576px",
            backgroundColor: "#FFFFFF",
            height: isMobile ? "520px" : "600px",
            transform: isMobile ? "none" : "skew(-10deg)",
          }}
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={SigninSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form>
                <Stack>
                  <Text
                    variant={isMobile ? "h5_mobile" : "h5"}
                    style={{ textAlign: "center" }}
                  >
                    {t("login")}
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack gap="1rem">
                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("username")}
                        <span style={{ color: "red" }}>*</span>
                      </Text>
                      <Input
                        style={{
                          border: "1px solid #FFECAA",
                          width: isMobile ? 320 : 480,
                          height: 48,
                          transform: "skew(-10deg)",
                          fontFamily: "Balsamiq Sans, sans-serif",

                          fontSize: "15px",
                        }}
                        focusBorderColor="#FFD600"
                        autoComplete="off"
                        value={values.username}
                        onChange={handleChange("username")}
                        type="text"
                        name="username"
                        margin="2rem"
                        placeholder={t("username_placeholder")}
                        required
                      />

                      <Text variant={isMobile ? "h4_mobile" : "h4"}>
                        {t("password")}
                        <span style={{ color: "red" }}>*</span>
                      </Text>
                      <InputGroup>
                        <Input
                          style={{
                            border: "1px solid #FFECAA",
                            width: isMobile ? 320 : 480,

                            height: 48,
                            fontSize: "15px",
                            fontFamily: "Balsamiq Sans, sans-serif",
                            transform: "skew(-10deg)",
                          }}
                          focusBorderColor="#FFD600"
                          autoComplete="off"
                          type={show ? "text" : "password"}
                          name="password"
                          value={values.password}
                          placeholder={t("password_placeholder")}
                          onChange={handleChange("password")}
                          required
                        />
                        <InputRightElement width="5.5rem" height="5rem">
                          <Button
                            h="3rem"
                            size="sm"
                            transform="skew(-10deg)"
                            onClick={handleClick}
                          >
                            {show ? "hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Text
                        variant="h7"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: "1rem",
                          letterSpacing: "normal",
                          color: "#1964FF",
                          textDecoration: "underline",
                        }}
                      >
                        {t("forgot_password?")}
                      </Text>
                      <Button
                        sx={{
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #FFD600 0%, #FFFFFF 100%)",
                          },
                          fontWeight: "300",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          width: isMobile ? 320 : 480,

                          height: 20,
                          transform: "skew(-10deg)",
                          border: "1px solid #FFD600",
                          background: isMobile
                            ? "linear-gradient(90deg, #FFD600 0%, #FFFFFF 100%)"
                            : "#FFECAA",
                        }}
                        variant="ghost"
                        type="submit"
                        isLoading={isSubmitting}
                      >
                        <Text variant={isMobile ? "h4_mobile" : "h4"}>
                          {t("login")}
                        </Text>
                      </Button>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap="10px"
                      >
                        <Flex
                          backgroundColor="black"
                          width="50px"
                          height="1px"
                        />
                        <Text variant="h7" fontSize="15px ! important">
                          {t("or")}
                        </Text>
                        <Flex
                          backgroundColor="black"
                          width="50px"
                          height="1px"
                        />
                      </Flex>
                      <Stack gap="10px">
                        <Button
                          sx={{
                            "&:hover": {
                              background:
                                "linear-gradient(90deg, #FFD600 0%, #FFFFFF 100%)",
                            },
                            cursor: "pointer",
                            width: isMobile ? 320 : 480,

                            height: 20,
                            transform: "skew(-10deg)",
                            border: "1px solid #FFD600",
                            background: "white",
                          }}
                          variant="ghost"
                          type="submit"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap="10px"
                          >
                            <Text variant={isMobile ? "h4_mobile" : "h4"}>
                              {t("google")}
                            </Text>
                            <Image
                              src="/images/logoGG.png"
                              alt=""
                              width="25px"
                              height="25px"
                            />
                          </Flex>
                        </Button>
                        <Button
                          sx={{
                            "&:hover": {
                              background:
                                "linear-gradient(90deg, #FFD600 0%, #FFFFFF 100%)",
                            },
                            cursor: "pointer",
                            width: isMobile ? 320 : 480,

                            height: 20,
                            transform: "skew(-10deg)",
                            border: "1px solid #FFD600",
                            background: "white",
                          }}
                          variant="ghost"
                          type="submit"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap="10px"
                          >
                            <Text variant={isMobile ? "h4_mobile" : "h4"}>
                              {t("facebook")}
                            </Text>
                            <Image
                              src="/images/logoFB.png"
                              alt=""
                              width="30px"
                              height="30px"
                            />
                          </Flex>
                        </Button>
                      </Stack>
                    </Stack>
                  </div>
                </Stack>
              </Form>
            )}
          </Formik>
        </div>
        <div
          style={{
            marginRight: isMobile ? "1rem" : "12rem",
            marginTop: isMobile ? "1px" : "2rem",
            padding: "1.25rem",
            border: isMobile ? "none" : " 1px solid #FFD600",
            display: "grid",
            gap: "1rem",
            width: isMobile ? "350px" : "576px",
            backgroundColor: "#FFFFFF",
            height: isMobile ? "10px" : "50px",
            transform: "skew(-10deg)",
          }}
        >
          <Flex alignItems="center" justifyContent="center" gap="5px">
            <Text variant={isMobile ? "h4_mobile" : "h4"}>
              {t("not_a_member")}
            </Text>
            <a href="signup">
              <Text
                variant={isMobile ? "h4_mobile" : "h4"}
                color="#1964FF !important"
              >
                {t("signup")}
              </Text>
            </a>
          </Flex>
        </div>
      </div>
    </Flex>
  );
}

export default Login;
