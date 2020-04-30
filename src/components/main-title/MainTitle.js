import React, { useEffect } from "react";
import "./css/MainTitle.css";
import gsap from "gsap";

const MainTitle = ({ children }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".main-title", { bottom: "0px", duration: .5 });
  });
  return (
    <div className="title-wrapper">
      <h1 className="main-title">{children}</h1>
    </div>
  );
};

export default MainTitle;
