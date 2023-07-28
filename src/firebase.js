import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk7woXXsYi1AagQJ35m1RuAQrR7gEcxQ8",
  authDomain: "react--clone-532da.firebaseapp.com",
  projectId: "react--clone-532da",
  storageBucket: "react--clone-532da.appspot.com",
  messagingSenderId: "14071685079",
  appId: "1:14071685079:web:99f5b2d642e22a35583592",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
