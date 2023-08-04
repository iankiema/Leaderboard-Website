/* eslint-disable no-alert */
import './styles.css';
import { submitScore, fetchLeaderboard } from './functionality.js';

// Event listener for the "Submit" button
document.getElementById('submit-button').addEventListener('click', () => {
  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value, 10);

  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (Number.isNaN(score)) {
    alert('Please enter a valid score.');
    return;
  }

  submitScore(name, score);
});

// Event listener for the "Refresh" button
document.getElementById('refresh-button').addEventListener('click', () => {
  fetchLeaderboard();
});

// Initial data load when the page loads
fetchLeaderboard();
