// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
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
const auth = getAuth()

// collection ref
const colRef = collection(db, 'articles')

// get realtime collection data

function getRealtimeData(){
    let articles = [] 
    onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach(doc => {
            articles.push({
                ...doc.data(), id: doc.id})
        });
        console.log(articles);
    })

}

getRealtimeData()

/*
class Article {

    
    constructor(fpTitle, articleTitle, articleText, editors) {
      fpTitle = articles[0].
      this.width = width;
    }

    constructor(fpTitle, articleTitle, boysArticle, girlsArticle, editors) {
        this.height = height;
        this.width = width;
    }
    



}
*/

function formatText(){

}
var user = auth.currentUser;
console.log(user)
