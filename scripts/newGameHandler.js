import { updateScore } from "./utils/updateScore.js";

export const newGameHandler = () => {
  const squares = document.querySelectorAll(".js-color-sqaures");
  const startGameBtn = document.querySelector(".js-run-game-btn");

  localStorage.setItem(
    "score",
    JSON.stringify({
      wins: 0,
      losses: 0,
    })
  );

  document.querySelector(".js-title").innerHTML = "GUESS: RGB(255, 76, 91)";
  startGameBtn.innerHTML = "Start Game";

  squares.forEach((square) => {
    square.style.pointerEvents = "none";
    square.style.backgroundColor = "rgb(255, 76, 91)";
  });

  updateScore();
};
