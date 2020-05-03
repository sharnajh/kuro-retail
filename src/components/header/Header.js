import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
// Assets
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = ({ authedUser }) => {
  console.log(authedUser);
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
        <div className="option shopping-cart">
          <span role="image" aria-label="jsx-a11y/aria-role">
            🐱‍🚀
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authedUser: state.user.authedUser,
  };
};

export default connect(mapStateToProps)(Header);
