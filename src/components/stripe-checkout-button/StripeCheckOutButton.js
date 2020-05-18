import React from "react";
import "./css/StripeCheckOutButton.css";
import CustomButton from "../custom-button/CustomButton";
import { withRouter } from "react-router-dom";

const StripeCheckOutButton = ({ price, history }) => {
  const publishableKey = "pk_test_C4TSMIwqMqiivcz3faqvkyCX00ehVMD1aY";
  return (
    <div className="stripe-checkout-button">
      <CustomButton
        className="checkout-button"
        onClick={() => history.push("/checkout")}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(StripeCheckOutButton);
