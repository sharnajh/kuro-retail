import React, { useState, useRef } from "react";
import gsap from "gsap";
import "./css/VHSImage.css";

const VHSImage = ({ minImgUrl, bigImgUrl, id }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const placeholder = useRef();
  console.log(placeholder.current)
  const handleImgLoad = () => {
    gsap.to(placeholder.current, { scale: 1 });
    gsap.to(placeholder.current, { opacity: 0 });
    setImgLoaded(true);
  };
  return (
    <div className="vhs-effect">
      <svg width="0" height="0">
        <filter id="r">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 "
          />
        </filter>
        <filter id="g">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 "
          />
        </filter>
        <filter id="b">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 "
          />
        </filter>
        <filter id="blur" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
      </svg>
      <img
        className="background-image"
        src={bigImgUrl}
        onLoad={handleImgLoad}
      />
      {imgLoaded ? (
        <div>
          <img className="background-image r" src={bigImgUrl} />
          <img className="background-image g" src={bigImgUrl} />
          <img className="background-image b" src={bigImgUrl} />
        </div>
      ) : (
        <img
          ref={placeholder}
          className="placeholder background-image"
          src={minImgUrl}
        />
      )}
    </div>
  );
};

export default VHSImage;
