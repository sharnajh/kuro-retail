import React from "react";
import "./css/CartItem.css";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <div className="cart-item">
            <img className="image" src={imageUrl} alt={name} />
            <div className="item-info">
                <span className="name">{name}</span>
                <span className="price">${price} x{quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;