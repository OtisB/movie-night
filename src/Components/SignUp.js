import React from "react";
import "./SignUp.css";

function SignUp({ handleclick }) {
  return (
    <div className="SignUpWrapper">
      <form action="#">
        <label htmlFor="first_Name">
          <input
            placeholder="Firstname"
            type="text"
            name="first_name"
            id="first_name"
          />
        </label>
        <br />
        <label htmlFor="last_name">
          <input
            placeholder="Lastname"
            type="text"
            name="last_name"
            id="last_name"
          />
        </label>
        <br />
        <label htmlFor="email">
          <input placeholder="eMail" type="email" name="email" id="email" />
        </label>
        <br />
        <label htmlFor="password">
          <input
            placeholder="password min 8 char"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <br />
        <input type="button" value="SignUp" className="SignUpButton" />
      </form>
      <button onClick={() => handleclick(true)}>back to Login</button>
    </div>
  );
}

export default SignUp;
