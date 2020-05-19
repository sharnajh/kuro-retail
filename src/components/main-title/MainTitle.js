import React, { useEffect, useRef } from "react";
import "./css/MainTitle.css";
import gsap from "gsap";
import { withRouter } from "react-router-dom";

const MainTitle = ({ children, location: { pathname }, history, match }) => {
  const params = pathname.split("/");
  const title = useRef();
  useEffect(() => {
    gsap.to(title.current, { bottom: "0px", duration: 0.5 });
  });
  const joinUrl = (index) => {
    return params.slice(0, index + 1).join("/");
  };
  const handleUrlPush = (index) => {
    if (index === 0) {
      history.push("/");
    }
    history.push(joinUrl(index));
  };
  return (
    <div className="title-wrapper">
      <div className="url-path">
        {params.map((path, index) => (
          <span
            key={path}
            className={`path ${joinUrl(index) !== pathname ? "active" : ""}`}
            onClick={() => handleUrlPush(index)}
          >
            {path === "" ? "home" : path}
          </span>
        ))}
      </div>
      <h1 className="main-title" ref={title}>
        {children}
      </h1>
    </div>
  );
};

export default withRouter(MainTitle);
