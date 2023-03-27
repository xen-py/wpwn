// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
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
const auth = getAuth()



function toggleVis(){

    var password = document.getElementById("password-input")
    var hide = document.getElementById("hide")
    var unhide = document.getElementById("unhide")

        if(password==="text")
        {
            password.type='password';
            hide.style.display="block";
            unhide.style.display="none";
        }
        else{
            
            password.type="text";
            hide.style.display="none";
            unhide.style.display="block";
        }
    }

var loginfo = [];

function login(){
    
    var user = document.getElementById('admin-input').value
    var password = document.getElementById('password-input').value
    
    verifyLoginfo()
}

function changeCurrentLocation(target){
    let url = window.location.href
    let leftSlash = 0;
    for (let i = 0; i < url.length; i++) {
        if(url[i] == "/"){
            leftSlash = i;
        }
        
    }

    url = url.slice(0, leftSlash+1)

    targetPage = url + target
    window.location.assign(targetPage);

}

function verifyLoginfo(){
    
    var user = document.getElementById('admin-input').value
    var password = document.getElementById('password-input').value

    var input = user + password + ''
    storedData = loadFile('users.txt')
    let arr = storedData.split(',')

    for(let i = 0; i < arr.length; i++){
        let pass = arr[i]
        if(pass == input){
           // changeCurrentLocation("admin.html")
        }
    } 

}



