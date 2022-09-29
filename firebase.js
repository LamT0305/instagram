// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe7TUeNY8ENyxhpYIUJd129HPhAMbd8dw",
  authDomain: "rn-instagram-clone-94116.firebaseapp.com",
  projectId: "rn-instagram-clone-94116",
  storageBucket: "rn-instagram-clone-94116.appspot.com",
  messagingSenderId: "1035078434596",
  appId: "1:1035078434596:web:5259fe91a99f583f8a3db1"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// Initialize Firebase
const db = firebase.firestore();
export {firebase, db}