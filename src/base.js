import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDs6Ttgl7-hTJpSAcXrtNI1kVqBzsF4qQo",
  authDomain: "menushops-e4955.firebaseapp.com",
  databaseURL: "https://menushops-e4955.firebaseio.com"
});

// Rebase -> sync a firebase endpoint with a property on your component's state - SIICK
// .database() returns the actuall database that we have

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// default export
export default base;
