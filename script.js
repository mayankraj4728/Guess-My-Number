"use strict";

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function message(message) {
  let mess = (document.querySelector(".message").textContent = message);
  return mess;
}
function scores(scor) {
  const scors = Number((document.querySelector(".score").textContent = scor));
  return scors;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message("⛔️ No Number!");
  } else if (guess > randomNum) {
    if (score >= 1) {
      score--;
      scores(score);
      message("📈 TOO HIGH!");
    }
  } else if (guess < randomNum) {
    if (score >= 1) {
      score--;
      scores(score);
      message("📉 TOO LOW!");
    }
  } else if (guess === randomNum) {
    message("🎉 Correct Number");
    let marks = scores(score);

    if (highscore < marks) {
      highscore = score;
      document.querySelector(".highscore").textContent = marks;
    }

    document.querySelector(".number").textContent = randomNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  if (score === 0) {
    message("💥 You Lost The Game!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  message("Start guessing...");
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
});
