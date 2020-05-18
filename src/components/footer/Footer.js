import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="title">
        Kuro is a website coded by{" "}
        <a href="https://github.com/sharnajh">Sharna</a>
      </span>
      <span className="socialmedia">
        <a href="https://github.com/sharnajh">github</a>{" "}
        <a href="https://www.linkedin.com/in/sharnahossain/">LinkedIn</a>{" "}
        <a href="https://stackoverflow.com/users/11864970/sharna-j">
          StackOverflow
        </a>{" "}
      </span>
    </footer>
  );
};

export default Footer;
