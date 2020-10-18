import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsoeLI1dwgiaa45be0Ztm_jEz4t-cuTME",
  authDomain: "proyecto-final-1-afa97.firebaseapp.com",
  databaseURL: "https://proyecto-final-1-afa97.firebaseio.com",
  projectId: "proyecto-final-1-afa97",
  storageBucket: "proyecto-final-1-afa97.appspot.com",
  messagingSenderId: "838607981920",
  appId: "1:838607981920:web:a5aa652fa277059c3f2205",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}