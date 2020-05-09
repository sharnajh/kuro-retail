import React, { useEffect } from "react";
import "./css/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { connect } from "react-redux";
import { setAuthedUser } from "../../redux/user/user.action";
import { selectAuthUser } from "../../redux/user/user.selector";
//Components
import Header from "../../components/header/Header";
import Homepage from "../../pages/homepage/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import SignInSignUp from "../../pages/sign-in-and-sign-up/SignInSignUp";
import CheckOutPage from "../../pages/checkout/CheckOutPage";
import ScrollToTop from "../ScrollToTop";

const App = ({ setAuthedUser, authedUser }) => {
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
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (authedUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/cart" component={CheckOutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authedUser: selectAuthUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (user) => dispatch(setAuthedUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
