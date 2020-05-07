import React from "react";
import "./css/CheckOutItem.css";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  removeItemAction,
  addItemAction
} from "../../redux/cart/cart.action";

const CheckOutItem = ({
  removeItemAction,
  removeItemFromCart,
  addItemAction,
  item,
  item: { imageUrl, name, quantity, price },
}) => (
  <div className="row">
    <span className="product">
      <img className="image" src={imageUrl} alt={name} />
    </span>
    <span className="description">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItemAction(item)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItemAction(item)}>&#10095;</div>
    </span>
    <span className="price">${price}</span>
    <span className="remove" onClick={() => removeItemFromCart(item)}>
      &#10006;
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  removeItemAction: (item) => dispatch(removeItemAction(item)),
  addItemAction: (item) => dispatch(addItemAction(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
