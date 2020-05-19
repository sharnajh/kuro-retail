import React from "react";
import "./css/CartItem.css";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <div className="cart-item">
            <img className="image" src={imageUrl} alt={name} />
            <div className="item-info">
                <span className="name">{name}</span>
                <span className="quantity">IN CART: {quantity}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}

export default CartItem;