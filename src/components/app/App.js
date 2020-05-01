import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
//Components
import Header from "../../components/header/Header";
import Homepage from "../../pages/homepage/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import SignInSignUp from "../../pages/sign-in-and-sign-up/SignInSignUp";

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShot) => {
          setAuthedUser({
            authedUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
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
      <Header authedUser={authedUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
