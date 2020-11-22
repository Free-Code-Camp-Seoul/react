import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDGrL_ukYVemFER4_wKiCLWrbdNAWijtGU",
  authDomain: "fcc-react-50845.firebaseapp.com",
  databaseURL: "https://fcc-react-50845.firebaseio.com",
  projectId: "fcc-react-50845",
  storageBucket: "fcc-react-50845.appspot.com",
  messagingSenderId: "199198808804",
  appId: "1:199198808804:web:5dce427bccb300f3526af1",
  measurementId: "G-BZVWW3MJMQ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
