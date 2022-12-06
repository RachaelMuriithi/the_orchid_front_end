import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FlowerContext } from "./FlowerContext";
import "./LogIn.css";

export default function LoginForm() {
  const {
    loginData,
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    isLoading,
  } = useContext(FlowerContext);

  return (
    <>
      <div className="login-div">
        <form className="login-form" onSubmit={handleSubmitLoginDetails}>
        <img src="https://i.pinimg.com/564x/1b/b3/66/1bb3667a4c418596a91ef4485e2efb60.jpg" alt="flower"/>
          <label htmlFor="username"> Username </label> <br />
          <input
            type="text"
            name="username"
            className="login-input"
            autoComplete="off"
            value={loginData.username}
            onChange={handleLoginChange}
          />
          <br />
          <label htmlFor="password"> Password </label> <br />
          <input
            type="password"
            name="password"
            className="login-input"
            autoComplete="current-password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <br />
          {loginError.map((error, index) => (
            <p className="loginError" key={index}>
              {error}!!
            </p>
          ))}
          <button type="submit" className="login-btn">
            {isLoading ? " Loading..." : "Login"}
          </button>
          <Link id= "link2" to={"/signup"}>
          <span id="signup=section"> Don't have an account? Sign Up </span>
        </Link>
        </form>
      </div>
    </>
  );
}