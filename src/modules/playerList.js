const listItem = (userData) => {
  const { user, score } = userData;
  return `<li class="score">${user}: ${score}</li>`;
};

export default listItem;