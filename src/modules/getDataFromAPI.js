const gameEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KbOFwjqbOHiK6n1fW0cJ/scores/';

const getDataFromAPI = async () => {
  const response = await fetch(gameEndpoint);
  const data = await response.json();
  return data;
};

export default getDataFromAPI;