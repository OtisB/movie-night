import "./Login.css";
import { Link } from "react-router-dom";

import React from "react";

function Login() {
  return (
    <div className="LoginWrapper">
      <form action="#">
        <label htmlFor="Username">
          <input
            placeholder="username"
            type="text"
            name="Username"
            id="Username"
          />
        </label>
        <br />
        <label htmlFor="Passowrt">
          <input
            placeholder="passwort"
            type="password"
            name="Passwort"
            id="Passwort"
          />
        </label>
        <br />
        <input type="button" value="Login" className="LoginButton" />
        <div className="SignUpWrapper">
          <p className="NotAMember">not a member ?</p>
          <Link className="SignUpNow" to="/">
            Sign up now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
