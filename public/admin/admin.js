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



//get url and initalize other global variables
let url = window.location.href
let end = url.substring(url.length-1)
let currentArticle = parseInt(end)
let form = document.getElementById('input')
let articleText = document.getElementById('article')
let articleText2 = document.getElementById('article2')
console.log(end)

// get realtime collection data
var databaseArticles = 'error'
function getRealtimeData(){
    let articles = [] 
    onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach(doc => {
            articles.push({
                ...doc.data(), id: doc.id})
        });
        
        function changeArticle(){

            url = window.location.href
            end = url.substring(url.length-1)
            end = parseInt(end)
            console.log(end)
            loadArticles(articles, end)
         }
        
        const articleButtons = document.getElementsByClassName('navigation')
        
        articleButtons[0].addEventListener('click', ()=>{
            setTimeout(function(){
                changeArticle()
            }, 5); 
        } )
        articleButtons[1].addEventListener('click', ()=>{
            setTimeout(function(){
                changeArticle()
            }, 5); 
        } )
        articleButtons[2].addEventListener('click', ()=>{
            setTimeout(function(){
                changeArticle()
            }, 5); 
        } )
        articleButtons[3].addEventListener('click', ()=>{
            setTimeout(function(){
                changeArticle()
            }, 5); 
        } )

    })

}

function loadArticles(db, article){

    switch (article) {
        case 1:
            //sports
            articleText.textContent = db[2].boys
            articleText2.textContent = db[2].girls
            break;
        case 2:
            //pop culture
            articleText.textContent = db[0].article
            articleText2.textContent = db[2].article2
            break;
        case 3:
            //student voices
            articleText.textContent = db[3].article
            articleText2.textContent = db[2].article2
            break;
        case 4:
            //current events
            articleText.textContent = db[1].article
            articleText2.textContent = db[2].article2
            break;
    
        default:
            articleText.textContent = 'error fetching data  '
            break;
    }
}

getRealtimeData()


//var user = auth.currentUser;
//console.log(user)




function formatText(){

}