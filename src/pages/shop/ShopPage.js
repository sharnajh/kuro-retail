import React, { useEffect, useState } from "react";
import "./css/Shop.css";
import { Route } from "react-router-dom";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsFetchingCollection } from "../../redux/shop/shop.selector";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
//Components
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../../components/collection/Collection";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection);

const ShopPage = ({ match, isFetching, fetchCollectionsStartAsync }) => {
  //const [loading, setLoading] = useState(true);
  //let unsubscribeFromSnapshot = null;
  useEffect(() => {
    fetchCollectionsStartAsync();
    // const collectionRef = firestore.collection("collections");
    // // Promise method
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });
    // Firebase method
    // unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });
  });
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={isFetching} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingCollection
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
