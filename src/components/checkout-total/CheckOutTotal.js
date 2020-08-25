import React, { useState, useRef, useEffect } from "react";
import "./css/CheckOutTotal.css";
import StripeCheckOutButton from "../stripe-checkout-button/StripeCheckOutButton";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import AnimatedNumber from "react-animated-number";

const CheckOutTotal = ({ cartItemsTotal }) => {
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const parent = useRef();
  const node = useRef();
  useEffect(() => {
    const getDimensions = () => {
      setTop(node.current.getBoundingClientRect().top);
      setWidth(parent.current.getBoundingClientRect().width);
    };
    if (node.current && parent.current) {
      getDimensions();
      window.addEventListener("resize", getDimensions);
    }
    return () => {
      window.removeEventListener("resize", getDimensions);
    };
  }, [node, parent]);
  useEffect(() => {
    const handleSticky = () => {
      if (node.current) {
        console.log(top, window.scrollY);
        if (top - 90 < window.scrollY) {
          node.current.style.position = "fixed";
          node.current.style.top = 0;
          node.current.style.width = width + "px";
        } else {
          node.current.style.position = "relative";
        }
      }
    };
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, [handleSticky]);
  return (
    <div className="parent-wrapper" ref={parent}>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckOutTotal);
