import firebase from 'firebase/app';


var firebaseConfig = {
    apiKey: "AIzaSyARxnHWpmvpFoTukDltS7CuLW1-1t6AwTU",
    authDomain: "weddingabadi.firebaseapp.com",
    databaseURL: "https://weddingabadi.firebaseio.com",
    projectId: "weddingabadi",
    storageBucket: "weddingabadi.appspot.com",
    messagingSenderId: "165991519874",
    appId: "1:165991519874:web:f9f06de157d3c68c69069b",
    measurementId: "G-YJ9DDRVFKM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;
