// Dice 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

// need to modify this
let scores = [0, 0];
let roundScore = 0;
let active = 0;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Dice 2
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩Player 1  Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! ";
}

function refreshPage() {
  window.location.reload();
}

// need to modify this
function countScoreForPlayer1() {
  let score = 0;
  if (document.getElementById("title") === " 🚩Player 1  Wins!") {
    document.getElementById("playerOne") += 1;
  }
}

function countScoreForPlayer2() {
  let score = 0;
  if (randomNumber2 > randomNumber1) {
    rscore += 1;
  }
}
