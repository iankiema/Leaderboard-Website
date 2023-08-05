import './styles.css';
import { submitScore, fetchLeaderboardFromAPI } from './functionality.js';

// Function to fetch leaderboard data from the API and populate the table
const fetchLeaderboard = async () => {
  const data = await fetchLeaderboardFromAPI();
  const leaderboardBody = document.getElementById('leaderboard-body');
  leaderboardBody.innerHTML = ''; // Clear existing data

  data.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${entry.user}</td>
          <td>${entry.score}</td>
        `;
    leaderboardBody.appendChild(row);
  });
};
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const prompt1 = document.getElementById('prompt1');
const prompt2 = document.getElementById('prompt2');

// Event listener for the "Submit" button
document.getElementById('submit-button').addEventListener('click', async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value, 10);

  if (name === '') {
    prompt1.classList.add('fade');
    setTimeout(() => {
      prompt1.classList.remove('fade');
    }, 4000);
  } else {
    await submitScore(name, score); // Pass the score as well to the submitScore function
    nameInput.value = ''; // Clear the input value
  }

  if (Number.isNaN(score)) {
    prompt2.classList.add('fade');
    setTimeout(() => {
      prompt2.classList.remove('fade');
    }, 4000);
  } else {
    await submitScore(name, score); // Pass the name as well to the submitScore function
    scoreInput.value = ''; // Clear the input value
  }
});

// Event listener for the "Refresh" button
document.getElementById('refresh-button').addEventListener('click', () => {
  nameInput.innerHTML = '';
  scoreInput.innerHTML = '';
  fetchLeaderboard();
});

// Initial data load when the page loads
window.addEventListener('DOMContentLoaded', fetchLeaderboard);
