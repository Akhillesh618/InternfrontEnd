import React, { useState, useEffect } from "react";
import qs from "qs";
import axios from "axios";
import "./LoginScree.css";
import { useStateValue } from "./StateProvider";

const LoginScree = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let [responseData, setResponseData] = React.useState("");
  let [responsetoken, setResponseToken] = React.useState("");
  const [{ user }, dispatch] = useStateValue();
  const [isLoading, setLoading] = useState(true);

  const Sclicked = function (event) {
    axios({
      method: "post",
      url: "http://medha.dachrs.com:8000/accounts/register/",
      data: qs.stringify({
        email: email,
        password: password,
        username: username,
      }),
    })
      .then(function (response) {
        setResponseData(response.data.message);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const Clicked = function (event) {
    props.onClick("hello")
    axios({
      method: "post",
      url: "http://medha.dachrs.com:8000/accounts/login/",
      data: qs.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        // console.log(response.data.token);
        setResponseToken(response.data.token);
        setResponseData(response.data.message);
        setLoading(false);
        props.onClick(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (responseData === "You are signed in successfully! Token Genrated") {
      dispatch({
        type: "SET_USER",
        user: responsetoken,
      });
      console.log(responsetoken);
    }
  };

  return (
    <div className="Form">
      <h1>User Login Screen</h1>

      <input
        type="email"
        className="input"
        id="email"
        placeholder="Enter Email to Sign Up"
        required
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="input"
        type="name"
        id="email"
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        className="input"
        id="password"
        placeholder="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className="twobuttons">
        <button className="input" onClick={Clicked}>
          Sign In
        </button>
        <button className="input" onClick={Sclicked}>
          Sign Up
        </button>
      </div>

      <p>Response from server: {responseData} </p>
    </div>
  );
};
export default LoginScree;
