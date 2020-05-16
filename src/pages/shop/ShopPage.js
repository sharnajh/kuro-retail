import React, { useEffect } from "react";
import "./css/Shop.css";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
//Components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../../components/collection/Collection";

const ShopPage = ({ match, updateCollections }) => {
  let unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  });
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
