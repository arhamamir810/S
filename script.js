const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const final = document.getElementById("final");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");

let index = 0;

let questions = [
    "Do you think we can smile again? 😊",
    "Can we keep our good memories and move forward? ❤️",
    "Will you give me a chance to make you smile again? 🧸",
    "Can we be like before? 💕",
    "One more chance? 🥺"
];


startBtn.onclick = function () {
    popup.style.display = "flex";
};


yesBtn.onclick = function () {
    popup.style.display = "none";
    final.style.display = "flex";
};


noBtn.onclick = function () {

    index++;

    if (index >= questions.length) {
        index = 0;
    }

    question.innerHTML = questions[index];

};
