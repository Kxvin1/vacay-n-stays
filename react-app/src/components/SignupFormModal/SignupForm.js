import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { signUp } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";

import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {

      const data = await dispatch(signUp(first_name, last_name, email, password));
      if (data) {
        setErrors(data)
      }
    }
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
        <label className="signup-header">Sign up for Vacay N Stays</label>
        <div className="user-box">
          <input
            placeholder="Email Address"
            className="signup-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="First Name"
            className="signup-input"
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Last Name"
            className="signup-input"
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Confirm Password"
            className="signup-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
