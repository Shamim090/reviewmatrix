import React, { useState, useContext } from "react";
import "../styles/loginForm.css";
import useAuthentication from "../components/useAuthentication";
import { UserContext } from "../App";

const LoginForm = (props) => {
  const { loggedInUser, error, authenticateUser } = useAuthentication();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticateUser(formData.email, formData.password);
      await setCurrentUser(loggedInUser);
    } catch (err) {
      console.error("Login error:", err);
      setCurrentUser(null);
    }
  };

  return currentUser ? (
    `${currentUser.username}you are logged in`
  ) : (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="message blink">{props.message}</h3>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <divn className="btn-container">
           <button type="submit" className="submit-button">Login </button>
        </divn>
      </form>
    </div>
  );
};

export default LoginForm;
