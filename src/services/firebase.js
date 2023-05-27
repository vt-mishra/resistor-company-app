 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB_NA6A_2A5to6cilnGX2SPGUWuK-53IvA",
    authDomain: "htrgraphjcs.firebaseapp.com",
    databaseURL:
      "https://htrgraphjcs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "htrgraphjcs",
    storageBucket: "htrgraphjcs.appspot.com",
    messagingSenderId: "437371877002",
    appId: "1:437371877002:web:a74ec2bdaa4e82997c1f73",
    measurementId: "G-FYCK3YLDHH",
 };
 // Initialize Firebase

 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);