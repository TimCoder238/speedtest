


var phrases = [
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "Eighty percent of success is showing up.",
    "I respect faith, but doubt is what gets you an education",
    "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
    "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    "If you don't make mistakes, you're not working on hard enough problems. And that's a big mistake.",
    "You can never get enough of what you don't really need.",
    "Be yourself; everyone else is already taken.",
    "Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.",
    "I don't know the key to success, but the key to failure is trying to please everybody."
];

var authors = [
    'Albert Einstein',
    'Woody Allen',
    'Wilson Mizner',
    'Daniel J. Boorstin',
    'William Arthur Ward',
    'Frank Wilczek',
    'Eric Hoffer',
    'Oscar Wilde',
    'Alfred A. Montapert',
    'Bill Cosby'
];

var author = "";

function phrase(){
    var e = Math.floor(Math.random() * 10);
    document.getElementById("phrase").innerText = phrases[e];
    author = authors[e];
    var f = Math.floor(Math.random() * 10);
    if(f == e){
        if(f == 9){
            f = 0;
        }else{
            f = e + 1;
        }
    }
    var g = Math.floor(Math.random() * 10);
    if(g == e || g == f){
        if(g == 9){
            g = 0;
        }else {
            g = e + 1
        }

        while(g == e || g == f || g > 9){
            g+=1;
            if(g > 9){
                g = 0;
            }
        }


    }

    //Generating random radio buttons
    var tab = [1,2,3];

    var lab1 = Math.floor(Math.random() * 3);
    var a = tab[lab1];
    tab.splice( tab.indexOf(a), 1 );


    var lab2 = Math.floor(Math.random() * 2);
    var b = tab[lab2];
    tab.splice( tab.indexOf(b), 1 );


    var c = tab[0];


    document.getElementById("lab" +a).innerText = authors[e];
    document.getElementById("lab" +b).innerText = authors[f];
    document.getElementById("lab" +c).innerText = authors[g];

}

var lab1 = document.getElementById("lab1");
var radio1 = document.getElementById("radio1");

var lab2 = document.getElementById("lab2");
var radio2 = document.getElementById("radio2");

var lab3 = document.getElementById("lab3");
var radio3 = document.getElementById("radio3");


function checkAuthor(){
    if(author == lab1.innerText){
        lab1.className = "form-check-label text-success"
        lab2.className = "form-check-label text-danger"
        lab3.className = "form-check-label text-danger"
    }else if(author == lab2.innerText){
        lab2.className = "form-check-label text-success"
        lab1.className = "form-check-label text-danger"
        lab3.className = "form-check-label text-danger"
    }else {
        lab3.className = "form-check-label text-success"
        lab1.className = "form-check-label text-danger"
        lab2.className = "form-check-label text-danger"
    }

    radio1.disabled = true;
    radio2.disabled = true;
    radio3.disabled = true;

}

radio1.addEventListener("click", () => {
    checkAuthor();
})

radio2.addEventListener("click", () => {
    checkAuthor();
})

radio3.addEventListener("click", () => {
    checkAuthor();
})

