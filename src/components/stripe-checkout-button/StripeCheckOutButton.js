import React from "react";
import "./css/StripeCheckOutButton.css";
import CustomButton from "../custom-button/CustomButton";
import { withRouter } from "react-router-dom";

const StripeCheckOutButton = ({ history }) => {
  return (
    <div className="stripe-checkout-button">
      <CustomButton
        className="checkout-button"
        onClick={() => history.push("/cart/checkout")}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(StripeCheckOutButton);
