import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { connect } from "react-redux";
import { setAuthedUser } from "../../redux/user/user.action";
//Components
import Header from "../../components/header/Header";
import Homepage from "../../pages/homepage/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import SignInSignUp from "../../pages/sign-in-and-sign-up/SignInSignUp";

const App = ({ setAuthedUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShot) => {
          setAuthedUser({
              id: snapShot.id,
              ...snapShot.data(),
          });
        });
      }
      setAuthedUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: user => dispatch(setAuthedUser(user))
});

export default connect(null, mapDispatchToProps)(App);
