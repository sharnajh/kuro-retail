import React from "react";
import "./css/ShoppingCartDropDown.css";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
// Components
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const ShoppingCartDropDown = ({ cartItems }) => {
    return (
        <div className="shopping-cart-dropdown">
            <h2 className="title">Shopping Cart</h2>
            <div className="shopping-cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CustomButton className="btn">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(ShoppingCartDropDown);