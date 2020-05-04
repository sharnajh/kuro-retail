import React, { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import "./css/CollectionItem.css";
import gsap from "gsap";
import { connect } from "react-redux";
import { addItemAction } from "../../redux/cart/cart.action";
// Components
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ addItemAction, item }) => {
  const { id, imageUrl, name, price } = item;
  let div = useRef();
  let image = useRef();
  const handleImgLoad = () => {
    gsap.to(image.current, { opacity: 1 });
  };
  const loadImage = useIntersection({ threshold: 0.2, node: div });
  return (
    <div className="collection-item" ref={div}>
      {loadImage && (
        <img
          ref={image}
          className="image"
          src={imageUrl}
          alt={name}
          onLoad={handleImgLoad}
        />
      )}
      <CustomButton
        className="add-to-cart-button"
        onClick={() => addItemAction(item)}
      >
        ADD TO CART
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemAction: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
