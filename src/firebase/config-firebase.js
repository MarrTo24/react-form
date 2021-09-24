import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_J9-iQfyjp_OEoF8APUHKxhqKi5GEEZ0",
  authDomain: "contratos-react.firebaseapp.com",
  projectId: "contratos-react",
  storageBucket: "contratos-react.appspot.com",
  messagingSenderId: "116799847750",
  appId: "1:116799847750:web:ec86372e56c6240a3a7947",
  measurementId: "G-84MZ4PMY5H"
};

  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 //Autenticacion del servicio
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, db, googleAuthProvider };