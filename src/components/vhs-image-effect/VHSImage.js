import React, { useState, useRef } from "react";
import gsap from "gsap";
import "./css/VHSImage.css";

const VHSImage = ({ minImgUrl, bigImgUrl, title }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const placeholder = useRef();
  const bigImg = useRef();
  const handleImgLoad = async () => {
    await gsap.to(placeholder.current, { opacity: 0, filter: "blur(30px)" });
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
      </svg>
      <img
        ref={bigImg}
        className="background-image"
        src={bigImgUrl}
        onLoad={handleImgLoad}
        alt={title}
      />
      {imgLoaded ? (
        <div>
          <img className="background-image r" src={bigImgUrl} alt={title} />
          <img className="background-image g" src={bigImgUrl} alt={title} />
          <img className="background-image b" src={bigImgUrl} alt={title} />
        </div>
      ) : (
        <img
          ref={placeholder}
          className="placeholder background-image"
          src={minImgUrl}
          alt={title}
        />
      )}
    </div>
  );
};

export default VHSImage;
