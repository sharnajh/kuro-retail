import React from "react";
import "./css/MenuItem.css";
import VHSImage from "../vhs-image-effect/VHSImage";

const MenuItem = ({ title, imgUrl, size }) => {
    return (
        <div className={`${size.length ? size : ""} menu-item`}>
            <VHSImage imgUrl={imgUrl} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;