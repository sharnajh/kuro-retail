import React from 'react';
import './css/App.css';
import { Switch, Route } from "react-router-dom";
//Components
import Header from "../../components/header/Header";
import Homepage from "../../pages/homepage/Homepage";
import ShopPage from "../../pages/shop/ShopPage";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
