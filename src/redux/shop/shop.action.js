// export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

// export const updateCollections = (collectionsMap) => ({
//     type: UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

// Asynchronous Redux Method
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

export const shopActionsTypes = {
    FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
    FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
    FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE"
};

// const fetchCollectionsStart = () => ({
//     type: shopActionsTypes.FETCH_COLLECTIONS_START
// });

const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

const fetchCollectionsError = (errorMessage) => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        //dispatch(fetchCollectionsStart());
        collectionRef
            .get()
            .then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            }).catch(error => dispatch(fetchCollectionsError(error)));
    };
};