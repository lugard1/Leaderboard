const gameEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  const response = await fetch(gameEndpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'Triple Sports' }),
  });
  return response.json();
};

export default createGame;