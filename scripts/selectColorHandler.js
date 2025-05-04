import { score, state } from "./state.js";
import { alertId, hideAlert, showAlert } from "./utils/showAlert.js";
import { updateScore } from "./utils/updateScore.js";

export const selectColorHandler = (correctIndex, correctColor) => {
  const squares = document.querySelectorAll(".js-color-sqaures");
  const continueBtn = document.querySelector(".js-run-game-btn");

  squares.forEach((square, index) => {
    // console.log(index, correctIndex);
    square.addEventListener("click", () => {
      square.style.pointerEvents = "none";
      if (Number(index) === Number(correctIndex)) {
        score.wins++;
        showAlert("Correct Guess!", "Congratulation!!!!!😁", "win");

        squares.forEach((square) => {
          square.style.pointerEvents = "none";
          square.style.backgroundColor = correctColor;
          square.style.opacity = 1;
        });

        localStorage.setItem("score", JSON.stringify(score));
        updateScore();

        continueBtn.innerHTML = "Play agian";
        state.isPlaying = false;
        continueBtn.classList.remove("mute");
        return;
      }

      square.style.opacity = 0;

      showAlert("Wrong Guess!", "Please try again🥲...", "loss");

      score.losses++;

      localStorage.setItem("score", JSON.stringify(score));
      updateScore();

      return;
    });
  });
};
