import React from "react";
import "./css/StripeCheckOutButton.css";
import CustomButton from "../custom-button/CustomButton";

const StripeCheckOutButton = ({ price }) => {
  const publishableKey = "pk_test_C4TSMIwqMqiivcz3faqvkyCX00ehVMD1aY";
  return (
    <div className="stripe-checkout-button">
      <CustomButton className="checkout-button">Checkout</CustomButton>
    </div>
  );
};

export default StripeCheckOutButton;
