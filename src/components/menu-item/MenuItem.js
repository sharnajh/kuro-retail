import React from "react";
import "./css/MenuItem.css";

const MenuItem = ({ title, imgUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <svg width="0" height="0">
                <filter id="r"><feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 " />
                </filter>
                <filter id="g"><feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 " />
                </filter>
                <filter id="b"><feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 " />
                </filter>
            </svg>
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="background-image r" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="background-image g" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="background-image b" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;