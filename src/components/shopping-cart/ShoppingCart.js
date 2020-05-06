import React from "react";
import "./css/ShoppingCart.css";
import { connect } from "react-redux";
import { toggleCartAction } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartAction: () => dispatch(toggleCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
