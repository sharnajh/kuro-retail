import React, { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import "./css/CollectionItem.css";
import gsap from "gsap";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  let div = useRef();
  let image = useRef();
  const handleImgLoad = () => {
    gsap.to(image.current, { opacity: 1 });
  };
  const loadImage = useIntersection({ threshold: 0.2, node: div });
  return (
    <div
      className="collection-item"
      ref={div}
    >
      {loadImage && (
        <img
          ref={image}
          className="image"
          src={imageUrl}
          alt={name}
          onLoad={handleImgLoad}
        />
      )}
      <div className="add-to-cart-button">ADD TO CART</div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
