/* eslint-disable no-console */
// Function to fetch leaderboard data from the API and populate the table
async function fetchLeaderboard() {
  try {
    // eslint-disable-next-line no-use-before-define
    const data = await fetchLeaderboardFromAPI();
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; // Clear existing data

    data.forEach((entry) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.score}</td>
        `;
      leaderboardBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
  }
}

// Function to fetch leaderboard data from the API (Mock data for this example)
function fetchLeaderboardFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        { name: 'Player 1', score: 1000 },
        { name: 'Player 2', score: 900 },
        { name: 'Player 3', score: 800 },
        { name: 'Player 4', score: 700 },
        { name: 'Player 5', score: 600 },
      ];
      resolve(mockData);
    }, 1000);
  });
}

// Function to submit a player's score to the local leaderboard
function submitScore(name, score) {
  try {
    // eslint-disable-next-line no-use-before-define
    const leaderboardData = getLocalLeaderboard();
    leaderboardData.push({ name, score });
    localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
    console.log('Score submitted successfully');
    fetchLeaderboard(); // Refresh the leaderboard after submission
    document.getElementById('name-input').value = ''; // Clear the name input field after submission
    document.getElementById('score-input').value = ''; // Clear the score input field after submission
  } catch (error) {
    console.error('Error submitting score:', error);
  }
}

// Function to get the local leaderboard data from localStorage
function getLocalLeaderboard() {
  const leaderboardData = JSON.parse(localStorage.getItem('leaderboardData'));
  return leaderboardData || [];
}

export {
  submitScore,
  fetchLeaderboard,
};
