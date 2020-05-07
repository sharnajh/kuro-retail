import React from "react";
import "./css/CheckOutTotal.css";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";

const CheckOutTotal = ({ cartItemsTotal }) => (
  <div className="checkout-total">
    <span className="total-price">
      <span>Subtotal:</span> <span>${cartItemsTotal}</span>
    </span>
    <CustomButton className="checkout">Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemsTotal: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckOutTotal);
