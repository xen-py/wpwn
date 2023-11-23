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

//get url and initalize other global variables
let url = window.location.href
let end = url.substring(url.length-1)
let article = parseInt(end)
let editors = []
let contentLoaded = 0;

//get page elements
const TITLES = ['Sports', 'Pop Culture',  'Student Voices', 'Current Events']
const title = document.getElementById('title') 
const articleTitle = document.getElementById('article-title')
const articleMain = document.getElementById('article-main')
const articlePhoto = document.getElementById('article-photo')
const articlePhoto2 = document.getElementById('article-photo2')
const secArticleTitle = document.getElementById('red')
const firstArticleTitle = document.getElementById('blue')
const subInfo = document.getElementById("article-info");
const date = document.getElementById("date");
const date2 = document.getElementById("date2");
const spacer2 = document.getElementById('spacer2')
const editorCredit = document.getElementById('editors')
var firstArticleText = ''
var secondArticleText = ''
let hasText = false

onSnapshot(colRef, (snapshot) => {
    let articles = [] 
    snapshot.docs.forEach(doc => {
        articles.push({
            ...doc.data(), id: doc.id})
    });

    
    editors =  {
    1 : articles[2].editors,
    2 : articles[0].editors,
    3 : articles[3].editors,
    4 : articles[1].editors
    }

    /**
    * 1 = Sports
    * 2 = Pop Culture
    * 3 = Student Voices
    * 4 = Current Events
    */
    var time = Date.now()
    function content(){

        switch(article){
            case 1:
                //titles
                title.textContent = TITLES[0]
                firstArticleTitle.style.color = 'blue'
                //firstArticleTitle.textContent = 'BOYS'
                //photos
                articleTitle.textContent = articles[2].title
                articlePhoto.src = "images/sportsArticle.jpg?"+time
                //date
                date.textContent = "Published: " +  articles[2].date1
                //text
                firstArticleText = articles[2].article;
                //spacer
                //spacer2.style.display = 'block'
                //titles
                secArticleTitle.style.color = 'red'
                //secArticleTitle.textContent = 'GIRLS'
                //photos
                //articlePhoto2.src = "images/sports2.jpg"
                //text
                secondArticleText = articles[2].article2;
                //editors
                editorCredit.textContent = "Editors: " + editors[1]
                contentLoaded = 1
                break;
            case 2:
                //titles
                title.textContent = TITLES[1]
                articleTitle.textContent = articles[0].title
                //photos
                articlePhoto.src = "images/cultureArticle.jpg?"+time
                //date
                date.textContent = "Published: " +  articles[0].date1
                //text
                firstArticleText = articles[0].article;
                //spacer
                spacer2.style.display = 'block'
                //title2
                secArticleTitle.textContent = articles[0].title2
                //photos
                articlePhoto2.src = "images/culture2.jpg?"+time
                //text
                secondArticleText = articles[0].article2;
                //editors
                editorCredit.textContent = "Editors: " + editors[2]
                contentLoaded = 2
                break;
            case 3:
                //titles
                title.textContent = TITLES[2]
                articleTitle.textContent = articles[3].title
                //photos
                articlePhoto.src = "images/voicesArticle.jpg?"+time
                //date
                date.textContent = "Published: " +  articles[3].date1
                //text
                firstArticleText = articles[3].article;
                //spacer
                spacer2.style.display = 'block'
                //title2
                secArticleTitle.textContent = articles[3].title2
                //photos
                articlePhoto2.src = "images/voices2.jpg?"+time
                //text
                secondArticleText = articles[3].article2;
                //editors
                editorCredit.textContent = "Editors: " + editors[3]
                contentLoaded = 3
                break
            case 4:
                //titles
                title.textContent = TITLES[3]
                articleTitle.textContent = articles[1].title
                //date
                date.textContent = "Published: " +  articles[1].date1
                //photos
                articlePhoto.src = "images/eventsArticle.jpg?"+time
                //text
                firstArticleText = articles[1].article;
                //editors
                editorCredit.textContent = "Editors: " + editors[4]
                contentLoaded = 4
                break;
        }
        var emptyText = '<p class="article-text"></p>'
        articlePhoto2.style.display = "none"
        articlePhoto2.src = ""

        if(secArticleTitle != "" && secondArticleText != emptyText){
            articlePhoto2.style.display = "block"
        }
        document.body.height = 'fit-content'
        //clear page on snapshot
        if(!hasText){
            subInfo.insertAdjacentHTML('afterend', firstArticleText)
            date2.insertAdjacentHTML('afterend', secondArticleText)
            hasText = true
        }else{
            text = document.getElementsByClassName('article-text');
            text.forEach(element => {
                element.remove()
            });
            subInfo.insertAdjacentHTML('afterend', firstArticleText)
            date2.insertAdjacentHTML('afterend', secondArticleText)
            hasText = false
        }

    }
    content()
    
})


let changingPage = false;

let nextPage = url
function nextArticle(){

    

    if (article < 4){
        article +=1
    } else if (article == 4){
        article = 1
    }

    nextPage = url.slice(0, -1) + article;

    //location.replace(nextPage)
    //window.open(nextPage, '_self');
    //window.open(nextPage)
    //window.location.href = nextPage;
    changingPage = true;
    window.location.assign(nextPage);
    //caches.keys().then(list => list.map(key => caches.delete(key)))
    //reloadPage(100)
    document.location.reload(true)
}

function lastArticle(){

    if (article > 1){
        article -=1
    } else if (article == 1){
        article = 4
    }

    nextPage = url.slice(0, -1) + article;

    //location.replace(nextPage)
    //window.open(nextPage, '_self');
    //window.open(nextPage)
    //window.location.href = nextPage;
    //caches.keys().then(list => list.map(key => caches.delete(key)))
    changingPage = true;
    window.location.assign(nextPage);
    document.location.reload(true)
    //reloadPage(100)

}

 function isPageDif(){

    if((contentLoaded != 0) && (contentLoaded != article)){
        console.log(contentLoaded,article)
        window.open(self.location, '_self');
        document.location.reload(true)
    } else if((nextPage != window.location.href)){
        console.log(nextPage, window.location.href)
        window.open(self.location, '_self');
        document.location.reload(true)
    }
    else if (changingPage == false){
       // console.log('page is up to date')
        load()
    }
    
 }

 function load()
 {
    setTimeout(function(){
        isPageDif()
    }, 1000);
 }

 function reloadPage(time){
    setTimeout('document.location.reload(true)', time);
 }

 load()
 