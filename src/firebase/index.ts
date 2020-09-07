import environment from '../environment/environment';
import * as firebase from 'firebase';

const f = firebase.initializeApp(environment.firebaseConfig);

export const auth = f.auth();