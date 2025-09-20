let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = 'You chose: ' + userChoice;
  document.getElementById('computer-choice').textContent = 'Computer chose: ' + computerChoice;

  let result = '';

  if(userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  document.getElementById('round-result').textContent = result;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('user-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('round-result').textContent = '';
}
