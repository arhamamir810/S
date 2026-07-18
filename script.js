const popup = document.getElementById("popup");
const thanks = document.getElementById("thanks");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

nextBtn.onclick = function () {
    popup.style.display = "flex";
};

yesBtn.onclick = function () {
    popup.style.display = "none";
    thanks.style.display = "flex";
};

// Cute messages when "No" is clicked
const messages = [
    "Aww... really? 🥺",
    "Please don't stay upset. 🌸",
    "The teddy is trying its best! 🧸💕",
    "One tiny smile? 😊",
    "I'll keep trying until you smile. 💖"
];

let index = 0;

noBtn.onclick = function () {

    alert(messages[index]);

    index++;

    if(index >= messages.length){
        index = 0;
    }

    // Move the No button to a random position
    const x = Math.floor(Math.random() * 120) - 60;
    const y = Math.floor(Math.random() * 80) - 40;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

thanks.onclick = function () {
    thanks.style.display = "none";
};
