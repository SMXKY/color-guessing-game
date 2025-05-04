import { endGameHandler, handleRestartGame } from "./endGameHandler.js";
import { newGameHandler } from "./newGameHandler.js";
import { startGameHandler } from "./startGameHanler.js";
import { updateScore } from "./utils/updateScore.js";

updateScore();
const startGameContinueGameBtn = document.querySelector(".js-run-game-btn");
const newGameBtn = document.querySelector(".js-new-game-btn");
const endGameBtn = document.querySelector(".js-end-btn");
const restartGameBtn = document.querySelector(".js-restart-btn");

startGameContinueGameBtn.addEventListener("click", startGameHandler);
newGameBtn.addEventListener("click", newGameHandler);
endGameBtn.addEventListener("click", endGameHandler);
restartGameBtn.addEventListener("click", handleRestartGame);
