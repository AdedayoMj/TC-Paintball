import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"


const Config = {
    apiKey: "AIzaSyCj2v8AZ342ADs9S7e2M6NbLMHh_njo9iQ",
    authDomain: "paintball-eb209.firebaseapp.com",
    databaseURL: "https://paintball-eb209.firebaseio.com",
    projectId: "paintball-eb209",
    storageBucket: "paintball-eb209.appspot.com",
    messagingSenderId: "1032627758016",
    appId: "1:1032627758016:web:0dce838ad7e717210c5e25",
    measurementId: "G-C3QFL740ZV"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase



