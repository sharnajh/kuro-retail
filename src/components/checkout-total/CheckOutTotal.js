import React, { useRef, useEffect } from "react";
import "./css/CheckOutTotal.css";
import StripeCheckOutButton from "../stripe-checkout-button/StripeCheckOutButton";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import AnimatedNumber from "react-animated-number";

const CheckOutTotal = ({ cartItemsTotal }) => {
  const node = useRef();
  useEffect(() => {
    console.log("current: ", node.current.getBoundingClientRect());
  })
  return (
    <div className="checkout-total" ref={node}>
      <span className="total-price">
        <span>Subtotal:</span>{" "}
        <span>
          $
          <AnimatedNumber
            initialValue={cartItemsTotal}
            value={cartItemsTotal}
            duration={300}
            stepPrecision={0}
          />
        </span>
      </span>
      <StripeCheckOutButton price={cartItemsTotal} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckOutTotal);
