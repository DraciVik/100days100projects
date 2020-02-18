import React from "react";

const Footer = () => {
  return (
    <p className="footer-text">
      Made with <span className="heart"></span> by{" "}
      <a
        className="profile-link"
        href="https://github.com/dracivik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Viktor Stojanov{" "}
      </a>
    </p>
  );
};

export default Footer;
