
var counter = 0;
var textArea = document.getElementById("texta");

textArea.addEventListener("keydown", () => {
    if(counter == 0){
        myTimer();
        document.getElementById("ownphrase").disabled = true;
        document.getElementById("btn").disabled = true;
        document.getElementById("checkVal").className = "text-dark";
        textArea.className = "form-control";
    }
    counter++;
})

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function createAlert(){
    document.getElementById("alertdanger").innerHTML = `
                <div id="alertmsg" class="alert alert-danger" role="alert">
                  Minimum 4 characters
                </div>`;
    setTimeout(() => {
        removeElement("alertmsg");
    }, 3000);


}

function changePhrase(){
    var newPhrase = document.getElementById("ownphrase");
    var oldPhrase  = document.getElementById("phrase");
    var str = newPhrase.value;

    if(str.length > 3){
        oldPhrase.innerText = str;
        removeElement("radiobuttonform");
        document.getElementById("ownphrasebox").style.margin = "30px auto auto auto";
    }else{
        createAlert();
    }

}



