const popup = document.getElementById("popup");
const thanks = document.getElementById("thanks");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");


nextBtn.onclick = function() {
    popup.style.display = "flex";
};


yesBtn.onclick = function() {
    popup.style.display = "none";
    thanks.style.display = "flex";
};


noBtn.onclick = function() {
    alert("I will wait for your forgiveness 🥺");
};
