import React from "react";
import "./css/CheckOutTotal.css";
import StripeCheckOutButton from "../stripe-checkout-button/StripeCheckOutButton";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";

const CheckOutTotal = ({ cartItemsTotal }) => (
  <div className="checkout-total">
    <span className="total-price">
      <span>Subtotal:</span> <span>${cartItemsTotal}</span>
    </span>
    <StripeCheckOutButton price={cartItemsTotal} />
  </div>
);

const mapStateToProps = (state) => ({
  cartItemsTotal: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckOutTotal);
