import React from "react";
import "./css/CustomButton.css";

const CustomButton = ({ children, className, ...otherProps }) => {
    return (
        <button className={`${className ? className : ""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;