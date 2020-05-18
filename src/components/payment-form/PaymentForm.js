import React from "react";
import "./css/PaymentForm.css";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
// Components
import CustomButton from "../../components/custom-button/CustomButton";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const PaymentForm = ({ total }) => {
  const publishableKey = "pk_test_C4TSMIwqMqiivcz3faqvkyCX00ehVMD1aY";
  const stripe = loadStripe(publishableKey);
  const CARD_OPTIONS = {
    style: {
      base: {
        fontSize: "17px",
      },
    },
  };
  return (
    <div className="checkout">
      <Elements stripe={stripe}>
        <h2>Enter payment details</h2>
        <div className="warning">
          This is a project site only. Please do not enter real payment
          information.
        </div>
        <CardElement options={CARD_OPTIONS} />
        <CustomButton className="button">Pay ${total}</CustomButton>
      </Elements>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
    total: selectCartTotal
})

export default connect(mapStateToProps)(PaymentForm);
