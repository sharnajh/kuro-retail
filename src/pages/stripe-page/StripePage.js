import React from "react";
import "./css/StripePage.css";
import MainTitle from "../../components/main-title/MainTitle";
import PaymentForm from "../../components/payment-form/PaymentForm";
import ReviewOrder from "../../components/review-order/ReviewOrder";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const StripePage = ({ cartItems }) => {
  if (cartItems <= 0) {
    return <Redirect to="/cart" />;
  }
  return (
    <div className="stripe-page">
      <MainTitle>Checkout</MainTitle>
      <div className="stripe-wrapper">
        <PaymentForm />
        <ReviewOrder />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsCount,
});

export default connect(mapStateToProps)(StripePage);
