export const state = {
  isPlaying: false,
  sqaresLeft: 6,
};

export const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};
