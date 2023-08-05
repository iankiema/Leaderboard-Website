const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

// Function to fetch leaderboard data from the API
const fetchLeaderboardFromAPI = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.result;
};

// Function to submit a player's score to the local leaderboard
const submitScore = async (name, score) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await res.json();
  return data.result;
};

export {
  submitScore,
  fetchLeaderboardFromAPI,
};
