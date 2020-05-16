import React, { useEffect, useState } from "react";
import "./css/Shop.css";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
//Components
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../../components/collection/Collection";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  });
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
