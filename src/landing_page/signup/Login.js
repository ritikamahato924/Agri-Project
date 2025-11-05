import React from "react";
import "./Login.css";
import Navbar from "../Navbar";


function Login() {
  return (
    <>
    <Navbar/>
    <div className="login-page mt-5">
      <div className="login-box">
        <div className="login-left">
          <h2>Welcome Back</h2>
          <p>Login to continue your journey with Agriculte.</p>

          <button className="google-btn">Sign in with Google</button>

          <div className="divider">
            <span>or</span>
          </div>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button className="login-btn">Login</button>
          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>

        <div className="login-right"></div>
      </div>
    </div>
    
    </>
  );
}

export default Login;
