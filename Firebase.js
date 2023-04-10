import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsOxU3TDRHpS5QA-wVdoCJCI5EkEcu2-o",
    authDomain: "clone-95d14.firebaseapp.com",
    projectId: "clone-95d14",
    storageBucket: "clone-95d14.appspot.com",
    messagingSenderId: "993366634199",
    appId: "1:993366634199:web:2d7efe7e37a13f51dfca92",
    measurementId: "G-QHVYHCESSL"
  };

  const firbaseApp = firebase.initializeApp(firebaseConfig)
  const db = firbaseApp.firestore();
  const auth = firebase.auth();

  const provider= new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};