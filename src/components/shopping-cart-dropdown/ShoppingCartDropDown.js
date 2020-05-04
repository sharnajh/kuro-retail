import React from "react";
import "./css/ShoppingCartDropDown.css";
import CustomButton from "../custom-button/CustomButton";

const ShoppingCartDropDown = () => {
    return (
        <div className="shopping-cart-dropdown">
            <h2 className="title">Shopping Cart</h2>
            <div className="shopping-cart-items">
            
            </div>
            <CustomButton className="btn">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default ShoppingCartDropDown;