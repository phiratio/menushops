import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
//PRIVATE INFO HERE
});

// Rebase -> sync a firebase endpoint with a property on your component's state - SIICK
// .database() returns the actuall database that we have

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// default export
export default base;
