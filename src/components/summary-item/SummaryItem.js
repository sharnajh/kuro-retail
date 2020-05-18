import React from "react";
import "./css/SummaryItem.css";

const SummaryItem = ({ item: { name, imageUrl, quantity, price } }) => {
    return (
        <div className="summary-item">
            <span className={`image ${quantity > 1 ? "copious" : ""}`} data-quantity={quantity}>
                <img src={imageUrl} alt="name" />
            </span>
            <span className="name">{name}</span>
            <span className="price">
                ${price} {quantity > 1 && `x ${quantity}`}
            </span>
            <span className="total">${price * quantity}</span>
        </div>
    )
}

export default SummaryItem;