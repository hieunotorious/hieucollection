import React, { useState } from "react";
import { userlist } from "../../api/auth/data";
import { User } from "../../api/auth/models/user";

function Profile() {
  // const [data, setData] = useState(userlist);
  // const [user, setUser] = useState<User>({
  //     username: "",
  // password: "",
  // dispalyName: "",
  //id: "",
  // address: "",
  // phonenumber: "",
  // dob: "",

  // });

  return (
    <div
      style={{
        width: "350px",
        margin: "0 auto",
        minHeight: " 350px",
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
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <label style={{}}>Name</label>
          <form>
            <div>
              <input
                style={{
                  borderRadius: " 0.25rem",
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  width: 275,
                }}
                type="text"
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

export default Profile;
