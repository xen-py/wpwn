

let editors =  {
    1 : "Amon A, Victor O",
    2 : "Austin K",
    3 : "Maryan M",
    4 : "Eli C"
    }


let url = window.location.href
let end = url.substring(url.length-1)

    /**
    * 1 = Sports
    * 2 = Pop Culture
    * 3 = Student Voices
    * 4 = Current Events
    */
    let article = parseInt(end)

function changeTitles(){
   
    let title = document.getElementById('title') 
    let articleTitle = document.getElementById('article-title')
    const TITLES = ['Sports', 'Pop Culture',  'Student Voices', 'Current Events']

    switch(article){
        case 1:
            title.textContent = TITLES[0]
            articleTitle.textContent = 'Wrestling Championships and Cheer Tournament'
            break;
        case 2:
            title.textContent = TITLES[1]
            articleTitle.textContent = 'Things to do during the Spring Break'
            break;
        case 3:
            title.textContent = TITLES[2]
            articleTitle.textContent = 'Vandalism in Wagner Washrooms'
            break
        case 4:
            title.textContent = TITLES[3]
            articleTitle.textContent = 'Black History Month'
            break;
    }

    articleTitle.style.fontSize = '30px'
    articleTitle.style.fontFamily = '"Montserrat", sans-serif'
    articleTitle.style.color = 'darkblue'
    articleTitle.style.fontWeight = 'bold'


}

function home(){
    let url = window.location.href
    let leftSlash = 0;
    for (let i = 0; i < url.length; i++) {
        if(url[i] == "/"){
            leftSlash = i;
        }
        
    }

    url = url.slice(0, leftSlash+1)

    targetPage = url + 'index.html'
    window.location.assign(targetPage);

}

function jump(){
    window.scrollTo(0, 0);
}

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

let contentLoaded = 0;

function content(){

    switch(article){
        case 1:
            //image
            document.writeln('<h2 id="blue">BOYS</h2>')
            document.writeln('<img id="article-photo" src="images/sportsBoys.jpg" alt="a picture" title="https://www.reddeeradvocate.com/sports/photos-lightning-tip-off-at-scott-doan-memorial-tournament/">');
            //main content
            document.writeln('<p class="article-text">With a wonderful season, our W.P. Wagner Wrestling team won the Metro Athletics Boys Aggregate Wrestling City Championships on March 1. Congrats to Obaid Rezai and Austin Kabanda who placed first in their weight classes. We’d also like to congratulate the entire team, because of their hard work and countless hours of practice. It was quite the season, 26 members of the team placed top 5 in their respective weight classes. In provincials, they represented Wagner wonderfully. During these intense matches, they showcased the power of Wagner wrestling. Congrats to our very own Obaid Rezai for winning gold, Callie Christian with silver, and to Austin Kabanda and Marek Baleja for winning bronze. They won fourth overall in the province. Wonderful job Warriors.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln('<h2 id="red">GIRLS</h2>')
            document.writeln('<img id="article-photo" src="images/sportsGirls.jpg" alt="a picture" title="https://www.reddeeradvocate.com/sports/photos-lightning-tip-off-at-scott-doan-memorial-tournament/">');
            
            document.writeln('<p class="article-text">On March 11, 2023, W.P. Wagner held the 2023 Cheerleading city championships. To start the day, our Cheerleading team practiced in the west gym multiple times. After practicing, they went back to the east gym and showed out. As they were performing, everyone cheered them on, and after their performance, many cheerleaders from other schools said that this was one of the best performances ever done in Wagner\'s history. Thanks to the countless hours our team has put in, they placed second in their division. Additionally, we’d like to congratulate the Harry Ainlay and Lilian Osborne cheer teams for winning the Advanced senior all-girls and game-day divisions. After the competition, there was a lovely little get-together where food and drinks were served. Lastly, we want to thank all the volunteers who helped set up and make this year\'s city finals one for the ages.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[1]+'</p>')
            contentLoaded = 1;
            break;
        case 2:
            //image
            document.writeln('<img id="article-photo" src="images/culture.jpg" alt="a picture" title="https://unsplash.com/photos/liT5AlTmC8I">');
            //main content
            document.writeln('<p class="article-text">Spring break is the perfect opportunity for students to relax and have fun. From exploring the city\'s vibrant culture to enjoying the great outdoors, there are plenty of activities to try during their spring break. Here are some ideas for what students can do during this upcoming spring break and after that, some of the plans I\'ve heard from interviewing you guys.</p>')
            document.writeln('<p class="article-text">Visit the West Edmonton Mall<br> The West Edmonton Mall is the largest shopping and entertainment complex in North America, and a must-visit destination for students. You can spend the day browsing the shops or trying out the amusement park rides and attractions. </p>')
            document.writeln('<p class="article-text"> Try New Foods <br> Edmonton is known for its diverse food scene, with many different cuisines to try. Head to the Old Strathcona neighborhood to check out the many cafes and restaurants, or visit the Edmonton Downtown Farmers\' Market for fresh local produce.</p>')
            document.writeln('<p class="article-text">Explore the City\'s Art and Culture<br> Edmonton is home to many museums and art galleries that offer discounted or free admission for students. Take a stroll through the Art Gallery of Alberta or the Royal Alberta Museum to appreciate the city\'s rich cultural scene.</p>')
            document.writeln('<p class="article-text">Your Ideas!<br> Riley DeClercq from the announcements team when asked said he would probably be playing video games over the spring break, like GTA 5, Valorant, and Minecraft. Grace Hlibka, a S.W.A.T member  said that she would be getting some much needed sleep. Tyler DeClercq said he would be spending his time working at his job and making money. We appreciate that grindset here at Wagner News. </p>')
            document.writeln('<p class="article-text">Overall, there are many activities for students to enjoy during spring break in Edmonton. Whether you want to explore the city\'s culture, get active in the great outdoors, or enjoy some fun-filled activities, play video games or (my favourite idea) sleep, there\'s something for everyone.</p>')
            document.writeln('<div class="spacer"></div>')
            /*
            document.write('<h2 id = "red">Best Hangout Spots</h2>')
            document.writeln('<img id="article-photo" src="images/cultureArticle2.jpg" alt="a picture" title="https://unsplash.com/photos/KnAhRJHeI7A">');
            document.writeln('<p class="article-text">Edmonton has a wide variety of great places to hang out with friends, depending on your interests. For those who enjoy the outdoors, the River Valley Parks system offers miles of hiking and biking trails, as well as parks, picnic areas and playgrounds. Whyte Avenue is another popular hangout spot for friends, with a variety of shops, restaurants, and bars. If you\'re interested in arts and culture, the Royal Alberta Museum is an excellent destination for spending time with friends, featuring exhibits on the history and culture of Alberta. The Old Strathcona district is another popular spot with a great atmosphere, home to a variety of restaurants, bars, and shops, as well as a farmer\'s market and several festivals throughout the year. Another fun spot for friends to hangout would be to explore the food scene, trying out different and unique restaurants or even food trucks on Whyte Avenue or 124 street.</p>')
            document.writeln('<div class="spacer"></div>')
            */
            
            document.writeln("<p class = 'date' >Editors: "+editors[2]+'</p>')
            contentLoaded = 2;
            break;
        case 3:
            document.writeln('<img id="article-photo" src="images/voices.jpg" alt="a picture" title ="https://unsplash.com/photos/UcUROHSJfRA">');
            document.writeln('<p class="article-text">Vandalism in washrooms is a recent problem at WP Wagner. The vandalism in the washrooms range from minor graffiti and scratches on the walls to more serious damage such as clogged toilets. Vandalism in washrooms not only causes damage to the property but can also create an unpleasant and unsanitary environment. Due to vandalism 80% or school bathrooms are now shut down. Though the closure of bathrooms is temporary it is still a major inconvenience to over 1500. Preventing vandalism in washrooms requires a combination of measures, including surveillance cameras, regular maintenance, and education on the consequences of such behavior. Majority of the student body feels as though the admin made the right decision to close school bathrooms. <span id="emphasized">“it’s unfortunate that people\'s decision to be immature had to result in bathrooms being closed but hopefully the bathrooms are opened up by the end of the week”</span> Said one student. Though most students agree with the admins decision they want the admin to discourage further acts of vandalism by expelling or suspending students that chose to deface school washrooms. </p> <p class="article-text">Another thing the school can do to combat vandalism is by boosting school spirit amongst the student body. Lack of school spirit can have a significant impact on the overall atmosphere and success of a school. It can lead to a sense of disconnection and apathy among students, which can negatively affect their academic performance and overall experience. When students are not engaged in school activities or events, students that lack school spirit may also hold a dislike towards the school and May want to damage school property. Some students have suggested that the school host more leadership events that involve the whole school such as class competitions or school spirit days.</p>');
            document.writeln('<p class="article-text">These are just some suggestions that would help combat the issue of vandalism. Combating the issue of vandalism is not only the school’s responsibility but also the students. If students see acts of vandalism being committed they should inform school staff as soon as possible and students that choose to vandalize school property should try and find another way to express their feelings such as speaking to staff about their feelings and concerns or drawing art on paper rather than bathroom stalls. This event has greatly affected the student body and we hope that this is a one time thing</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[3]+'</p>')
            contentLoaded = 3;
            break;
        case 4:
            document.writeln('<img id="article-photo" src="images/eventsArticle.jpg" alt="a picture of the current event">')
            document.writeln('<p class="article-text">On February 28th, our school hosted an exciting event in celebration of Black History Month. The event was designed to be an interactive experience, where attendees could learn about black culture, food, and music. The event had different stations, each featuring different aspects of black culture.<br>One of the most popular stations was the music station, where attendees could listen to music by black artists, including Brent Faiyaz. The music station was a hit with everyone who attended, as it gave them a chance to listen to some great music while also learning about the history of black music.<br>The food station was another highlight of the event, featuring a variety of dishes from Jamaica, Nigeria, Somalia, Morocco, and Zimbabwe. Attendees were able to taste different foods and learn about the cultural significance of each dish. Coconut ice, a popular treat from Jamaica, was also available for everyone to try.<br>In addition to the music and food stations, there was also an information booth that provided historical and cultural information about black history. Attendees were able to learn about significant black figures in history, as well as the struggles and triumphs of the black community throughout history.<br>Overall, the event was a huge success, providing attendees with a fun and educational experience. It was a great way to celebrate Black History Month and learn more about black culture. We hope that events like this will continue to be a part of our school\'s culture and that we can continue to celebrate and learn about black history throughout the year.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[4]+'</p>')
            contentLoaded = 4;
            break;
    }

    let articleText = document.getElementsByClassName('article-text')
    let secArticleTitle = document.getElementById('red')
    let firstArticleTitle = document.getElementById('blue')
    let ital = document.getElementById('emphasized')
    for(let i = 0; i < articleText.length; i++){
        articleText[i].style.lineHeight = '28pt'
        articleText[i].style.margin = "2px 0px 15px"
        articleText[i].style.maxWidth = '100%'
    }
    
    if (secArticleTitle != null){
        secArticleTitle.style.color = 'red'
    }

    if (firstArticleTitle != null){
        firstArticleTitle.style.color = 'blue'
    }
    
    //ital.style.color = "gray";
    ital.style.fontWeight = 'lighter'

}


/*
window.onhashchange = function() {
    reloadPage()
   }


   setTimeout(function(){
    window.location.reload(1);
 }, 5000);
 */

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
        console.log('page is up to date')
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