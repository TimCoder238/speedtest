//Timer

function myTimer(){

var tseconds = 0;
var cseconds = 0;
var mseconds = 0;
var timeBox = document.getElementById("counter");
var phrase = document.getElementById("phrase");
var textAr = document.getElementById("texta");
var typedText = textAr.value;
console.log(phrase.innerText);
console.log(textAr.value);

var check = document.getElementById("checkVal");

//var textTyped = textAr.innerText;
//Each seconds decrement the seconds
var x = setInterval(function() {
    mseconds+=1;
    //console.log(mseconds);
    
    if(mseconds > 9){
        mseconds = 0;
        cseconds += 1;
        if (cseconds > 9) {
            cseconds = 0;
            tseconds += 1;
        }
    }

    timeBox.innerText = tseconds+'.'+cseconds+mseconds+" seconds";
    if(tseconds == 1000){
        clearInterval(x);
        document.getElementById("message").innerText = "BETTER LUCK NEXT TIME!";
    }

    check.innerText = textAr.value;

    if(textAr.value == phrase.innerText)
    {
        clearInterval(x);
        document.getElementById("message").innerText = "YOU DID IT!";
    }
}, 1);

}
