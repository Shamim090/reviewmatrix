import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import useAuthentication from "./useAuthentication";
import { UserContext } from "../App";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isLogoutAlertVisible, setIsLogoutAlertVisible] = useState(false);
  const handleLogInOut = () => {
    if (currentUser) {
      setCurrentUser(null);
      setIsLogoutAlertVisible(true);
    }
  };

  return (
    <>
      <nav>
      
        <NavLink className="nav-link" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink className="nav-link" to="/reviews">
          {" "}
          Reviews{" "}
        </NavLink>
        <NavLink className="nav-link" to="/blogs">
          {" "}
          Blogs
        </NavLink>

        <NavLink
          className="nav-link"
          to={!currentUser && "/login-form"}
          onClick={handleLogInOut}>
          {currentUser ? `${currentUser.username}` : "Login"}
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
      {/* <div className="alert-container">
          alertAre you sure you want to log out?
          <button onClick={handleLogInOut}>Yes</button>
          <button onClick={handleLogInOut}>No</button>
        </div> */}
    </>
  );
};

export default Navbar;
