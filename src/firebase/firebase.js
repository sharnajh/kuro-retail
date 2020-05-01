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
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => { auth.signInWithPopup(provider) }

export default firebase;