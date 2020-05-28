import React, { useRef } from "react";
import "./css/CheckOutItem.css";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  removeItemAction,
  addItemAction,
} from "../../redux/cart/cart.action";
import gsap from "gsap";

const CheckOutItem = ({
  removeItemAction,
  removeItemFromCart,
  addItemAction,
  item,
  item: { imageUrl, name, quantity, price },
}) => {
  const row = useRef();
  const handleRemove = (item) => {
    gsap.to(row.current, {
      opacity: 0,
      height: 0,
      duration: 0.3,
      onComplete: () => removeItemFromCart(item),
    });
  };
  const handleQuantityRemove = item => {
    if (quantity === 1) {
      return gsap.to(row.current, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        onComplete: () => removeItemAction(item),
      });
    }
    return removeItemAction(item);
  }
  return (
    <div className="row" ref={row}>
      <span className="product">
        <img className="image" src={imageUrl} alt={name} />
      </span>
      <span className="description">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleQuantityRemove(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemAction(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove" onClick={() => handleRemove(item)}>
        &#10006;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItemAction: (item) => dispatch(removeItemAction(item)),
  addItemAction: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
