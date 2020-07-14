import firebase from 'firebase';
import environment from '../environment/environment';

firebase.initializeApp({
    apiKey: "AIzaSyAoHlfhxjCJsF45xPFfNHbG3bWQsuOHJXQ",
    authDomain: "petcode-b1e6e.firebaseapp.com",
    databaseURL: "https://petcode-b1e6e.firebaseio.com",
    projectId: "petcode-b1e6e",
    storageBucket: "petcode-b1e6e.appspot.com",
    messagingSenderId: "858374127167",
    appId: "1:858374127167:web:6b0270a202b7a666ad828a",
    measurementId: "G-RHSZE35L55"
});

export const auth = firebase.auth();

export const db = firebase.firestore();