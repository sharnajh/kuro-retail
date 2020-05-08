import React from "react";
import "./css/StripeCheckOutButton.css";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../custom-button/CustomButton";

const StripeCheckOutButton = ({ price }) => {
  const publishableKey = "pk_test_C4TSMIwqMqiivcz3faqvkyCX00ehVMD1aY";
  const onToken = (token) => {
    console.log("Payment success");
    alert("Payment has been received!");
  };
  return (
    <div className="stripe-checkout-button">
      <StripeCheckout
        label="Checkout"
        name="KURO"
        description={`Your total is $${price}`}
        panelLabel="Checkout"
        billingAddress
        shippingAddress
        token={onToken}
        stripeKey={publishableKey}
      >
        <CustomButton className="checkout-button">Checkout</CustomButton>
      </StripeCheckout>
    </div>
  );
};

export default StripeCheckOutButton;
