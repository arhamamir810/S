const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const final = document.getElementById("final");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");


let questionIndex = 0;
let noIndex = 0;


const questions = [
    "Do you forgive me? ❤️",

    "Promise me you won't give up on our friendship ever again? ❤️😊",

    "Promise me we will always trust and understand each other? 💕",

    "Promise me we will keep making beautiful memories together? ✨",

    "Promise me we will always try to make each other smile? 😊",

    "Can we start fresh and be happy like before? 🧸❤️"
];


const noReplies = [
    "Are you sure? Think about our good memories ❤️",

    "Maybe give it one more thought? 😊",

    "I really value our friendship 💕",

    "I hope we can smile together again 🧸",

    "I will always wish the best for our friendship ❤️"
];


startBtn.onclick = function() {

    popup.style.display = "flex";

    questionIndex = 0;
    noIndex = 0;

    question.innerHTML = questions[questionIndex];

};



yesBtn.onclick = function() {

    noIndex = 0;

    questionIndex++;


    if(questionIndex < questions.length) {

        question.innerHTML = questions[questionIndex];

    } 
    else {

        popup.style.display = "none";
        final.style.display = "flex";

    }

};



noBtn.onclick = function() {

    question.innerHTML = noReplies[noIndex];

    noIndex++;


    if(noIndex >= noReplies.length) {

        noIndex = 0;

    }

};
