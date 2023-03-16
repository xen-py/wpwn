/*

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

*/


//const db = firebase.firestore();

//document.addEventListener

let images = ["images/gallery/gal1.jpg"]

/*
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var requirejs = require('requirejs');

require(['requirejs', 'fs'], function (requirejs, fs) {
    //foo is now loaded.
});
*/

function gallery(){
    let location = "images/gallery/"
    
    for(let i = 1; i < 7; i++){
        images[i] = location+"gal"+(i+1) + ".jpg"
    }
    console.log(images)
    //var fs = requirejs(['fs'])
    //var files = fs.readdirSync('/images/gallery/');
    //console.log(fs.readdir("images/gallery/", callback_function));
}

function doesFileExist(urlToFile)
{
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        console.log("File doesn't exist");
        return false;
    } else {
        console.log("File exists");
        return true;
    }
}

function ImageExist(url) 
{
   var img = new Image();
   img.src = url;
   return img.height != 0;
}

function setBackgroundImage(location){
    return("url('"+location+"')")
}

let index = 0;
let isImg2Active = false;
function changeImage(direction){
    
    let img2 = document.getElementById('galleryImg').style
    let img1 = document.getElementById('mid').style.backgroundImage
    
    /* Change index */
    if(direction == "right"){
        
        if(index != images.length -1){
            index += 1
        }else{
            index = 0;
        }

    } else {

        if(index != 0){
            index -= 1
        }else{
            index = images.length -1;
        }

    }
    
    console.log( setBackgroundImage(images[index]))

    if(!isImg2Active){
            img2.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.826) 0%, rgba(0, 0, 0, 0) 70%, rgba(0,0,0,0) 100%),"+setBackgroundImage(images[index]);
            img2.opacity = "1";
            img1.backgroundImage = "none"
            isImg2Active = true
        } else{
            img1 = setBackgroundImage(images[index])
            img2.opacity = "0";
            img2.backgroundImage = "none";
            isImg2Active = false
        }  

        console.log(img2.opacity)

}

function openAdmin(){
    let url = window.location.href
    let leftSlash = 0;
    for (let i = 0; i < url.length; i++) {
        if(url[i] == "/"){
            leftSlash = i;
        }
        
    }

    url = url.slice(0, leftSlash+1)

    adminPage = url + "admin/index.html"
    window.location.assign(adminPage);
    //document.location.reload(true)
    }

function openArticle(a){
    let url = window.location.href
let leftSlash = 0;
    for (let i = 0; i < url.length; i++) {
        if(url[i] == "/"){
            leftSlash = i;
        }
    
    }

url = url.slice(0, leftSlash+1)

    switch(a){
        case 1:
            articlePage = url + "article.html#1"
            break;
        case 2:
            articlePage = url + "article.html#2"
            break;
        case 3:
            articlePage = url + "article.html#3"
            break
        case 4:
        articlePage = url + "article.html#4"
            break;
    }
    window.location.assign(articlePage);
}
