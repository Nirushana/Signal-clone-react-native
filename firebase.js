import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfZQ5H_8KA-d3mTYMTJx1YegZ74OcxhjA",
    authDomain: "signal-clone-46b0f.firebaseapp.com",
    projectId: "signal-clone-46b0f",
    storageBucket: "signal-clone-46b0f.appspot.com",
    messagingSenderId: "1014775780596",
    appId: "1:1014775780596:web:4d33df973ab571a5f13aa1"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {auth, db};