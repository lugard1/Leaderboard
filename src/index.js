import './style.css';

const ul = document.querySelector('.display-scores');

const data = [
  {
    name: 'Name',
    score: 92,
  },
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 48,
  },
  {
    name: 'Name',
    score: 77,
  },
];

const listItem = (userData) => {
  const { name, score } = userData;
  return `<li class="score">${name}: ${score}</li>`;
};

const showScores = (data) => {
  ul.innerHTML = '';
  data.forEach((item) => {
    const list = listItem(item);
    ul.innerHTML += list;
  });
};

window.onload = showScores(data);