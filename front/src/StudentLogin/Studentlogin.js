import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Studentlogin.scss";
import axios from "axios";

function Studentlogin() {
  //Set states for the entered details in the body
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginStatus] = useState(false);

  //For navigation after login status has been set
  const navigate = useNavigate();

  //FUnction to be called when user attempts to sign in
  const signin = () => {
    axios
      .post("http://localhost:4000/api/students/sign-in", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoginStatus(true);
      })
      .then(() => {
        loginstatus ? navigate("/Studenthomepage") : navigate("/");
      });
    console.log(loginstatus);
  };

  return (
    <div className="loginWrapper">
      <div className="loginForm">
        <div className="title">Student Login</div>
        <div className="inputs">
          <label>Admission Number: </label>
          <input
            type="text"
            placeholder="Admision Number"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label>User Password: </label>
          <input
            type="password"
            placeholder="Password"
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

export default Studentlogin;