import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigateHome = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <h1> this is Contact page</h1>
      <br></br>

      <button
        onClick={() => {
          navigateHome("/");
        }}>
        Goto Home Page
      </button>
    </div>
  );
};

export default Contact;
