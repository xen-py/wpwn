// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
//import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCFCUlo4WIOF10Z37lFDSeUsDqYy7MF7oM",
  authDomain: "wpwnewspaper.firebaseapp.com",
  databaseURL: "https://wpwnewspaper-default-rtdb.firebaseio.com",
  projectId: "wpwnewspaper",
  storageBucket: "wpwnewspaper.appspot.com",
  messagingSenderId: "51596774612",
  appId: "1:51596774612:web:9ffe54fa5066889bf1bf41",
  measurementId: "G-B6GQMF1S9D"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);

// collection ref
const colRef = collection(db, 'articles')

// get realtime collection data

let culture = document.getElementById('cultureTitle')
let events = document.getElementById('eventsTitle')
let sports = document.getElementById('sportsTitle')
let voices = document.getElementById('voicesTitle')

let articles = [] 
onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach(doc => {
        articles.push({
            ...doc.data(), id: doc.id})
    });
    culture.textContent = articles[0].fpTitle
    events.textContent = articles[1].fpTitle
    sports.textContent = articles[2].fpTitle
    voices.textContent = articles[3].fpTitle
})


