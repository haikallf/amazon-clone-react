import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsQ0kiGuFpaidZ22rZlLQjSFzC8PyTKg",
  authDomain: "amozan2-ae677.firebaseapp.com",
  projectId: "amozan2-ae677",
  storageBucket: "amozan2-ae677.appspot.com",
  messagingSenderId: "219554169804",
  appId: "1:219554169804:web:e9931c2171396262c81369",
  measurementId: "G-41T1KCGF4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
