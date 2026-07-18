const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const final = document.getElementById("final");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");


let questions = [

"Do you think we can smile again? 😊",

"Can we forget the small mistake and keep good memories? ❤️",

"Will you give me a chance to make things better? 🧸",

"Can we be friends like before? 💕",

"One more try? 🥺"

];


let index = 0;


startBtn.onclick = function(){

    popup.style.display="flex";

};



yesBtn.onclick=function(){

    popup.style.display="none";
    final.style.display="flex";

};



noBtn.onclick=function(){

    index++;

    if(index < questions.length){

        question.innerHTML = questions[index];

    }

    else {

        question.innerHTML =
        "I will keep trying to make you smile 😊";

        index = 0;

    }

};
