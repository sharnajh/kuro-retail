import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBC9-mNvqvk9jmUVApwKIMAONpxRajkkfo",
    authDomain: "kuro-retail.firebaseapp.com",
    databaseURL: "https://kuro-retail.firebaseio.com",
    projectId: "kuro-retail",
    storageBucket: "kuro-retail.appspot.com",
    messagingSenderId: "604245767437",
    appId: "1:604245767437:web:5e6e4c932e587b46fbec44"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection("users");
    const snapshot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    //console.log("collection: ", collectionSnapshot.docs.map(doc => doc.data()))
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    // Batch is to batch requests into single requests in case internet cuts off in the middle of request
    const batch = firestore.batch();
    objectsToAdd.forEach((object) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });
    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => { auth.signInWithPopup(provider) }

export default firebase;