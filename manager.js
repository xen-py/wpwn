

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
    console.log(article)

function changeTitles(){
   
    let title = document.getElementById('title') 
    let genre = document.getElementById('Genre')//document.querySelector('#Genre')
    let articleTitle = document.getElementById('article-title')

    switch(article){
        case 1:
            title.textContent = 'Sports'
            genre.textContent = 'Sports'
            articleTitle.textContent = 'Sr. Ball Team loss'
            break;
        case 2:
            title.textContent = 'Pop Culture'
            genre.textContent = 'Pop Culture'
            articleTitle.textContent = 'Favourite holiday movies'
            break;
        case 3:
            title.textContent = 'Student Voices'
            genre.textContent = 'Student Voices'
            articleTitle.textContent = 'to be replaced'
            break
        case 4:
            title.textContent = 'Current Events'
            genre.textContent = 'Current Events'
            articleTitle.textContent = 'World Cup'
            break;
    }

    articleTitle.style.fontSize = '30px'
    articleTitle.style.fontFamily = '"Montserrat", sans-serif'
    articleTitle.style.color = 'darkblue'
    articleTitle.style.fontWeight = 'bold'


}

function nextArticle(){

    let nextPage = url

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
    let nextPage = url

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

function content(){

    switch(article){
        case 1:
            //image
            document.writeln('<img id="article-photo" src="images/Badminton.png" alt="a picture">');
            //main content
            document.writeln('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis nemo explicabo recusandae earum ad distinctio aperiam voluptates saepe, nesciunt accusamus quasi ex nobis expedita ipsum doloribus ratione vel possimus?</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[1]+'</p>')
            break;
        case 2:
            //image
            document.writeln('<img id="article-photo" src="images/santa.jpg" alt="a picture">');
            //main content
            document.writeln('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis nemo explicabo recusandae earum ad distinctio aperiam voluptates saepe, nesciunt accusamus quasi ex nobis expedita ipsum doloribus ratione vel possimus?</p>')
            document.writeln('<div class="spacer"></div>')
            document.write('<h2>Best Hangout Spots</h2>')
            document.writeln('<p>Edmonton has a wide variety of great places to hang out with friends, depending on your interests. For those who enjoy the outdoors, the River Valley Parks system offers miles of hiking and biking trails, as well as parks, picnic areas and playgrounds. Whyte Avenue is another popular hangout spot for friends, with a variety of shops, restaurants, and bars. If you\'re interested in arts and culture, the Royal Alberta Museum is an excellent destination for spending time with friends, featuring exhibits on the history and culture of Alberta. The Old Strathcona district is another popular spot with a great atmosphere, home to a variety of restaurants, bars, and shops, as well as a farmer\'s market and several festivals throughout the year. Another fun spot for friends to hangout would be to explore the food scene, trying out different and unique restaurants or even food trucks on Whyte Avenue or 124 street.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[2]+'</p>')
            break;
        case 4:
            document.writeln('<img id="article-photo" src="images/eventsArticle.jpg" alt="a picture of the current event">')
            document.writeln('<p>The 2022 World Cup was one for the ages. The World Cup began with some of the most bizarre matches, such as Argentina losing to Saudi Arabia and Japan defeating European giants Spain and Germany in blue lock kits. This year\'s World Cup had fans crying and cheering, and many supposedly "easy games" for some countries ended with the underdogs winning. The World Cup finals were one of, if not the, craziest matches in football history. Argentina had the lead 2-0 with Messi and Di Maria both scoring until the 80th minute when Kylian Mbappe scored a penalty, and then in the next minute, he scored another goal. During extra time, Messi was able to score one more goal, but shortly after Kylian Mbappe scored his third, making it a hat trick. It ended up being 3-3 and the game went to penalties. Argentina scored four times when France only scored twice, which finally closed the goat discussion. Messi is officially the Goat.</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+editors[4]+'</p>')
            break;

    }

}





