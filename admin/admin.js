/*const fs = require('fs');

fs.readFile('users.txt', 'utf-8', (err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
});
*/

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

    if(loginfo.length > 0){
       loginfo.pop(user)
        loginfo.pop(password) 
    }else{
        loginfo.push(user) //[0]
        loginfo.push(password) //[1] 
    }

    var string_data = JSON.stringify(loginfo)
    var file = new File([string_data], {type: "text"})

    /*
    const link = document.createElement("a");
         
         //const file = new Blob([string_data], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "sample.txt";
         link.click();
    URL.revokeObjectURL(link.href);
    */
    
    //alert(loginfo)
    console.log(loadFile('users.txt'))
    //verifyLoginfo()
}

function verifyLoginfo(){

    //var file = File "user.txt"
    var reader = new FileReader();
    file = URL("users.txt")
    console.log(file.length)

    reader.onloadend = function(){
        
        var load = JSON.parse(reader.result)[0];
        alert(load)
    }

    reader.readAsText(load)

}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

