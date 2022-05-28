import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";

import "./LoginForm.css";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const user = useSelector((state) => state.session.user);

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

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  if (user) {
    return <Redirect to="/" />;
  }

  const demoLogin = async (e) => {
    e.preventDefault();

    const demoEmail = "dmo@dmo.com";
    const demoPassword = "password";

    setEmail(demoEmail);
    setPassword(demoPassword);
    dispatch(sessionActions.login("dmo@dmo.com", "password"));
    clearForm();
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-header">Log in to Vacay N Stays</label>
        <div className="user-box">
          <input
            placeholder="Email"
            className="login-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </div>
        <button type="submit" className={"login-btn"}>
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
