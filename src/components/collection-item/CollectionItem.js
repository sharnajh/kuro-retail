import React from "react";
import "./css/CollectionItem.css";
import gsap from "gsap";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const handleImgLoad = () => {
    const div = document.getElementById(`${name}`);
    gsap.to(div, { opacity: 0 })
    gsap.to(div, { opacity: 1 })
  };
  return (
    <div className="collection-item">
      <img
        id={name}
        loading="lazy"
        className="image"
        src={imageUrl}
        alt={name}
        onLoad={handleImgLoad}
      />
      <div className="add-to-cart-button">ADD TO CART</div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
