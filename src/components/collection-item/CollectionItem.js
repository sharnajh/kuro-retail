import React, { useRef, useEffect, useState } from "react";
import "./css/CollectionItem.css";
import gsap from "gsap";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const [loadImage,setLoadImage] = useState(false);
  let div = useRef(null);
  let image = useRef(null);
  const handleImgLoad = () => {
    gsap.to(image, { opacity: 1 });
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setLoadImage(true) };
      })
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(div);
    return () => {
      observer.disconnect();
    }
  })
  return (
    <div
      className="collection-item"
      ref={(element) => {
        div = element;
      }}
    >
      {loadImage && <img
        ref={(element) => {
          image = element;
        }}
        className="image"
        src={imageUrl}
        alt={name}
        onLoad={handleImgLoad}
      />}
      <div className="add-to-cart-button">ADD TO CART</div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
