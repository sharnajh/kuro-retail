import React from "react";
import "./css/MenuItem.css";
import { withRouter } from "react-router-dom";
import VHSImage from "../vhs-image-effect/VHSImage";

const MenuItem = ({ history, title, minImgUrl, bigImgUrl, size, linkUrl }) => {
    return (
        <div className={`${size.length ? size : ""} menu-item`} onClick={() => history.push(linkUrl)}>
            <VHSImage id={title} minImgUrl={minImgUrl} bigImgUrl={bigImgUrl} title={title} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);