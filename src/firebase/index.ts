<<<<<<< HEAD
import environment from '../environment/environment';
import * as firebase from 'firebase';
=======
import environment from "../environment/environment";
const firebase = require("firebase");
>>>>>>> master

const f = firebase.initializeApp(environment.firebaseConfig);

export const auth = f.auth();
