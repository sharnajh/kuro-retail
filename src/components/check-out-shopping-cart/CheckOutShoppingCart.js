import React from "react";
import "./css/CheckOutShoppingCart.css";
import CheckOutItem from "../checkout-item/CheckOutItem";

const CheckOutShoppingCart = ({ cartItems }) => (
    <div className="checkout-shopping-cart">
        <div className="header">
            <span className="title">Product</span>
            <span className="title">Description</span>
            <span className="title">Quantity</span>
            <span className="title">Price</span>
            <span className="title">Remove</span>
        </div>
        <div className="items">
            {cartItems.map((item) => (
                <CheckOutItem item={item} />
            ))}
        </div>
    </div>
)

export default CheckOutShoppingCart;