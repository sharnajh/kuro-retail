import React from "react";
import "./css/CheckOutItem.css";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/cart/cart.action";

const CheckOutItem = ({ removeItemFromCart, item: { id, imageUrl, name, quantity, price } }) => (
    <div className="row">
        <span className="product"><img className="image" src={imageUrl} alt={name} /></span>
        <span className="description">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">${price}</span>
        <span className="remove" onClick={() => removeItemFromCart(id)}>&#10006;</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);