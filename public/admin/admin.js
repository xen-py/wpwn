// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
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

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//get url and initalize other global variables
let url = window.location.href
let end = url.substring(url.length-1)
let currentArticle = parseInt(end)
let signInButton = document.getElementById('signIn')
let popup = document.getElementById('popup')
let exitBtn = document.getElementById('close')
let loginbtn = document.getElementById('login')
let form = document.getElementById('loginForm')
let fpTitle = document.getElementById('fp')
let title = document.getElementById('title1')
let title2 = document.getElementById('title2')
let articleText = document.getElementById('article1')
let articleText2 = document.getElementById('article2')
let editors = document.getElementById('editors')
const articleButtons = document.getElementsByClassName('navigation')
const email = form.email
const password = form.password

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

    var dbNum = 0; 

    fpTitle.value = ""
    title.value = ""
    title2.value = ""
    articleText.textContent = ""
    articleText2.textContent = ""
    editors.value = ""


    switch (article) {
        case 1:
            //sports
            fpTitle.value = db[2].fpTitle
            title.value = db[2].title
            title2.value = db[2].title2
            articleText.textContent = db[2].boys
            articleText2.textContent = db[2].girls
            editors.value = db[2].editors
            break;
        case 2:
            //pop culture
            fpTitle.value = db[0].fpTitle
            title.value = db[0].title
            title2.value = db[0].title2
            articleText.textContent = db[0].article
            articleText2.textContent = db[0].article2
            editors.value = db[0].editors
            break;
        case 3:
            //student voices
            fpTitle.value = db[3].fpTitle
            title.value = db[3].title
            title2.value = db[3].title2
            articleText.textContent = db[3].article
            articleText2.textContent = db[3].article2
            editors.value = db[3].editors
            break;
        case 4:
            //current events
            fpTitle.value = db[1].fpTitle
            title.value = db[1].title
            title2.value = db[1].title2
            articleText.textContent = db[1].article
            articleText2.textContent = db[1].article2
            editors.value = db[1].editors
            break;
    
        default:
            articleText.textContent = 'error fetching data  '
            break;
    }
}

getRealtimeData()


//var user = auth.currentUser;
//console.log(user)

signInButton.addEventListener('click', ()=>{
    popup.style.display = 'flex'
})

exitBtn.addEventListener('click', ()=>{
    popup.style.display = 'none'
})

loginbtn.addEventListener('click', ()=>{
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((cred) =>{
            //console.log('user logged in:', cred.user)
            popup.style.display = 'none'
            document.getElementById('rules').style.display = 'none'
            fpTitle.removeAttribute('readonly');
            title.removeAttribute('readonly');
            title2.removeAttribute('readonly');
            articleText.removeAttribute('readonly');
            articleText2.removeAttribute('readonly');
            editors.removeAttribute('readonly');
            articleButtons[0].click()
        })
        .catch((err) =>{
            console.log(err.message)
        })
})


function formatText(){
    
}