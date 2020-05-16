import React from "react";
import "./css/withSpinner.css";

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-overlay">
        <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
