import React from "react";
import "./css/ShoppingCart.css";
import { ReactComponent as ShoppingCartSVG } from "./shopping-cart.svg"

const ShoppingCart = () => {
    return (
        <div className="shopping-cart">
            <ShoppingCartSVG />
        </div>
    )
}

export default ShoppingCart;