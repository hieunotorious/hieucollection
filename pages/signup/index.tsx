import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Breadcrumb from "app/component/Breadcrumb";
import { AuthContext } from "app/context/authContext";
import { useResponsive } from "app/hooks/useResponsive";
import { getUser, signup } from "app/services/UserService";
import { setTokens } from "app/utils/token";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SignupType } from "../../api/auth/models/user";
import { css } from "@emotion/react";

// Import Formik components and hooks
import { ErrorMessage, Form, Formik } from "formik";

// Import Yup for validation
import * as Yup from "yup";

function Signup() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const { t } = useTranslation();
  const router = useRouter();
  const toast = useToast();
  const { setUser: setGlobalUser } = useContext(AuthContext);
  const { isMobile } = useResponsive();

  // Define the initial values for the form fields
  const initialValues: SignupType = {
    username: "",
    password: "",
    dob: "",
    email: "",
    confirm: "",
  };

  // Define the validation schema for the form fields
  const validationSchema = Yup.object({
    username: Yup.string()
      .required(t("username_required"))
      .min(3, t("username_min_length")),
    email: Yup.string().required(t("email_required")).email(t("email_invalid")),
    password: Yup.string()
      .required(t("password_required"))
      .min(8, t("password_min_length")),
    confirm: Yup.string()
      .required(t("confirm_password_required"))
      .oneOf([Yup.ref("password"), null], t("confirm_password_match")),
  });

  const onSubmit = async (values: SignupType) => {
    const res = await signup(
      values.username,
      values.password,
      values.confirm
      // values.email
    );
    if (res) {
      const { accessToken, refreshToken, expiredDate } = res;
      setTokens(accessToken, expiredDate, refreshToken);
      const loginUser = await getUser();
      if (loginUser) {
        toast({
          title: t("signup_successful"),
          status: "success",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
        setGlobalUser(loginUser);
        await router.push("/");
      }
    }
  };
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);

  return (
    <Flex direction="column" w="full">
      <Breadcrumb
        links={[
          { title: t("home"), href: "/" },
          { title: t("signup"), href: "/signup" },
        ]}
        current={t("signup")}
      />{" "}
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
            css={css`
              &:focus-within {
                -webkit-box-shadow: var(--box-shadow);
                box-shadow: 0 4px 20px #ffd600;
                transition-duration: 200 ease-linear;
              }
            `}
            style={{
              marginTop: "2rem",
              padding: "1.25rem",
              border: isMobile ? "none" : "1px solid #FFD600",
              display: "grid",
              gap: "1rem",
              width: isMobile ? "350px" : "576px",
              backgroundColor: "#FFFFFF",
              height: isMobile ? "520px" : "630px",
              transform: isMobile ? "none" : "skew(-10deg)",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, values, handleChange }) => (
                <Form>
                  <Stack>
                    <Text
                      variant={isMobile ? "h5_mobile" : "h5"}
                      style={{ textAlign: "center" }}
                    >
                      {t("signup")}
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
                        />
                        <ErrorMessage name="username" />
                        <Text variant={isMobile ? "h4_mobile" : "h4"}>
                          Email
                          <span style={{ color: "red" }}>*</span>
                        </Text>
                        <Input
                          style={{
                            width: isMobile ? 320 : 480,
                            height: 48,
                            transform: "skew(-10deg)",
                            fontFamily: "Balsamiq Sans, sans-serif",
                            fontSize: "15px",
                          }}
                          focusBorderColor="#FFD600"
                          autoComplete="off"
                          value={values.email}
                          onChange={handleChange("email")}
                          type="text"
                          name="email"
                          margin="2rem"
                          placeholder={t("email_placeholder")}
                        />
                        <ErrorMessage name="email" />
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
                            type={show1 ? "text" : "password"}
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
                              onClick={handleClick1}
                            >
                              {show1 ? "hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <Text variant={isMobile ? "h4_mobile" : "h4"}>
                          {t("confirm_password")}
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
                            type={show2 ? "text" : "password"}
                            name="confirm"
                            value={values.confirm}
                            placeholder={t("confirm_placeholder")}
                            onChange={handleChange("confirm")}
                            required
                          />
                          <InputRightElement width="5.5rem" height="5rem">
                            <Button
                              h="3rem"
                              size="sm"
                              transform="skew(-10deg)"
                              onClick={handleClick2}
                            >
                              {show2 ? "hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <Button
                          sx={{
                            "&:hover": {
                              background:
                                "linear-gradient(90deg, #FFD600 0%, #FFFFFF 100%)",
                            },
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
                            {t("signup")}
                          </Text>
                        </Button>
                      </Stack>
                    </div>
                  </Stack>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div
          css={css`
            &:focus-within {
              -webkit-box-shadow: var(--box-shadow);
              box-shadow: 0 4px 20px #ffd600;
              transition-duration: 200 ease-linear;
            }
          `}
          style={{
            marginRight: isMobile ? "1rem" : "12rem",
            marginTop: isMobile ? "10px" : "2rem",
            padding: "1.25rem",
            border: isMobile ? "none" : " 1px solid #FFD600",
            display: "grid",
            gap: "1rem",
            width: isMobile ? "350px" : "576px",
            backgroundColor: "#FFFFFF",
            height: isMobile ? "50px" : "50px",
            transform: "skew(-10deg)",
          }}
        >
          <Flex alignItems="center" justifyContent="center" gap="5px">
            <Text variant={isMobile ? "h4_mobile" : "h4"}>
              {t("already_have_an_account?")}
            </Text>
            <a href="signin">
              <Text
                variant={isMobile ? "h4_mobile" : "h4"}
                color="#1964FF !important"
              >
                {t("login")}
              </Text>
            </a>
          </Flex>
        </div>
      </div>
    </Flex>
  );
}

export default Signup;
