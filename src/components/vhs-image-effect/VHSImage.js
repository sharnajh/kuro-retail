import React from "react";
import "./css/VHSImage.css";

const VHSImage = ({ imgUrl }) => {
    return (
        <div className="vhs-effect">
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
        </div>
    )

}

export default VHSImage;