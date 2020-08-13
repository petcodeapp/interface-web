import environment from "../environment/environment";
const firebase = require("firebase");

const f = firebase.initializeApp(environment.firebaseConfig);

export const auth = f.auth();
