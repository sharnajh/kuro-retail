import React from "react";
import "./css/Shop.css";
import { Route } from "react-router-dom";
//Components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../../components/collection/Collection";

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
           <Route exact path={`${match.path}`} component={CollectionsOverview} />
           <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
};

export default (ShopPage);