import React from "react";
import "./css/FormInput.css";

const FormInput = ({ handleChange, label, value, className, ...props }) => {
  return (
    <div className={`input-group ${className}`}>
      <input
        className="form-input"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        {...props}
      />
      {label && (
        <label className={`form-input-label ${value.length ? "shrink" : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
