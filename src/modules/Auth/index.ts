import { observable, computed, action, observe } from "mobx";
import { auth } from "../../firebase/index";
import firebase, { User, firestore } from "firebase";
import { Reminder } from "../../Models/Reminder";

class Auth {
  @observable user: User | null = null;
  @observable newUser: boolean = true;
  @observable userData: any = null;
  @observable pets: any = [];
  @observable authPending: boolean = true;
  @observable petIds: Array<string> = [];
  unWatchAuth: any;

  constructor() {
    auth.onAuthStateChanged((user) => {
      this.user = user;

      if (user) {
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
                console.log(userData.data());
                this.userData = userData.data();
                this.newUser = false;

                console.log(userData.data());

                userData.data()?.pets.forEach((pid: string) => {
                  this.petIds = this.petIds.concat(pid);
                  firebase
                    .firestore()
                    .collection("pets")
                    .doc(pid)
                    .onSnapshot((pet) => {
                      this.pets = this.pets.concat(pet.data());
                      console.log(pet.data());
                    });
                });
              }
            }
          );
      }

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

  @action
  public addNewReminder = (reminder: Reminder) => {
    const { stringify, parse } = JSON;

    const r = parse(stringify(this.pets[0].reminders));

    console.log(r.concat(reminder));

    this.pets[0].reminders = r.concat(reminder);

    firestore().collection("pets").doc(this.petIds[0]).update({
      reminders: r,
    });
  };

  public signInWithGoogle = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log("Successfully signed in with google!"))
      .catch((err: any) => console.error("Could not sign in. " + err));
  };

  public async createNewUser(e: string, p: string, pet: string) {
    const defaultPet = {
      profileUrl:
        "https://firebasestorage.googleapis.com/v0/b/petcode-b1e6e.appspot.com/o/petProfilePictures%2F123456?alt=media&token=05a87e2e-0d1f-447c-bf1d-9fad6d28cc4f",
      contacts: [
        {
          name: {
            visible: true,
            value: "awef",
          },
          phoneNumber: {
            visible: true,
            value: "1938458",
          },
          email: {
            value: "awef",
            visible: true,
          },
          address: {
            visible: true,
            value: "aewf",
          },
        },
      ],
      scans: [
        {
          location: {
            Va: 30,
            ga: -96,
          },
          date: {
            seconds: 1596603600,
            nanoseconds: 0,
          },
        },
        {
          date: {
            seconds: 1596693600,
            nanoseconds: 0,
          },
          location: {
            Va: 30,
            ga: -97,
          },
        },
        {
          location: {
            Va: 50,
            ga: 50,
          },
          date: {
            seconds: 1596488400,
            nanoseconds: 0,
          },
        },
      ],
      vetPhoneNumber: {
        visible: true,
        value: "415869",
      },
      species: "Dog",
      medications: null,
      isServiceAnimal: "No",
      pid: "123456",
      isAdopted: true,
      vetNumber: {
        value: "415869",
        visible: true,
      },
      name: "Reggie",
      additionalInfo:
        "I like to dig holes. I am a very good boy though. I like to dig holes in the back yard and chase squirrels",
      reminders: [
        {
          date: "2020-08-02",
          notificationMethod: "email",
          name: "Talk to Vet",
          frequency: "weekly",
          time: "09:00",
          enabled: true,
        },
      ],
      specialNeeds: {
        value: "Vaccinations need to be done twice as often",
        visible: true,
      },
      age: 10,
      color: "Yelloweee",
      breed: "Collie",
      allergies: {
        visible: true,
        value: "None",
      },
      isLost: false,
      birthday: "2020-07-07",
      vetName: {
        value: "Johnsawee",
        visible: true,
      },
      temperament: "Caawfe",
      vaccinations: [
        {
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/petcode-b1e6e.appspot.com/o/vaccineImages%2F123456vaccine0?alt=media&token=18642c4b-2af9-4be7-8cc4-d10437deaad9",
          name: "Rabies wow",
          date: {
            seconds: 1596258000,
            nanoseconds: 0,
          },
        },
        {
          name: "DHPP",
          date: {
            seconds: 1596258000,
            nanoseconds: 0,
          },
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/petcode-b1e6e.appspot.com/o/vaccineImages%2F123456vaccine1?alt=media&token=e775d69b-dd7f-4a62-af34-71a8e495d543",
        },
        {
          name: "Leptospirosis",
          imageUrl: null,
          date: {
            seconds: 1597899600,
            nanoseconds: 0,
          },
        },
      ],
    };
    await auth.createUserWithEmailAndPassword(e, p).then(async (user) => {
      this.pets = this.pets.concat(defaultPet);
      await firebase.firestore().collection("pets").doc(pet).update(defaultPet);

      await firebase
        .firestore()
        .collection("users")
        .doc(user.user?.uid)
        .update({
          name: "John doe",
          pets: [pet],
        });
      // user.user?.uid
    });
  }

  @action
  public async setReminderInfo(idx: number, reminder: Reminder) {
    const { stringify, parse } = JSON;
    console.log("invoked");

    console.log(reminder, idx);

    console.log(parse(stringify(this.pets[0].reminders)));

    const reminders = parse(stringify(this.pets[0].reminders));
    reminders[idx] = reminder;

    this.pets[0].reminders = reminders;

    console.log(parse(stringify(this.pets[0].reminders)));

    await firestore().collection("pets").doc(this.petIds[0]).update({
      reminders: reminders,
    });
  }

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

  @action
  public updatePet(pet: any) {
    Object.assign(this.pets[0], pet);

    firestore()
      .collection("pets")
      .doc(this.petIds[0])
      .update(pet)
      .then((z) => console.log());

    console.log(this.pets[0]);
  }

  @action
  public addVaccination(vaccination: { name: string; date: string }) {
    this.pets[0].vaccinations = this.pets[0].vaccinations.concat(vaccination);

    firestore().collection("pets").doc(this.petIds[0]).update({
      vaccinations: this.pets[0].vaccinations,
    });
  }
}

export default Auth;
