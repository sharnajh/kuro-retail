import React, { useEffect, useRef } from "react";
import "./css/MainTitle.css";
import gsap from "gsap";

const MainTitle = ({ children }) => {
  const title = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(title.current, { bottom: "0px", duration: .5 });
  });
  return (
    <div className="title-wrapper">
      <h1 className="main-title" ref={title}>{children}</h1>
    </div>
  );
};

export default MainTitle;
