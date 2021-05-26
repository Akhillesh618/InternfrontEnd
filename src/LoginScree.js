import React, { useState } from "react";
import qs from "qs";
import axios from "axios";
import "./LoginScree.css";

export default function LoginScree() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let [responseData, setResponseData] = React.useState("");

  const clicked = function (event) {
    if (username !== "") {
      axios({
        method: "post",
        url: "http://localhost:4000/auth/signup",
        data: qs.stringify({
          email: email,
          password: password,
          username: username,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
        .then(function (response) {
          setResponseData(response.data.message);
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/auth/signin",
        data: qs.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
        .then(function (response) {
          console.log(response.data.token);
          setResponseData(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="Form">
      <h1>User Login Screen</h1>
      <input
        type="email"
        className="input"
        id="email"
        placeholder="Enter email"
        required
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="input"
        type="name"
        id="email"
        placeholder="Enter userName"
        required
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        className="input"
        id="password"
        placeholder="Enter password"
        required
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="input" onClick={clicked}>
        SignUp / SignIn
      </button>
      <p>Response from server: {responseData} </p>
    </div>
  );
}
