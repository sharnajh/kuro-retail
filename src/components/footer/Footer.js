import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="title">
        Kuro is a website coded by{" "}
        <a href="https://sharna.dev">Sharna</a>
      </span>
      <span className="socialmedia">
        <span className="link">
          <a href="https://github.com/sharnajh">github</a>
        </span>
        <span className="link">
          <a href="https://www.linkedin.com/in/sharnahossain/">LinkedIn</a>
        </span>
        <span className="link">
          <a href="https://codepen.io/sharnajh">Codepen</a>
        </span>
        <span className="link">
          <a href="https://stackoverflow.com/users/11864970/sharna-j">
            StackOverflow
          </a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
