import React from "react";
import "./css/ShoppingCart.css";
import { connect } from "react-redux";
import { toggleCartAction } from "../../redux/cart/cart.action";
// Assets
import { ReactComponent as ShoppingCartSVG } from "./shopping-cart.svg";

const ShoppingCart = ({ toggleCartAction, cartItems }) => {
  console.log(cartItems);
  return (
    <div className="shopping-cart" onClick={toggleCartAction}>
      <ShoppingCartSVG className="cart-icon" />
      <span className="item-count">{cartItems}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems.reduce((total, item) => total + item.quantity, 0),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartAction: () => dispatch(toggleCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
