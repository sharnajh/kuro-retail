import React, { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import "./css/CollectionItem.css";
import gsap from "gsap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItemAction } from "../../redux/cart/cart.action";
// Components
import CustomButton from "../custom-button/CustomButton";
import { selectCartItem } from "../../redux/cart/cart.selector";

const CollectionItem = ({
  history,
  itemInCart,
  addItemAction,
  item,
  item: { imageUrl, name, price },
}) => {
  // Handle image loading
  let div = useRef();
  let image = useRef();
  const handleImgLoad = () => {
    gsap.to(image.current, { opacity: 1, duration: 0.5 });
  };
  const loadImage = useIntersection({ threshold: 0, node: div });
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
      {itemInCart && (
        <div className="quantity" onClick={() => history.push("/cart")}>In Cart: {itemInCart.quantity}</div>
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

const mapStateToProps = (state, ownProps) => ({
  itemInCart: selectCartItem(ownProps.item)(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
