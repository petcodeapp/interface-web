import firebase from 'firebase';
import environment from '../environment/environment';

firebase.initializeApp(environment.firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();