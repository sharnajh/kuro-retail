import React from "react";
import "./css/CheckOutTotal.css";
import CustomButton from "../custom-button/CustomButton";

const CheckOutTotal = ({ cartItemsTotal }) => (
  <div className="checkout-total">
    <span className="total-price">
      <span>Subtotal:</span> <span>${cartItemsTotal}</span>
    </span>
    <CustomButton className="checkout">Checkout</CustomButton>
  </div>
);

export default CheckOutTotal;
