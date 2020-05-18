import React from "react";
import "./css/ReviewOrder.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import SummaryItem from "../summary-item/SummaryItem";

const ReviewOrder = ({ cartItems, total }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="header">
        <span className="title">Product</span>
        <span className="title">Description</span>
        <span className="title">Unit Price</span>
        <span className="title">Total Price</span>
      </div>
      {cartItems.map((item) => (
        <SummaryItem key={item.name} item={item} />
      ))}
      <div className="total-row">
        <div className="total-label">Total:</div>
        <div className="total">${total}</div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(ReviewOrder);
