const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const final = document.getElementById("final");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");


let stage = 0;
let noIndex = 0;


let yesQuestions = [
    "Do you forgive me? ❤️",
    "Promise me you won't give up on our friendship ever again? 🥺",
    "Promise me we will always try to understand each other? 💕",
    "Promise me we will keep making beautiful memories together? 🧸",
    "Can we start fresh with a smile? 😊"
];


let noMessages = [
    "Are you sure? 🥺",
    "Think again, please? ❤️",
    "I still hope we can fix things 😊",
    "One more chance? 🧸",
    "I will keep trying to make you smile 💕"
];


startBtn.onclick = function () {
    popup.style.display = "flex";
    question.innerHTML = yesQuestions[0];
};


yesBtn.onclick = function () {

    stage++;

    if (stage < yesQuestions.length) {

        question.innerHTML = yesQuestions[stage];

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
