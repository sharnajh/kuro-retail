import React from "react";
import "./css/FormInput.css";

const FormInput = ({ handleChange, label, value, ...props }) => {
  return (
    <div className="input-group">
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
