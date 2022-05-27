import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const clearForm = (e) => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login(email, password)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          clearForm();
          setErrors(data.errors);
        }
      }
    );
  };

  const demoLogin = async (e) => {
    e.preventDefault();

    const demoEmail = "dmo@dmo.com";
    const demoPassword = "password";

    setEmail(demoEmail);
    setPassword(demoPassword);
    await dispatch(sessionActions.login("dmo@dmo.com", "password"));
    clearForm();
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit} className="login-form">
        <ul className="error-ul">
          {errors.map((error, idx) => (
            <li key={idx} className="error-li">
              {error}
            </li>
          ))}
        </ul>
        <label className="login-header">Log in to Vacay N Stays</label>
        <div className="user-box">
          <input
            placeholder="Email"
            className="login-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={
            email.length > 0 && password.length > 0
              ? "login-btn"
              : "login-btn-disabled"
          }
          disabled={email.length === 0 || password.length === 0}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log In
        </button>
        <button type="button" onMouseDown={demoLogin} className="demo-btn">
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
