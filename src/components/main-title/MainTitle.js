import React, { useEffect, useRef } from "react";
import "./css/MainTitle.css";
import gsap from "gsap";
import { withRouter } from "react-router-dom";
import PathTree from "../path-tree/PathTree";

const MainTitle = ({ children }) => {
  const title = useRef();
  useEffect(() => {
    gsap.to(title.current, { bottom: "0px", duration: 0.5 });
  });
  return (
    <div className="title-wrapper">
      <PathTree />
      <h1 className="main-title" ref={title}>
        {children}
      </h1>
    </div>
  );
};

export default withRouter(MainTitle);
