import React from "react";
import "./css/CheckOutPage.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";
import { Link } from "react-router-dom";
// Components
import MainTitle from "../../components/main-title/MainTitle";
import CheckOutShoppingCart from "../../components/check-out-shopping-cart/CheckOutShoppingCart";
import CheckOutTotal from "../../components/checkout-total/CheckOutTotal";
import CustomButton from "../../components/custom-button/CustomButton";

const CheckOutPage = ({ cartItems, cartItemsTotal }) => (
  <div className="checkout-page">
    <MainTitle>Shopping Cart</MainTitle>
    {cartItems.length > 0 ? (
      <div className="checkout-container">
        <CheckOutShoppingCart cartItems={cartItems} />
        <CheckOutTotal cartItemsTotal={cartItemsTotal} />
      </div>
    ) : (
      <div className="empty-message">
        <span>Your cart is empty</span>
        <Link to="/shop">
          <CustomButton>Shop Now</CustomButton>
        </Link>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
