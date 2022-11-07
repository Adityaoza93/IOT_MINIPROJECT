import firebase from "firebase/compat/app";
import "firebase/compat/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyAkGsc6urg6wEkV2MmpwKMp208fRlrlPLI",
  authDomain: "arduinogasproject.firebaseapp.com",
  databaseURL: "https://arduinogasproject-default-rtdb.firebaseio.com",
  projectId: "arduinogasproject",
  storageBucket: "arduinogasproject.appspot.com",
  messagingSenderId: "888584033864",
  appId: "1:888584033864:web:04a4de04c524533e296a7d"
};


const fireDB = firebase.initializeApp(firebaseConfig)
export default fireDB.database().ref();   