import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIcIZTPKw0Ge0_aK8lamCswf6hrcSoFGk",
  authDomain: "imessage-clone-730d9.firebaseapp.com",
  databaseURL: "https://imessage-clone-730d9.firebaseio.com",
  projectId: "imessage-clone-730d9",
  storageBucket: "imessage-clone-730d9.appspot.com",
  messagingSenderId: "822377470930",
  appId: "1:822377470930:web:ff465ea5eb97129f77060b",
  measurementId: "G-47Z7XJ8ZQK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
