export const updateScore = () => {
  const score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
  };

  const winHolder = document.querySelector(".js-win-text");
  const lossHolder = document.querySelector(".js-loss-text");

  winHolder.innerHTML = score.wins;
  lossHolder.innerHTML = score.losses;
};
