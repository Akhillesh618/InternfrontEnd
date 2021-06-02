import React from "react";
import "./NloginScree.css";
const container = document.getElementById('container');

export default function NloginScree() {
  function btnsignin() {
    alert("Clicked Sign");
  }
  function btnsignup() {
    alert("Clicked SignUp");
  }
  function csbtnsignin() {
    container.classList.remove("right-panel-active");
    
  }
  function csbtnsignup() {
    container.classList.add("right-panel-active");
  }
  return (
    <div>
      <h2>..</h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={btnsignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

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
}
