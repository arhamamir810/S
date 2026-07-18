const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const final = document.getElementById("final");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");


let yesIndex = 0;
let noIndex = 0;


const yesQuestions = [
    "Do you forgive me? ❤️",

    "Promise me you won't give up on our friendship ever again? ❤️😊",

    "Promise me we will always try to understand each other? 💕",

    "Promise me we will keep making beautiful memories together? ❤️✨",

    "Can we start fresh with a smile? 😊💖"
];


const noMessages = [
    "Are you sure? ❤️",

    "Think about our beautiful memories again 😊",

    "I really hope we can smile like before 💕",

    "One more chance to make things better? 🧸",

    "I will always value our friendship ❤️"
];


startBtn.onclick = function () {

    popup.style.display = "flex";

    yesIndex = 0;
    noIndex = 0;

    question.innerHTML = yesQuestions[yesIndex];

};



yesBtn.onclick = function () {

    yesIndex++;

    noIndex = 0;

    if (yesIndex < yesQuestions.length) {

        question.innerHTML = yesQuestions[yesIndex];

    } else {

        popup.style.display = "none";
        final.style.display = "flex";

    }

};



noBtn.onclick = function () {

    question.innerHTML = noMessages[noIndex];

    noIndex++;

    if (noIndex >= noMessages.length) {
        noIndex = 0;
    }

};
