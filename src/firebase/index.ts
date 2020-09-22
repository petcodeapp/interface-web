import * as firebase from 'firebase'
import environment from '../environment/environment'

const f = firebase.initializeApp(environment.firebaseConfig)

export const auth = f.auth()
