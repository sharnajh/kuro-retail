import React from "react";
import gsap from "gsap";
import "./css/VHSImage.css";

const VHSImage = ({ imgUrl, id }) => {
    const handleImgLoad = () => {
        const div = document.getElementById(`${id}`)
        gsap.to(div, { opacity: 1 })
      };
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
            <img id={id} className="background-image" src={imgUrl} />
            <img className="background-image r" src={imgUrl} />
            <img className="background-image g" src={imgUrl} />
            <img className="background-image b" src={imgUrl} onLoad={handleImgLoad} />
        </div>
    )

}

export default VHSImage;