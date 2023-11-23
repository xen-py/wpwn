import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyCFCUlo4WIOF10Z37lFDSeUsDqYy7MF7oM",
  authDomain: "wpwnewspaper.firebaseapp.com",
  databaseURL: "https://wpwnewspaper-default-rtdb.firebaseio.com",
  projectId: "wpwnewspaper",
  storageBucket: "wpwnewspaper.appspot.com",
  messagingSenderId: "51596774612",
  appId: "1:51596774612:web:9ffe54fa5066889bf1bf41",
  measurementId: "G-B6GQMF1S9D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const colRef = collection(db, 'articles');

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

let url = window.location.href;
let end = url.substring(url.length - 1);
let currentArticle = parseInt(end);
const signInButton = document.getElementById('signIn');
const popup = document.getElementById('popup');
const exitBtn = document.getElementById('close');
const loginbtn = document.getElementById('login');
const form = document.getElementById('loginForm');
const fpTitle = document.getElementById('fp');
let updateFp = false;
const title = document.getElementById('title1');
let updateTitle = false;
const title2 = document.getElementById('title2');
let updateTitle2 = false;
const articleText = document.getElementById('article1');
let updateArticle1 = false;
const articleText2 = document.getElementById('article2');
let updateArticle2 = false;
const editors = document.getElementById('editors');
let updateEditors = false;
const articleDate = document.getElementById('date')
let updateDate = false;
const articleDate2 = document.getElementById('date2')
let updateDate2 = false;
const articleButtons = document.getElementsByClassName('navigation');
const articleButtons2 = document.getElementsByClassName('mobile-navigation');
const email = form.email;
const password = form.password;

var databaseArticles = 'error';

function getRealtimeData() {
  let articles = [];
  onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach(doc => {
      articles.push({ ...doc.data(), id: doc.id });
    });

    /**
     * Changes article by add a number to the end of the url 
     */
    function changeArticle() {
      url = window.location.href;
      end = url.substring(url.length - 1);
      end = parseInt(end);
      loadArticles(articles, end);
    }

    /***************************************************************************************************************/

    /**
     * Adds Event listeners to Navigation Buttons
     */
    function addListenersToArticleNav(){

        articleButtons[0].addEventListener('click', () => {
        setTimeout(() => {
            changeArticle();
        }, 5);
        submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons2[0].addEventListener('click', () => {
            setTimeout(() => {
            changeArticle();
            }, 5);
            submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons[1].addEventListener('click', () => {
        setTimeout(() => {
            changeArticle();
        }, 5);
        submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons2[1].addEventListener('click', () => {
            setTimeout(() => {
            changeArticle();
            }, 5);
            submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons[2].addEventListener('click', () => {
        setTimeout(() => {
            changeArticle();
        }, 5);
        submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons2[2].addEventListener('click', () => {
            setTimeout(() => {
            changeArticle();
            }, 5);
            submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });
    

        articleButtons[3].addEventListener('click', () => {
        setTimeout(() => {
            changeArticle();
        }, 5);
        submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });

        articleButtons2[3].addEventListener('click', () => {
            setTimeout(() => {
            changeArticle();
            }, 5);
            submit.forEach(element => {
            element.style.background = '#cdcdcd'
            });
        });
    }
    
    /**
     * Highlight Submit button if front page title input doesn't match already existing text
     */
    function fpHighlightButton(){
        fpTitle.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(fpTitle.value != articles[2].fpTitle){
                        submit[0].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateFp = true;
                    } else {
                        submit[0].style.background = '#cdcdcd'
                        updateFp = false;
                    }
                    break;
                case 2:
                    if(fpTitle.value != articles[0].fpTitle){
                        submit[0].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateFp = true;
                    } else {
                        submit[0].style.background = '#cdcdcd'
                        updateFp = false;
                    }
                    break;
                case 3:
                    if(fpTitle.value != articles[3].fpTitle){
                        submit[0].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateFp = true;
                    } else {
                        submit[0].style.background = '#cdcdcd'
                        updateFp = false;
                    }
                    break;
                case 4:
                    if(fpTitle.value != articles[1].fpTitle){
                        submit[0].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateFp = true;
                    } else {
                        submit[0].style.background = '#cdcdcd'
                        updateFp = false;
                    }
                    break;
                default:
                    submit[0].style.background = '#cdcdcd'
                    break;
            }
            
        });

    }

    /**
     * Highlight Submit button if article title input doesn't match already existing text
     */
    function titleHighlightButton(){
        title.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(title.value != articles[2].title){
                        submit[1].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle = true;
                    } else {
                        submit[1].style.background = '#cdcdcd'
                        updateTitle = false;
                    }
                    break;
                case 2:
                    if(title.value != articles[0].title){
                        submit[1].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle = true;
                    } else {
                        submit[1].style.background = '#cdcdcd'
                        updateTitle = false;
                    }
                    break;
                case 3:
                    if(title.value != articles[3].title){
                        submit[1].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle = true;
                    } else {
                        submit[1].style.background = '#cdcdcd'
                        updateTitle = false;
                    }
                    break;
                case 4:
                    if(title.value != articles[1].title){
                        submit[1].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle = true;
                    } else {
                        submit[1].style.background = '#cdcdcd'
                        updateTitle = false;
                    }
                    break;
                default:
                    submit[0].style.background = '#cdcdcd'
                    break;
            }
            
        });
    }

    /**
     * Highlight Submit button if title2 input doesn't match already existing text
     */
    function title2HighlightButton(){
        title2.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(title2.value != articles[2].title2){
                        submit[2].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle2 = true;
                    } else {
                        submit[2].style.background = '#cdcdcd'
                        updateTitle2 = false;
                    }
                    break;
                case 2:
                    if(title2.value != articles[0].title2){
                        submit[2].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle2 = true;
                    } else {
                        submit[2].style.background = '#cdcdcd'
                        updateTitle2 = false;
                    }
                    break;
                case 3:
                    if(title2.value != articles[3].title2){
                        submit[2].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle2 = true;
                    } else {
                        submit[2].style.background = '#cdcdcd'
                        updateTitle2 = false;
                    }
                    break;
                case 4:
                    if(title2.value != articles[1].title2){
                        submit[2].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateTitle2 = true;
                    } else {
                        submit[2].style.background = '#cdcdcd'
                        updateTitle2 = false;
                    }
                    break;
                default:
                    submit[2].style.background = '#cdcdcd'
                    break;
            }
            
        });
    }
    
    /**
     * Highlight Submit button if article text input doesn't match already existing text
     */
    function articleTextHighlightButton(){
        articleText.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(articleText.value != reverseHTMLToText(articles[2].article)){
                        submit[3].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle1 = true;
                    } else {
                        submit[3].style.background = '#cdcdcd'
                        updateArticle1 = false;
                    }
                    break;
                case 2:
                    if(articleText.value != reverseHTMLToText(articles[0].article)){
                        submit[3].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle1 = true;
                    } else {
                        submit[3].style.background = '#cdcdcd'
                        updateArticle1 = false;
                    }
                    break;
                case 3:
                    if(articleText.value != reverseHTMLToText(articles[3].article)){
                        submit[3].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle1 = true;
                    } else {
                        submit[3].style.background = '#cdcdcd'
                        updateArticle1 = false;
                    }
                    break;
                case 4:
                    if(articleText.value != reverseHTMLToText(articles[1].article)){
                        submit[3].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle1 = true;
                    } else {
                        submit[3].style.background = '#cdcdcd'
                        updateArticle1 = false;
                    }
                    break;
                default:
                    submit[3].style.background = '#cdcdcd'
                    break;
            }
            
        });
    }

    /**
    * Highlight Submit button if article text2 input doesn't match already existing text
    */
    function articleText2HighlightButton(){
        articleText2.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(articleText2.value != reverseHTMLToText(articles[2].article2)){
                        submit[4].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle2 = true;
                    } else {
                        submit[4].style.background = '#cdcdcd'
                        updateArticle2 = false;
                    }
                    break;
                case 2:
                    if(articleText2.value != reverseHTMLToText(articles[0].article2)){
                        submit[4].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle2 = true;
                    } else {
                        submit[4].style.background = '#cdcdcd'
                        updateArticle2 = false;
                    }
                    break;
                case 3:
                    if(articleText2.value != reverseHTMLToText(articles[3].article2)){
                        submit[4].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle2 = true;
                    } else {
                        submit[4].style.background = '#cdcdcd'
                        updateArticle2 = false;
                    }
                    break;
                case 4:
                    if(articleText2.value != reverseHTMLToText(articles[1].article2)){
                        submit[4].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateArticle2 = true;
                    } else {
                        submit[4].style.background = '#cdcdcd'
                        updateArticle2 = false;
                    }
                    break;
                default:
                    submit[4].style.background = '#cdcdcd'
                    break;
            }
        });
    }

    /**
    * Highlight Submit button if date input doesn't match already existing text
    */
    function dateHighlightButton(){
        articleDate.addEventListener('change', () => {
            
            switch (end) {
                case 1:
                    if(articleDate.value != articles[2].date1){
                        submit[5].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate = true;
                    } else {
                        submit[5].style.background = '#cdcdcd'
                        updateDate = false;
                    }
                    break;
                case 2:
                    if(articleDate.value != articles[0].date1){
                        submit[5].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate = true;
                    } else {
                        submit[5].style.background = '#cdcdcd'
                        updateDate = false;
                    }
                    break;
                case 3:
                    if(articleDate.value != articles[3].date1){
                        submit[5].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate = true;
                    } else {
                        submit[5].style.background = '#cdcdcd'
                        updateDate = false;
                    }
                    break;
                case 4:
                    if(articleDate.value != articles[1].date1){
                        submit[5].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate = true;
                    } else {
                        submit[5].style.background = '#cdcdcd'
                        updateDate = false;
                    }
                    break;
                default:
                    submit[5].style.background = '#cdcdcd'
                    break;
            }
        });
    }
    /**
    * Highlight Submit button if date2 doesn't match already existing text
    */
    function date2HighlightButton(){
        articleDate2.addEventListener('change', () => {
            
            switch (end) {
                case 1:
                    if(articleDate2.value != articles[2].date2){
                        submit[6].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate2 = true;
                    } else {
                        submit[6].style.background = '#cdcdcd'
                        updateDate2 = false;
                    }
                    break;
                case 2:
                    if(articleDate2.value != articles[0].date2){
                        submit[6].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate2 = true;
                    } else {
                        submit[6].style.background = '#cdcdcd'
                        updateDate2 = false;
                    }
                    break;
                case 3:
                    if(articleDate2.value != articles[3].date2){
                        submit[6].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate2 = true;
                    } else {
                        submit[6].style.background = '#cdcdcd'
                        updateDate2 = false;
                    }
                    break;
                case 4:
                    if(articleDate2.value != articles[1].date2){
                        submit[6].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateDate2 = true;
                    } else {
                        submit[6].style.background = '#cdcdcd'
                        updateDate2 = false;
                    }
                    break;
                default:
                    submit[6].style.background = '#cdcdcd'
                    break;
            }
        });
    }

    /**
     * Highlight Submit button if editors input doesn't match already existing text
     */
    function editorHighlightButton(){
        editors.addEventListener('keyup', () => {
            
            switch (end) {
                case 1:
                    if(editors.value != articles[2].editors){
                        submit[7].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateEditors = true;
                    } else {
                        submit[7].style.background = '#cdcdcd'
                        updateEditors = false;
                    }
                    break;
                case 2:
                    if(editors.value != articles[0].editors){
                        submit[7].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateEditors = true;
                    } else {
                        submit[7].style.background = '#cdcdcd'
                        updateEditors = false;
                    }
                    break;
                case 3:
                    if(editors.value != articles[3].editors){
                        submit[7].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateEditors = true;
                    } else {
                        submit[7].style.background = '#cdcdcd'
                        updateEditors = false;
                    }
                    break;
                case 4:
                    if(editors.value != articles[1].editors){
                        submit[7].style.background = 'rgba(0, 255, 98, 0.7)'
                        updateEditors = true;
                    } else {
                        submit[7].style.background = '#cdcdcd'
                        updateEditors = false;
                    }
                    break;
                    default:
                    submit[7].style.background = '#cdcdcd'
                    break;  
                }
            
            });

    }

    addListenersToArticleNav();
    fpHighlightButton();
    titleHighlightButton();
    title2HighlightButton();
    articleTextHighlightButton();
    articleText2HighlightButton();
    dateHighlightButton();
    date2HighlightButton();
    editorHighlightButton();

    });
}

var submit = Array.from(document.getElementsByClassName('submitChanges'));

function initialize() {
  submit.forEach(element => {
    element.disabled = true;
  });
}

initialize();

/**
 * Based on number assigned, load article 
 */
function loadArticles(db, article) {
  fpTitle.value = '';
  title.value = '';
  title2.value = '';
  articleDate.value = '';
  articleDate2.value = '';
  articleText.textContent = '';
  articleText2.textContent = '';
  editors.value = '';

  switch (article) {
    case 1:
      fpTitle.value = db[2].fpTitle;
      title.value = db[2].title;
      title2.value = db[2].title2;
      articleDate.value = db[2].date1;
      articleDate2.value = db[2].date2;
      articleText.textContent = reverseHTMLToText(db[2].article);
      articleText.value = reverseHTMLToText(db[2].article);
      articleText2.textContent = reverseHTMLToText(db[2].article2);
      articleText2.value = reverseHTMLToText(db[2].article2);
      editors.value = db[2].editors;
      break;
    case 2:
      fpTitle.value = db[0].fpTitle;
      title.value = db[0].title;
      title2.value = db[0].title2;
      articleDate.value = db[0].date1;
      articleDate2.value = db[0].date2;
      articleText.textContent = reverseHTMLToText(db[0].article);
      articleText.value = reverseHTMLToText(db[0].article);
      articleText2.textContent = reverseHTMLToText(db[0].article2);
      articleText2.value = reverseHTMLToText(db[0].article2);
      editors.value = db[0].editors;
      break;
    case 3:
      fpTitle.value = db[3].fpTitle;
      title.value = db[3].title;
      title2.value = db[3].title2;
      articleDate.value = db[3].date1;
      articleDate2.value = db[3].date2;
      articleText.textContent = reverseHTMLToText(db[3].article);
      articleText.value = reverseHTMLToText(db[3].article);
      articleText2.textContent = reverseHTMLToText(db[3].article2);
      articleText2.value = reverseHTMLToText(db[3].article2);
      editors.value = db[3].editors;
      break;
    case 4:
      fpTitle.value = db[1].fpTitle;
      title.value = db[1].title;
      title2.value = db[1].title2;
      articleDate.value = db[1].date1;
      articleDate2.value = db[1].date2;
      articleText.textContent = reverseHTMLToText(db[1].article);
      articleText.value = reverseHTMLToText(db[1].article);
      articleText2.textContent = reverseHTMLToText(db[1].article2);
      articleText2.value = reverseHTMLToText(db[1].article2);
      editors.value = db[1].editors;
      break;
    default:
      articleText.textContent = 'error fetching data';
      break;
  }
}

getRealtimeData();

signInButton.addEventListener('click', () => {
  popup.style.display = 'flex';
  window.scrollTo({ top: 0 });
  popup.style.opacity = '1';
  document.body.style.overflow = 'hidden';
});

exitBtn.addEventListener('click', () => {
  exit();
});

function exit() {
  popup.style.opacity = '0';
  popup.style.display = 'none';
  document.body.style.overflow = 'unset';
}

/**
 * Once Logged in enable inputs
 */
loginbtn.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((cred) => {
      popup.style.display = 'none';
      document.getElementById('rules').style.display = 'none';
      fpTitle.removeAttribute('readonly');
      title.removeAttribute('readonly');
      title2.removeAttribute('readonly');
      articleDate.removeAttribute('readonly');
      articleDate2.removeAttribute('readonly');
      articleText.removeAttribute('readonly');
      articleText2.removeAttribute('readonly');
      editors.removeAttribute('readonly');
      document.body.style.overflow = 'unset';
      submit.forEach(element => {
        element.disabled = false;
      });
      exit();
      articleButtons[0].click();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

function textAreaAdjust(element) {
  element.style.height = '1px';
  element.style.height = (25 + element.scrollHeight) + 'px';
}

articleText.addEventListener('Change this to keyup', () => {
  textAreaAdjust(articleText);
});

articleText2.addEventListener('Change this to keyup', () => {
  textAreaAdjust(articleText2);
});

submit.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
      console.log('click');
    });
});

/**
 * Take Text and Turn it into HTML
 */
function parseTextToHTML(text) {
    const paragraphs = text.split('\n'); // Split the text into paragraphs based on line breaks
    const parsedParagraphs = paragraphs.map(paragraph => `<p class="article-text">${paragraph}</p>`); // Wrap each paragraph with the HTML tags
    const parsedText = parsedParagraphs.join(''); // Join the paragraphs back into a single string
    
    return parsedText;
  }

/**
 * Take HTML and Turn it into Text
 */
function reverseHTMLToText(html) {

    try {
        var reversedText = html;
        if(html != ''){
            const paragraphRegex = /<p\s+class="article-text">([^<]+)<\/p>/g; // Regular expression to match <p class="article-text"> tags
            const matches = html.match(paragraphRegex); // Extract all <p class="article-text"> tags and their content
            const paragraphs = matches.map(match => match.replace(/<\/?p[^>]*>/g, '')); // Remove <p> tags from each match
            reversedText = paragraphs.join('\n\n'); // Join the paragraphs with double line breaks for a new line
        }
    } catch (error) {
        
    }
    
    return reversedText;
}

/**
 * Update Backend: fpTitle
 */
submit[0].addEventListener('click', ()=>{

    if(updateFp){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    fpTitle: fpTitle.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    fpTitle: fpTitle.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    fpTitle: fpTitle.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    fpTitle: fpTitle.value
                })
                break;
        }
        updateFp = false;
        submit[0].style.background = '#cdcdcd'
        alert('Front Page Title Updated!')
    }
    
})

/**
 * Update Backend: title
 */
submit[1].addEventListener('click', ()=>{

    if(updateTitle){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    title: title.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    title: title.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    title: title.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    title: title.value
                })
                break;
        }
        updateTitle = false;
        submit[1].style.background = '#cdcdcd'
        alert('Title One Updated!')
    }
    
})

/**
 * Update Backend: title2
 */
submit[2].addEventListener('click', ()=>{

    if(updateTitle2){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    title2: title2.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    title2: title2.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    title2: title2.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    title2: title2.value
                })
                break;
        }
        updateTitle2 = false;
        submit[2].style.background = '#cdcdcd'
        alert('Title Two Updated!')
    }
    
})
    
/**
 * Update Backend: article
 */
submit[3].addEventListener('click', ()=>{

    if(updateArticle1){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    article: parseTextToHTML(articleText.value)
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    article: parseTextToHTML(articleText.value)
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    article: parseTextToHTML(articleText.value)
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    article: parseTextToHTML(articleText.value)
                })
                break;
        }

        updateArticle1 = false;
        submit[3].style.background = '#cdcdcd'
        alert('Article One Updated!')
    }

})

/**
 * Update Backend: article2
 */
submit[4].addEventListener('click', ()=>{

    if(updateArticle2){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    article2: parseTextToHTML(articleText2.value)
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    article2: parseTextToHTML(articleText2.value)
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    article2: parseTextToHTML(articleText2.value)
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    article2: parseTextToHTML(articleText2.value)
                })
                break;
        }

        updateArticle2 = false;
        submit[4].style.background = '#cdcdcd'
        alert('Article Two Updated!')
    }

})

/**
 * Update Backend: date
 */
submit[5].addEventListener('click', ()=>{

    if(updateDate){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    date1: articleDate.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    date1: articleDate.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    date1: articleDate.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    date1: articleDate.value
                })
                break;
        }

        updateDate = false;
        submit[5].style.background = '#cdcdcd'
        alert('Article Date One Updated!')
    }

})

/**
 * Update Backend: date2
 */
submit[6].addEventListener('click', ()=>{

    if(updateDate){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    date2: articleDate2.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    date2: articleDate2.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    date2: articleDate2.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    date2: articleDate2.value
                })
                break;
        }

        updateDate = false;
        submit[6].style.background = '#cdcdcd'
        alert('Article Date Two Updated!')
    }

})

/**
 * Update Backend: editors
 */
submit[7].addEventListener('click', ()=>{

    if(updateEditors){
        switch (end) {
            case 1:
                //2
                var docRef = doc(db, 'articles', 'Sports')
                updateDoc(docRef, {
                    editors: editors.value
                })
                break;
            case 2:
                var docRef = doc(db, 'articles', 'Culture')
                updateDoc(docRef, {
                    editors: editors.value
                })
            case 3:
                var docRef = doc(db, 'articles', 'Voices')
                updateDoc(docRef, {
                    editors: editors.value
                })
                break;
            case 4:
                var docRef = doc(db, 'articles', 'Events')
                updateDoc(docRef, {
                    editors: editors.value
                })
                break;
        }
        updateEditors = false;
        submit[7].style.background = '#cdcdcd'
        alert('Editors Updated!')
    }
    
})

var genreMenu = document.getElementById('mobile-menu-popup')
var mobileMenuButton = document.getElementById('mobile-menu-button')
mobileMenuButton.addEventListener('click', ()=>{
    if(genreMenu.style.opacity == '0'){
        genreMenu.style.display = 'flex';
        genreMenu.style.flexDirection = 'column'
        window.scrollTo({ top: 0 });
        genreMenu.style.opacity = '1';
        document.body.style.overflow = 'hidden';
        
    }else{
        //genreMenu.style.display = 'none'
        genreMenu.style.opacity = '0';
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            hidePopup();
          }, 600);
    }
    
})

function hidePopup(){
    genreMenu.style.display = 'none';
}




/*To-do*/
//Fix the realtime snapshot, because the input values don't reflect the changes unless refreshed
//Add a feature to allow admin change
//Add a way to upload pictures to firebase