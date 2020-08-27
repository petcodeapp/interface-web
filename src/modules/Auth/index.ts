import { observable, computed, action } from "mobx";
import { auth } from "../../firebase/index";
import firebase, { User, firestore } from "firebase";

class Auth {
  @observable user: User | null = null;
  @observable newUser: boolean = true;
  @observable userData: any = null;
  @observable pets: any = [];
  @observable authPending: boolean = true;
  @observable petIds: Array<string> = [];
  unWatchAuth: any;

  constructor() {
    auth.onAuthStateChanged((user: User) => {
      this.user = user;

      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .onSnapshot(
          {
            includeMetadataChanges: true,
          },
          (userData) => {
            console.log(`New Snapshot from MobX store: ${userData}`);
            console.log(user.uid);
            // this.userData = userData.data()
            if (userData.exists) {
              this.userData = userData.data();
              this.newUser = false;

              userData.data()?.pets.forEach((pid: string) => {
                this.petIds = this.petIds.concat(pid);
                firebase
                  .firestore()
                  .collection("pets")
                  .doc(pid)
                  .onSnapshot((pet) => {
                    this.pets = this.pets.concat(pet.data());
                  });
              });
            }
          }
        );

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

  @action
  public setMedicalInfo(information: {
    specialNeeds: {
      value: string;
      visible: boolean;
    };
    allergies: {
      value: string;
      visible: boolean;
    };
    vetName: {
      value: string;
      visible: boolean;
    };
    vetNumber: {
      value: string;
      visible: boolean;
    };
  }) {
    Object.assign(this.pets[0], information);

    firestore()
      .collection("pets")
      .doc(this.petIds[0])
      .update(information)
      .then((z) => console.log());

    console.log(this.pets[0]);
  }
}

export default Auth;
