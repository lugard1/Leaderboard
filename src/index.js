import './style.css';
import createGame from './modules/createGame.js';
import getDataFromAPI from './modules/getDataFromAPI.js';
import savePlayerData from './modules/savePlayerData.js';
import showScores from './modules/showScores.js';

// We create a new game
const getGameId = async () => {
  const response = await createGame();
  return response.json();
};

// Game id: KbOFwjqbOHiK6n1fW0cJ
getGameId();

window.onload = async () => {
  const data = await getDataFromAPI();
  showScores(data.result);
};

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', async () => {
  const data = await getDataFromAPI();
  showScores(data.result);
});

let playerData = {
  user: '',
  score: '',
};

const playerName = document.querySelector('.name');
playerName.addEventListener('input', (e) => {
  const playerName = e.target.value.trim();
  playerData = {
    ...playerData,
    user: playerName,
  };
});

const playerScore = document.querySelector('.score');
playerScore.addEventListener('input', (e) => {
  const playerScore = e.target.value.trim();
  playerData = {
    ...playerData,
    score: playerScore,
  };
});

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  savePlayerData(playerData);
  form.reset();
});
