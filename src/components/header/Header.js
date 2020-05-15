import React from "react";
import "./css/Header.css";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartToggle } from "../../redux/cart/cart.selector";
import { selectAuthUser } from "../../redux/user/user.selector";
// Components
import ShoppingCartDropDown from "../shopping-cart-dropdown/ShoppingCartDropDown";
// Assetss
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ShoppingCart from "../shopping-cart/ShoppingCart";

const Header = ({ authedUser, toggleCart }) => {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo">
          <Logo />
        </div>
      </NavLink>
      <div className="options">
        <NavLink className="shop option link" activeClassName="active" to="/shop">
          SHOP <div className="arrow">❮</div>
        </NavLink>
        <NavLink className="option link" activeClassName="active" to="/contact">
          CONTACT
        </NavLink>
        {authedUser ? (
          <div className="option link" activeClassName="active" onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
            <NavLink className="option link" activeClassName="active" to="/signin">
              SIGN IN
            </NavLink>
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
