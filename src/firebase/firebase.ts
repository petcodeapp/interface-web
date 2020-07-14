import firebase from "firebase";
import environment from '../../environment/environment';

export const f = firebase.initializeApp(environment.firebaseConfig);

