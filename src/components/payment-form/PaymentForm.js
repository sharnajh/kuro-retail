import React, { useState } from "react";
import "./css/PaymentForm.css";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
// Components
import CustomButton from "../../components/custom-button/CustomButton";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import FormInput from "../form-input/FormInput";

const PaymentForm = ({ total }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const publishableKey = "pk_test_C4TSMIwqMqiivcz3faqvkyCX00ehVMD1aY";
  const stripe = loadStripe(publishableKey);
  const CARD_OPTIONS = {
    style: {
      base: {
        fontSize: "17px",
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontWeight: 500,
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
        <FormInput
          type="text"
          label="Name"
          value={name}
          handleChange={setName}
          className="name-input"
        />
        <FormInput
          type="email"
          label="Email"
          value={email}
          handleChange={setEmail}
          className="name-input"
        />
        <FormInput
          type="phone"
          label="Phone number"
          value={phone}
          handleChange={setPhone}
          className="name-input"
        />
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
