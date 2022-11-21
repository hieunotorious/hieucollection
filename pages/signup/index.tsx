import { blue } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { userlist } from "../../api/auth/data";
import { SignupType } from "../../api/auth/models/user";
import { css } from "@emotion/react";
import { Password } from "@mui/icons-material";
import { AuthContext } from "app/context/authContext";
import { info } from "console";
import { useRouter } from "next/router";
function Signup() {
  const [data, setData] = useState(userlist);
  const [user, setUser] = useState<SignupType>({
    username: "",
    password: "",
    dob: "",
    email: "",
    confirm: "",
  });
  const router = useRouter();
  const { createUser } = useContext(AuthContext);
  const submitForm = (event: any) => {
    event.preventDefault();
    if (user.password === user.confirm) {
      console.log("Complete");
      createUser(user);
      router.push("/");
    }
  };

  return (
    <div
      style={{
        background: "var(--light-grey-color-shade)",
        margin: "0 auto",
        minHeight: " 800px",
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
          <h1 style={{ textAlign: "center" }}>Sign up</h1>
          <label style={{}}>Username</label>
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

            <label>Password</label>
            <div>
              <input
                style={{
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid black",
                  width: 275,
                }}
                type="password"
                onChange={(event) => {
                  setUser((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <label>Confirm Password</label>
            <div>
              <input
                style={{
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid black",
                  width: 275,
                }}
                type="confirm"
                onChange={(event) => {
                  setUser((prevState) => ({
                    ...prevState,
                    confirm: event.target.value,
                  }));
                }}
                required
              ></input>
            </div>

            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "normal",
                color: "var(--text)",
              }}
            >
              By clicking Create account, I agree that I have read and accepted
              the <a style={{ color: "blue" }}>Terms of Use </a> and
              <a style={{ color: "blue", padding: 2 }}>Privacy Policy.</a>
            </div>
            <input
              style={{
                borderRadius: " 0.25rem",
                fontWeight: "300",
                transition: " all .3s ease-in-out",
                cursor: "pointer",
                border: "none",
                textTransform: "uppercase",
                width: 275,
              }}
              type="submit"
              value="signup"
            ></input>
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
            Already have an account?{" "}
            <a
              style={{ color: "blue", textDecoration: "underline" }}
              href="signin"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
