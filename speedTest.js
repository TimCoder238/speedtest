
var counter = 0;
var textArea = document.getElementById("texta");


textArea.addEventListener("keydown", () => { 
    if(counter == 0){
        myTimer();
        document.getElementById("ownphrase").disabled = true;
        document.getElementById("btn").disabled = true;
    }
    counter++;
})

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function changePhrase(){
    var newPhrase = document.getElementById("ownphrase");
    var oldPhrase  = document.getElementById("phrase");
    var str = newPhrase.value;
    
    if(str.length > 3){
        oldPhrase.innerText = str;
    }
    removeElement("radiobuttonform");
    document.getElementById("ownphrasebox").style.margin="80px auto auto auto";
}



