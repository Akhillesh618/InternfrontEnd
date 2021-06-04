import React, { useState } from "react";
import "./NloginScree.css";
import qs from "qs";
import axios from "axios";

const NloginScree = (props) => {
  const [isLoading, setLoading] = useState("container");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function btnsignin() {
    axios({
      method: "post",
      url: "http://medha.dachrs.com:8000/accounts/login/",
      data: qs.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        setLoading(false);
        props.onClick(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function btnsignup() {
    axios({
      method: "post",
      url: "http://medha.dachrs.com:8000/accounts/register/",
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
        console.log(response.data.message);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function csbtnsignin() {
    setLoading("container"); //this will slide the pannel to SignIn
  }
  function csbtnsignup() {
    setLoading("container right-panel-active"); //this will slide the pannel to SignUp
  }

  return (
    <div>
      <h2>..</h2>
      <div className={isLoading} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={btnsignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={btnsignin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={csbtnsignin}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={csbtnsignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <scripts></scripts>
    </div>
  );
};
export default NloginScree;
