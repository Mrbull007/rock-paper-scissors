let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  const resultDiv = document.getElementById('result');
  
  // Determine winner
  if (playerChoice === computerChoice) {
    resultDiv.innerHTML = `🤝 It's a Tie!<br>You: ${playerChoice} | Computer: ${computerChoice}`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultDiv.innerHTML = `🎉 You Win!<br>You: ${playerChoice} | Computer: ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.innerHTML = `😢 Computer Wins!<br>You: ${playerChoice} | Computer: ${computerChoice}`;
  }

  // Update scores
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = 0;
  document.getElementById('computer-score').textContent = 0;
  document.getElementById('result').textContent = "Score Reset! Choose your move!";
}
