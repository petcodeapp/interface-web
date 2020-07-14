import { observable } from 'mobx';
import UserModel from 'old/src/Models/UserModel';
import { auth } from '../../old/src/Firebase/index';

@observable
class AuthStore {
    @observable user: UserModel | null = false;
    @observable authPending: boolean = true;
    unWatchAuth: any;

    constructor() {
        this.unWatchAuth = auth.onAuthStateChanged(user => {

            this.user = user;

            this.authPending = false;
            
        })
    }

    public cleanup = () => {
        this?.unWatchAuth()
    }

    public signOut = () => {
        auth.signOut().then(() => {
            console.log("Successfully signed out!")
        }, (err) => {
            console.error("Could not sign out. " + err)
        })
    }

    public signInWithEmail = (e: string, p: string) => {
        auth.signInWithEmailAndPassword(e,p).then(() => {
            console.log("Signed in successfully!")
        }, (err) => {
            console.error("Could not sign in. " + err)
        })
    }

}

