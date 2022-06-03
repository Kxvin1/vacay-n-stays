import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./LoginForm.css";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);

  const clearForm = (e) => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const errors = [];

    const data = await dispatch(login(email, password));

    let emailError;
    let userError;

    if (data) {
      if (data[0] && data[1]) {
        emailError = data[0].split(":")[1].trimStart();
        userError = data[1].split(":")[1].trimStart();

        errors.push(emailError);
        errors.push(userError);

        clearForm();
        setErrors(errors);
      } else if (data[0]) {
        emailError = data[0].split(":")[1].trimStart();
        errors.push(emailError);

        clearForm();
        setErrors(errors);
      } else if (data[1]) {
        userError = data[1].split(":")[1].trimStart();
        errors.push(userError);

        clearForm();
        setErrors(errors);
      } else {
        dispatch(login(email, password));
      }
    }
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
    // history.push("/discover-page");
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-header">Log in to Vacay N Stays</label>
        <ul className="error">
          {errors.map((error, idx) => (
            <li key={idx} className="error-li">
              {error}
            </li>
          ))}
        </ul>
        <div className="user-box">
          <input
            placeholder="Email"
            className="login-input"
            type="email"
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
