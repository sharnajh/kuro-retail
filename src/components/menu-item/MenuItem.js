import React from "react";
import "./css/MenuItem.css";
import VHSImage from "../vhs-image-effect/VHSImage";

const MenuItem = ({ title, minImgUrl, bigImgUrl, size }) => {
    return (
        <div className={`${size.length ? size : ""} menu-item`}>
            <VHSImage id={title} minImgUrl={minImgUrl} bigImgUrl={bigImgUrl} title={title} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;