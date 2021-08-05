import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvaVvYW1EwW6pCrMENM5ylFLcIF47W7bI",
    authDomain: "proyecto-titulando.firebaseapp.com",
    projectId: "proyecto-titulando",
    storageBucket: "proyecto-titulando.appspot.com",
    messagingSenderId: "1062304195448",
    appId: "1:1062304195448:web:c36d51eafa193e3f88de8d"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);
  export const db=fb.firestore();