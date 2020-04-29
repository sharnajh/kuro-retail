import React, { lazy } from "react";
import "./css/CollectionItem.css";

const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className="collection-item">
            <img className="image" loading="lazy" src={imageUrl} alt={name} />
            <div className="add-to-cart-button">
                ADD TO CART
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;