// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
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
const auth = getAuth()

//login and logout stuff
let title = document.getElementById('title')
const loginForm = document.getElementById('login')
const loginButton = document.getElementById('login-btn')
const logoutButton = document.getElementById('logout-btn')
const resetButton = document.getElementById('reset-btn')
const email = loginForm.email
const password = loginForm.password

//auth.setPersistence(auth.Auth.Persistence.LOCAL);


loginButton.addEventListener('click', ()=>{
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((cred) =>{
            //console.log('user logged in:', cred.user)
            
            switch(cred.user.email){
                case 'austinkabanda@gmail.com':
                    title.textContent = 'Welcome Austin'
                    break;
                case'amonaikoriegie@gmail.com':
                    title.textContent = 'Welcome Amon'
                    break;
                case 'dillon.sabo-bassett@epsb.ca':
                    title.textContent = 'Welcome Mr. Bassett'
                    break;
            }
        })
        .catch((err) =>{
            console.log(err.message)
            title.textContent = 'Error: Try Again'
        })


} )

logoutButton.addEventListener('click', ()=>{
    //console.log('Logging out')
    signOut(auth)
        .then(()=>{
            //console.log('Logged out')
            title.textContent = 'Logged Out'
        })
        .catch((err) => {
            console.log(err.message)
        })
} )

resetButton.addEventListener('click', () => {
    sendPasswordResetEmail(auth, email.value)
        .then(()=>{
            title.textContent = 'Reset email Sent'
        })
        .catch(error => {
            console.log(error);
            title.textContent = 'Error: Invalid email'
        })
})

onAuthStateChanged(auth, (user)=>{
    //console.log('status changed', user)
    if(user != null){
        signOut(auth)
        //loginForm.style.display = 'none'
        changeCurrentLocation('admin.html')
    }
})

function changeCurrentLocation(target){
    let url = window.location.href
    let leftSlash = 0;
    for (let i = 0; i < url.length; i++) {
        if(url[i] == "/"){
            leftSlash = i;
        }
        
    }

    url = url.slice(0, leftSlash+1)

    let targetPage = url + target
    window.location.assign(targetPage);
    console.log(targetPage)

}


