import { observable, computed } from "mobx";
import { auth } from "../../firebase/index";
import firebase, { User } from "firebase";

class Auth {
  @observable user: User | null = null;
  @observable newUser: boolean = true;
  @observable userData: any = null;
  @observable pets: any = [];
  @observable authPending: boolean = true;
  unWatchAuth: any;

  constructor() {
    auth.onAuthStateChanged((user: User) => {
      this.user = user;

      firebase.firestore().collection('users').doc(user.uid).onSnapshot({
        includeMetadataChanges: true,

      }, userData => {
        console.log(`New Snapshot from MobX store: ${userData}`)
        // this.userData = userData.data()
        if(userData.exists) {
          this.userData = userData.data()
          this.newUser = false

          userData.data()?.pets.forEach((pid: string) => {
            firebase.firestore().collection('pets').doc(pid).onSnapshot(pet => {
              this.pets = this.pets.concat(pet.data())
            })
          })
        }
      })

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
