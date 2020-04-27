import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.js";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo"> <Logo /></div>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <div className="shopping-cart">

                </div>
            </div>
        </div>
    )
}

export default Header;