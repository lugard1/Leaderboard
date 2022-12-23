const gameEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KbOFwjqbOHiK6n1fW0cJ/scores/';

const savePlayerData = async (playerData) => {
  const response = await fetch(gameEndpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(playerData),
  });
  return response;
};

export default savePlayerData;