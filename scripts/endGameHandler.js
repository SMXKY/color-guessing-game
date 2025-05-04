import { newGameHandler } from "./newGameHandler.js";

const title = document.querySelector(".js-logo-title");
const colorGrid = document.querySelector(".js-sqare-grid");
const textTitle = document.querySelector(".js-title");
const buttons = document.querySelector(".js-action-btns");
const scores = document.querySelector(".js-scores");
const finalScorese = document.querySelector(".js-final-score");

export const endGameHandler = () => {
  title.innerHTML = "Thank You for Playing";
  colorGrid.classList.add("hide-section");
  buttons.classList.add("hide-section");
  scores.classList.add("hide-section");
  textTitle.innerHTML = "Final Score";
  finalScorese.classList.remove("hide-section");

  document.querySelector(".js-win-text-final").innerHTML = JSON.parse(
    localStorage.getItem("score")
  ).wins;
  document.querySelector(".js-loss-text-final").innerHTML = JSON.parse(
    localStorage.getItem("score")
  ).losses;
};

export const handleRestartGame = () => {
  title.innerHTML = "RGB RUSH";
  colorGrid.classList.remove("hide-section");
  buttons.classList.remove("hide-section");
  scores.classList.remove("hide-section");
  textTitle.innerHTML = "GUESS: RGB(255, 76, 91)";
  finalScorese.classList.add("hide-section");

  newGameHandler();
};
