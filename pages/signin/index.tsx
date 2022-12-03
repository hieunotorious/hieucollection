import { AuthContext } from "app/context/authContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { userlist } from "../../api/auth/data";
import { LoginType } from "../../api/auth/models/user";

function Login() {
  const [data, setData] = useState(userlist);
  const [user, setUser] = useState<LoginType>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const { setUser: setGlobalUser } = useContext(AuthContext);

  const submitForm = (event: any) => {
    event.preventDefault();
    const dataIndex = data.findIndex(
      (item, index) => item.username === user.username
    );
    if (dataIndex > -1) {
      if (data[dataIndex].password === user.password) {
        console.log("successfully Login");
        setGlobalUser(data[dataIndex]);
        router.push("/");
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("User does not exist");
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        minHeight: 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "var(--light-grey-color-shade)",
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
          <h1 style={{ textAlign: "center" }}>Login</h1>
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

            <div
              style={{
                fontSize: "1rem",
                letterSpacing: "normal",
                color: "var(--text)",
              }}
            >
              Forgot Password ?
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
              value="login"
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
          <div style={{}}>
            Not a member?{" "}
            <a
              style={{ color: "blue", textDecoration: "underline" }}
              href="signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
