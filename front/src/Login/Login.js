import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  const signin = () => {
    axios
      .post("http://localhost:4000/api/admin/sign-in", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoginStatus(true);
      })
      .then(() => {
        loginstatus ? navigate("/Adminpage") : navigate("/Login");
      });
    console.log(loginstatus);
  };

  return (
    <div className="loginWrapper">
      <div className="loginForm">
        <div className="title">Login</div>
        <div className="inputs">
          <label>Username: </label>
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={signin}>Login</button>
        <a className="resetLink" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="siteTitle">
        <h1>Welcome To Wangwana Library System</h1>
        <h4>
          Read the library terms <a href="#">Here</a>{" "}
        </h4>
      </div>
    </div>
  );
}

export default Login;
