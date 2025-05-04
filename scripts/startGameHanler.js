import { generateRandomColor } from "./utils/generateRandomColor.js";
import {
  anmimationIntervalId,
  loadingAnimation,
  loadingSound,
} from "./utils/loadingAnimation.js";
import { state } from "./state.js";
import { selectColorHandler } from "./selectColorHandler.js";

let startGameTimeOut;

export const startGameHandler = () => {
  const gameBtn = document.querySelector(".js-run-game-btn");

  if (state.isPlaying) {
    return;
  }

  const color = generateRandomColor();
  const squares = document.querySelectorAll(".js-color-sqaures");
  const rgbTitle = document.querySelector(".js-title");
  const correctColorIndex = Math.floor(Math.random() * 6);

  squares.forEach((square) => {
    square.style.pointerEvents = "none";
  });

  clearTimeout(startGameTimeOut);
  loadingAnimation();

  startGameTimeOut = setTimeout(() => {
    clearInterval(anmimationIntervalId);
    loadingSound.pause();
    loadingSound.currentTime = 0;

    rgbTitle.innerHTML = `gues: ${color.color}`.toUpperCase();

    squares.forEach((square, index) => {
      if (index === correctColorIndex) {
        // console.log("here", index, color.color);
        square.style.backgroundColor = color.color;
      } else {
        square.style.backgroundColor = generateRandomColor().color;
      }

      square.style.pointerEvents = "auto";
    });
  }, 3500);

  gameBtn.classList.add("mute");

  state.isPlaying = true;

  selectColorHandler(correctColorIndex, color.color);
};
