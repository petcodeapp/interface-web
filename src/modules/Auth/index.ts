import { observable, computed } from "mobx";
import { auth } from "../../firebase/index";
import firebase, { User } from "firebase";

class Auth {
  @observable user: User | null = null;
  @observable authPending: boolean = true;
  unWatchAuth: any;

  constructor() {
    this.unWatchAuth = auth.onAuthStateChanged((user: User) => {
      this.user = user;

      this.authPending = false;
    });
  }

  public signOut = () => {
    auth.signOut().then(
      () => {
        console.log("Successfully signed out!");
      },
      (err: any) => {
        console.error("Could not sign out. " + err);
      }
    );
  };

  public signInWithEmail = (e: string, p: string) => {
    auth.signInWithEmailAndPassword(e, p).then(
      () => {
        console.log("Signed in successfully!");
      },
      (err: any) => {
        console.error("Could not sign in. " + err);
      }
    );
  };

  public signInWithGoogle = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log("Successfully signed in with google!"))
      .catch((err: any) => console.error("Could not sign in. " + err));
  };

  @computed get isLoggedIn() {
    return !!this.user;
  }
}

export default Auth;
