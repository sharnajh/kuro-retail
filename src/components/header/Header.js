import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartToggle } from "../../redux/cart/cart.selector";
import { selectAuthUser } from "../../redux/user/user.selector";
// Components
import ShoppingCartDropDown from "../shopping-cart-dropdown/ShoppingCartDropDown";
// Assets
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ShoppingCart from "../shopping-cart/ShoppingCart";

const Header = ({ authedUser, toggleCart }) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>
      <div className="options">
        <Link className="option link" to="/shop">
          SHOP
        </Link>
        <Link className="option link" to="/contact">
          CONTACT
        </Link>
        {authedUser ? (
          <div className="option link" onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link className="option link" to="/signin">
            SIGN IN
          </Link>
        )}
        <div className="option">
          <ShoppingCart />
        </div>
      </div>
      {toggleCart && <ShoppingCartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  toggleCart: selectCartToggle,
  authedUser: selectAuthUser
})

export default connect(mapStateToProps)(Header);
