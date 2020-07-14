import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyBnOKy0aJtSl8X9FjmC-eRJyT1_nlwksWA",
    authDomain: "react-mobx-firebase.firebaseapp.com",
    databaseURL: "https://react-mobx-firebase.firebaseio.com",
    storageBucket: "react-mobx-firebase.appspot.com",
});

export const db = firebase.firestore();

export const auth = firebase.auth();

export const users = db.doc("users");

export const pets = db.doc("pets");

export default firebase;
