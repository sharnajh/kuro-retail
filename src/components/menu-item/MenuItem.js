import React from "react";
import "./css/MenuItem.css";

const MenuItem = ({ title, imgUrl, size }) => {
    return (
        <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}

export default MenuItem;