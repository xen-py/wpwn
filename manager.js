

let editors =  {
    1 : "Eli",
    2 : "Austin, Avni, Ysabella, Shaneel",
    3 : "future editors",
    4 : "Amon, Kai"
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
    

    switch(article){
        case 1:
            title.textContent = 'Sports'
            articleTitle.textContent = 'Sr. Boys and Jr/Sr. Girls Basketball'
            break;
        case 2:
            title.textContent = 'Pop Culture'
            articleTitle.textContent = 'Favourite Holiday movies'
            break;
        case 3:
            title.textContent = 'Student Voices'
            articleTitle.textContent = 'Creating comfort in school bathrooms:\r\nHow to make students feel safe and secure'
            break
        case 4:
            title.textContent = 'Current Events'
            articleTitle.textContent = '2022 FIFA World Cup'
            break;
    }

    articleTitle.style.fontSize = '30px'
    articleTitle.style.fontFamily = '"Montserrat", sans-serif'
    articleTitle.style.color = 'darkblue'
    articleTitle.style.fontWeight = 'bold'


}
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
    window.location.assign(nextPage);
    //caches.keys().then(list => list.map(key => caches.delete(key)))
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
    window.location.assign(nextPage);
    document.location.reload(true)
}

let contentLoaded = 0;

function content(){

    switch(article){
        case 1:
            //image
            document.writeln('<img id="article-photo" src="images/sportsArticle.jpg" alt="a picture">');
            //main content
            document.writeln('<p class="article-text">The Wagner Warriors basketball team secured a hard-fought 2-point victory over the Bellrose Bulldogs in their latest matchup, thanks in large part to improved teamwork and a clutch performance from new center Jobanpreet.</p><p class="article-text">Despite some early struggles to find their rhythm and execute as a cohesive unit, the Warriors eventually settled into a groove and put on a strong performance. Standout player Harbir led the charge with a stunning 35-point performance, and the team demonstrated a clear ability to support each other and play off of one another\'s strengths.</p><p class="article-text">In the closing minutes of the game, it was Jobanpreet who sealed the victory with a game-winning floater. The new center has quickly proven to be a valuable addition to the team, bringing size and skill to the court.</p><p class="article-text">The Warriors will have their work cut out for them in their next matchup, as they face a tough home game against the Strathcona Christian Eagles. If they can bring the same level of teamwork and determination that they displayed against the Bulldogs, however, there is no doubt that they have what it takes to come out on top and with hard work and determination, a long run in the playoffs are in sight for the Wagner Warriors.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln('<h2 id="red">GIRLS</h2>')
            document.writeln('<p class="article-text">WP Wagner Warriors Girls Basketball Team Defeats Bell Rose Bulldogs 66-22, Eyes Playoffs with Hard Work</p><p class="article-text">The WP Wagner Warriors girls basketball team secured a decisive victory over the Bell Rose Bulldogs, with a final score of 66-22. The Warriors displayed a dominant performance on both offense and defense, showcasing their teamwork and chemistry on the court.</p><p class="article-text">Despite the impressive win, the team is not content with their current state and is determined to work hard to improve and secure a spot in the playoffs. "I think we could do it. We have the skill and attitude for it. We just need to push through it, keep our heads up and have some good games" said Alicia Rohlenhr.</p><p class="article-text">Alicia Rholenhr acknowledged that relationships and chemistry are vital to a good basketball team. ”Good relationships within the team matter a lot, it\'s called a team for a reason" she said.</p><p class="article-text">The Warriors are looking forward to their next game and are confident that with their hard work and dedication, they will secure a spot in the playoffs. The team encourages fans to come out and support them as they strive for success.</p><p class="article-text">The hard work of the warriors is paying off as they are showing great performance on the court. They are a team to watch out for in the playoffs. The team and the coach consider that the chemistry and the relationships in the team are vital for a good basketball team. Keep an eye on the WP Wagner Warriors as they continue their journey to the playoffs.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[1]+'</p>')
            contentLoaded = 1;
            break;
        case 2:
            //image
            document.writeln('<img id="article-photo" src="images/santa.jpg" alt="a picture">');
            //main content
            document.writeln('<p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis nemo explicabo recusandae earum ad distinctio aperiam voluptates saepe, nesciunt accusamus quasi ex nobis expedita ipsum doloribus ratione vel possimus?</p>')
            document.writeln('<div class="spacer"></div>')
            document.write('<h2 id = "red">Best Hangout Spots</h2>')
            document.writeln('<img id="article-photo" src="images/cultureArticle2.jpg" alt="a picture">');
            document.writeln('<p class="article-text">Edmonton has a wide variety of great places to hang out with friends, depending on your interests. For those who enjoy the outdoors, the River Valley Parks system offers miles of hiking and biking trails, as well as parks, picnic areas and playgrounds. Whyte Avenue is another popular hangout spot for friends, with a variety of shops, restaurants, and bars. If you\'re interested in arts and culture, the Royal Alberta Museum is an excellent destination for spending time with friends, featuring exhibits on the history and culture of Alberta. The Old Strathcona district is another popular spot with a great atmosphere, home to a variety of restaurants, bars, and shops, as well as a farmer\'s market and several festivals throughout the year. Another fun spot for friends to hangout would be to explore the food scene, trying out different and unique restaurants or even food trucks on Whyte Avenue or 124 street.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[2]+'</p>')
            contentLoaded = 2;
            break;
        case 3:
            document.writeln('<img id="article-photo" src="images/voiceArticle.jpg" alt="a picture">');
            document.writeln('<p class="article-text">“At W.P. Wagner High School, we believe that safety is our collective responsibility. Together, we must all take measures to protect one another" —Safety is a collective responsibility. We must all do what we can to make sure staff and students feel safe and comfortable during their time at school.Creating a comfortable and secure school bathroom space is essential for students. A school bathroom should be an inviting and safe place for students to not only use the facilities but also to socialize and relax. It can be difficult for students to feel comfortable in a school bathroom, especially if it is not well-maintained or if it is filled with bullying or disrespectful behavior. To ensure that students feel safe and secure in school bathrooms, there are a few steps that schools can take to create a comfortable and inviting atmosphere. This includes keeping the bathrooms clean, having strict policies in place regarding bullying, and providing resources for students who may need additional support. With these simple steps, schools can create a safe and secure environment in their bathrooms and ensure that all students feel comfortable and respected. Students have enough stress as it is and anxiety about using school bathrooms should not be one of them.  Bathrooms should not be overcrowded. Most students have stated that the majority of their bathroom anxiety stems from overcrowded bathrooms. “Walking into an overcrowded bathroom filled with students broken into conversation is scary , I feel judged doing something as simple as fixing my hair. Most students believe that the school does an exceptional job maintaining bathroom facilities but the amount of students using the bathroom needs to be limited. Creating a safe and secure environment for students in school washroom facilities is important because it allows for students to feel safe and it allows for students to feel like they matter. Coming to school should be an enjoyable experience. Students have the right to feel safe and comfortable while at school. Staff and students all need to do their part in ensuring that students feel safe and comfortable whilst using school restrooms</p>');
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[3]+'</p>')
            contentLoaded = 3;
            break;
        case 4:
            document.writeln('<img id="article-photo" src="images/eventsArticle.jpg" alt="a picture of the current event">')
            document.writeln('<p class="article-text">The 2022 World Cup was one for the ages. The World Cup began with some of the most bizarre matches, such as Argentina losing to Saudi Arabia and Japan defeating European giants Spain and Germany in blue lock kits. This year\'s World Cup had fans crying and cheering, and many supposedly "easy games" for some countries ended with the underdogs winning. The World Cup finals were one of, if not the, craziest matches in football history. Argentina had the lead 2-0 with Messi and Di Maria both scoring until the 80th minute when Kylian Mbappe scored a penalty, and then in the next minute, he scored another goal. During extra time, Messi was able to score one more goal, but shortly after Kylian Mbappe scored his third, making it a hat trick. It ended up being 3-3 and the game went to penalties. Argentina scored four times when France only scored twice, which finally closed the goat discussion. Messi is officially the Goat.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[4]+'</p>')
            contentLoaded = 4;
            break;
    }

    let articleText = document.getElementsByClassName('article-text')
    let secArticleTitle = document.getElementById('red')
    for(let i = 0; i < articleText.length; i++){
        articleText[i].style.lineHeight = '26pt'
        articleText[i].style.margin = "2px 0px 15px"
        articleText[i].style.maxWidth = '100%'
    }
    
    if (secArticleTitle != null){
        secArticleTitle.style.color = 'red'
    }
    

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
    let title = document.getElementById('title') 

    if((contentLoaded != 0) && (contentLoaded != article)){
        console.log(contentLoaded,article)
        window.open(self.location, '_self');
        document.location.reload(true)
    } else if(nextPage != window.location.href){
        console.log(nextPage, window.location.href)
        window.open(self.location, '_self');
        document.location.reload(true)
    }
    else{
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

 function reloadPage(){
    setTimeout('document.location.reload(true)', 150);
 }

 load()