function clickTheImage() {

document.getElementById("pass").style.display="block"
document.getElementById("submit").style.display="block"
}


function check(){
var actualPassword = "value"
 var userPassword = document.getElementById("pass").value

 if (userPassword == actualPassword){
   document.getElementById("a").play()
 }
 else if(userPassword !== actualPassword) {
 document.getElementById("a").stop()
 }
}

