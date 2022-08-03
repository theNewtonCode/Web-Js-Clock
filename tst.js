setInterval(getTime, 1000);
let cT;
function getTime(){
    cT = new Date();
    var hours = cT.getHours();
    var mins = cT.getMinutes();
    var secs = cT.getSeconds();
    if(hours<10){
        hours = "0"+hours;
    }
    if(mins<10){
        mins = "0"+mins;
    }
    if(secs<10){
        secs = "0"+secs;
    }
    document.getElementById("ct").innerHTML =  hours+ ":"+mins +":"+secs;
    document.getElementById("td").innerHTML = cT.getDay() + "/"+cT.getMonth()+"/"+cT.getFullYear();
} 

const tim = document.getElementById("time");
function showfulltime(){
    cT = new Date();
    tim.style.backgroundColor = "#f347479c";
    tim.innerHTML = cT.toDateString() +" | "+ cT.toTimeString();
    document.getElementsByClassName("main").style.backgroundColor = "#fbd756";
}
const butt = document.getElementById("getdet"); 
butt.onclick = showfulltime;

const red = document.getElementById("t3");
let green = document.getElementById("t1");
let black = document.getElementById("t2");
let gold = document.getElementById("t4");
const head = document.getElementById("head");
const sect = document.getElementById("themes");
red.onclick = function(){
    tim.style.backgroundColor="";
    butt.style.backgroundColor="#fb3333d8";
    head.style.backgroundColor ="#fb3333d8";
    sect.style.backgroundColor= "#fc67679e";
    head.style.borderColor = "black";
}
green.onclick = function(){
    tim.style.backgroundColor="#ffd900d8";
    butt.style.backgroundColor="green";
    head.style.backgroundColor ="green";
    sect.style.backgroundColor= "#64f179bd";
    head.style.borderColor = "black";
}
black.onclick = function(){
    butt.style.color = "white";
    tim.style.backgroundColor="white";
    butt.style.backgroundColor="black";
    head.style.backgroundColor ="black";
    sect.style.backgroundColor= "#45444494";
    head.style.color = "white";
    head.style.borderColor = "pink";
}
gold.onclick = function(){
    butt.style.color = "black";
    tim.style.backgroundColor="#64f179bd";
    butt.style.backgroundColor="#ffd900d8";
    head.style.backgroundColor ="#ffd900d8";
    sect.style.backgroundColor= "#ffd900d8";
    head.style.borderColor = "grey";
}
