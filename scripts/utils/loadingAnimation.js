import { generateRandomColor } from "./generateRandomColor.js";

export let anmimationIntervalId;
export const loadingSound = document.querySelector("#loadingSound");

export const loadingAnimation = () => {
  const squares = document.querySelectorAll(".js-color-sqaures");

  loadingSound.play();

  anmimationIntervalId = setInterval(() => {
    squares.forEach((square) => [
      (square.style.backgroundColor = generateRandomColor().color),
    ]);
  }, 350);
};
