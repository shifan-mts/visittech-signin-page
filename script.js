import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { get, child } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyD0mCOfk-h-uYv5TsGm3vKVuiqj6jw8_FE",
    authDomain: "shif10.firebaseapp.com",
    databaseURL: "https://shif10-default-rtdb.firebaseio.com",
    projectId: "shif10",
    storageBucket: "shif10.firebasestorage.app",
    messagingSenderId: "745107646730",
    appId: "1:745107646730:web:33f8d59c3bc964ceebf2f3"
  };
  
  // initialize firebase
const app =  initializeApp(firebaseConfig);
const db = getDatabase(app); // `app` is your initialized Firebase app



// Function to fetch data once
const fetchDataOnce = () => {
  const dbRef = ref(db); // Root reference
  get(child(dbRef, "contactForm/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val()); // Logs the fetched data
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Call the function
fetchDataOnce();
