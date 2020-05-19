import React from "react";
import "./css/ShoppingCartDropDown.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selector";
// Components
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { toggleCartAction } from "../../redux/cart/cart.action";

const ShoppingCartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="shopping-cart-dropdown">
      <h2 className="title">Shopping Cart</h2>
      <div className="shopping-cart-items">
        {cartItems.length > 0 ? (
          <div className="cart-items-wrapper">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
            <div className="empty-message">Your cart is empty</div>
          )}
      </div>
      {cartItems.length > 0 ? (
        <div className="btn-group">
          <CustomButton
            className="btn"
            onClick={() => {
              dispatch(toggleCartAction());
              history.push("/cart");
            }}
          >
            GO TO Cart
        </CustomButton>
          <CustomButton
            className="btn"
            onClick={() => {
              dispatch(toggleCartAction());
              history.push("/cart/checkout");
            }}
          >
            CHECKOUT
       </CustomButton>
        </div>
      ) : (
          <CustomButton
            className="btn"
            onClick={() => {
              dispatch(toggleCartAction());
              history.push("/shop");
            }}
          >
            SHOP
          </CustomButton>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(ShoppingCartDropDown));
