import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYKCjiufel263oK_RKcDlvfUgpidveIcw",
  authDomain: "fir-54a32.firebaseapp.com",
  projectId: "fir-54a32",
  storageBucket: "fir-54a32.appspot.com",
  messagingSenderId: "1079832595279",
  appId: "1:1079832595279:web:0d0de16199e24680b0533a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
