import React from "react";
import "./css/Footer.css";

const footerData = [
  { name: "github", url: "https://github.com/sharnajh" },
  { name: "linkedin", url: "https://www.linkedin.com/in/sharnahossain/" },
  { name: "codepen", url: "https://codepen.io/sharnajh" },
  {
    name: "stackoverflow",
    url: "https://stackoverflow.com/users/11864970/sharna-j",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <span className="title">
        Kuro is a website coded by{" "}
        <a href="https://sharna.dev" target="_blank" rel="noopener noreferrer">
          Sharna
        </a>
      </span>
      <span className="socialmedia">
        {footerData.map((link) => (
          <span className="link" key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
