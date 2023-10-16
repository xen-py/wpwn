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

let cultureTitle = document.getElementById('cultureTitle')
let eventsTitle = document.getElementById('eventsTitle')
let sportsTitle = document.getElementById('sportsTitle')
let voicesTitle = document.getElementById('voicesTitle')

let articles = [] 
onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach(doc => {
        articles.push({
            ...doc.data(), id: doc.id})
    });
    cultureTitle.textContent = articles[0].fpTitle
    eventsTitle.textContent = articles[1].fpTitle
    sportsTitle.textContent = articles[2].fpTitle
    voicesTitle.textContent = articles[3].fpTitle
})

var time = Date.now()
const events2 = document.getElementById("events2");
const sports2 = document.getElementById("sports2");
const voices2 = document.getElementById("voices2");
const culture2 = document.getElementById("culture2");

events2.style.backgroundImage = "url(images/Events.jpg?"+time+")"
sports2.style.backgroundImage = "url(images/Sports.jpg?"+time+")"
voices2.style.backgroundImage = "url(images/voices.jpg?"+time+")"
culture2.style.backgroundImage = "url(images/culture2.jpg?"+time+")"

const events = document.getElementById("events");
const sports = document.getElementById("sports");
const voices = document.getElementById("voices");
const culture = document.getElementById("culture");

events.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.826) 0%, rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0) 100%),url("images/Events.jpg?'+time+'")'
events.style.backgroundSize = "cover"
events.style.backgroundPosition = "center"

sports.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.826) 0%, rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0) 100%),url("images/Sports.jpg?'+time+'")'
sports.style.backgroundSize = "cover"
sports.style.backgroundPosition = "center"

voices.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.826) 0%, rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0) 100%),url("images/voices.jpg?'+time+'")'
voices.style.backgroundSize = "cover"
voices.style.backgroundPosition = "center"

culture.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.826) 0%, rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0) 100%),url("images/culture.jpg?'+time+'")'
culture.style.backgroundSize = "cover"
culture.style.backgroundPosition = "center"

