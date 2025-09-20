let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userChoiceEl = document.getElementById('user-choice');
  const computerChoiceEl = document.getElementById('computer-choice');
  const roundResultEl = document.getElementById('round-result');
  const userScoreEl = document.getElementById('user-score');
  const computerScoreEl = document.getElementById('computer-score');

  userChoiceEl.textContent = 'You chose: ' + userChoice;
  computerChoiceEl.textContent = 'Computer chose: ' + computerChoice;

  computerChoiceEl.classList.add('animate-choice');
  setTimeout(() => computerChoiceEl.classList.remove('animate-choice'), 300);

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
    userScoreEl.classList.add('animate-score');
    setTimeout(() => userScoreEl.classList.remove('animate-score'), 500);
  } else {
    result = "You lose!";
    computerScore++;
    computerScoreEl.classList.add('animate-score');
    setTimeout(() => computerScoreEl.classList.remove('animate-score'), 500);
  }

  roundResultEl.textContent = result;
  roundResultEl.style.color = result.includes('win') ? '#90be6d' : result.includes('lose') ? '#f94144' : '#f9c74f';
  roundResultEl.style.transform = 'scale(1.2)';
  setTimeout(() => {
    roundResultEl.style.transform = 'scale(1)';
  }, 300);

  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
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
