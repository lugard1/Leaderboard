import listItem from './playerList.js';

const ul = document.querySelector('.display-scores');
const showScores = (data) => {
  ul.innerHTML = '';
  data.forEach((item) => {
    const list = listItem(item);
    ul.innerHTML += list;
  });
};

export default showScores;