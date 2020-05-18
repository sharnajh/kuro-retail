import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="title">
        Kuro is a website coded by{" "}
        <a href="https://sharna.dev" target="_blank">Sharna</a>
      </span>
      <span className="socialmedia">
        <span className="link">
          <a href="https://github.com/sharnajh" target="_blank">github</a>
        </span>
        <span className="link">
          <a href="https://www.linkedin.com/in/sharnahossain/" target="_blank">LinkedIn</a>
        </span>
        <span className="link">
          <a href="https://codepen.io/sharnajh" target="_blank">Codepen</a>
        </span>
        <span className="link">
          <a href="https://stackoverflow.com/users/11864970/sharna-j" target="_blank">
            StackOverflow
          </a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
