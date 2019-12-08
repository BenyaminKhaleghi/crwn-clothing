import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUDXHwi-AaawM6zwAPLL3f13rOTuls-gg",
  authDomain: "crwn-db-df6dc.firebaseapp.com",
  databaseURL: "https://crwn-db-df6dc.firebaseio.com",
  projectId: "crwn-db-df6dc",
  storageBucket: "crwn-db-df6dc.appspot.com",
  messagingSenderId: "325503234359",
  appId: "1:325503234359:web:237487f7dc99fe2fa26ab2",
  measurementId: "G-BRQXXNK9QT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;