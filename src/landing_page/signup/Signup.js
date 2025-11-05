import React from "react";
import "./Signup.css"; // <-- import the CSS file
import Navbar from "../Navbar";


function Signup() {
  return (
    <>
    <Navbar/>
    <div className="signup-page mt-5">
      <div className="signup-box">
        <div className="signup-left">
          <h2>Sign up</h2>
          <p>Create an account to start exploring and build your session with Agriculte.</p>

          <button className="google-btn">Sign up with Google</button>

          <div className="divider">
            <span>or</span>
          </div>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button className="signup-btn">Create Account</button>
          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        <div className="signup-right"></div>
      </div>
      
    </div>
    
    </>
   
  );
}

export default Signup;

