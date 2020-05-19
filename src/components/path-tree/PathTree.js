import React from "react";
import "./css/PathTree.css";
import { withRouter } from "react-router-dom";

const PathTree = ({ location: { pathname }, history }) => {
  const params = pathname.split("/");
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
    <div className="path-tree">
      {params.map((path, index) => (
        <span
          key={path}
          className={`path ${joinUrl(index) !== pathname ? "active" : "inactive"}`}
          onClick={() => handleUrlPush(index)}
        >
          {path === "" ? "home" : path}
        </span>
      ))}
    </div>
  );
};

export default withRouter(PathTree);
