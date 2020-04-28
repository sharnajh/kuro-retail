import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo"><Logo /></div>
            </Link>
            <div className="options">
                <Link className="option link" to="/shop">SHOP</Link>
                <Link className="option link" to="/contact">CONTACT</Link>
                <Link className="option link" to="/signin">SIGN IN</Link>
                <div className="option shopping-cart">
                    🐱‍🚀
                </div>
            </div>
        </div>
    )
}

export default Header;