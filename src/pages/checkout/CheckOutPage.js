import React from "react";
import "./css/CheckOutPage.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal, selectCartItems } from "../../redux/cart/cart.selector";
// Components
import MainTitle from "../../components/main-title/MainTitle";

const CheckOutPage = ({ cartItems, cartItemsTotal }) => (
    <div className="checkout-page">
        <MainTitle>Checkout</MainTitle>
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
                    <div className="row">
                        <span className="product"><img className="image" src={item.imageUrl} /></span>
                        <span className="description">{item.name}</span>
                        <span className="quantity">{item.quantity}</span>
                        <span className="price">${item.price}</span>
                        <span className="remove">X</span>
                    </div>
                ))}
            </div>
            <div className="total">
               Subtotal: ${cartItemsTotal}
            </div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);