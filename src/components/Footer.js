import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#1C1C1C",
        color: "#FFFFFF",
      }}>
      <p>
        &copy; {new Date().getFullYear()} FaceBook Page Reviews. 
      </p>
    </footer>
  );
};

export default Footer;
