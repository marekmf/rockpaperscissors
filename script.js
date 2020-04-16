const buttons = document.querySelectorAll('.btn-choise');
const roundText = document.querySelector('.round');
const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
const newGameBtn = document.querySelector('#new-game');
const endScreen = document.querySelector('.end-screen');
const playerChoise = document.querySelector('#player-choise');
const computerChoise = document.querySelector('#computer-choise');
const winnerText = document.querySelector('#winner-text');
const overlay = document.querySelector('#overlay');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  // 0 - rock 1 - paper 2 - scissors
  let computerChoise = Math.floor(Math.random() * 3);
  if (computerChoise === 0) {
    return 'rock';
  } else if (computerChoise === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore++;
    computerChoise.style.color = 'green';
    playerChoise.style.color = 'red';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    computerChoise.style.color = 'red';
    playerChoise.style.color = 'green';
  } else if (playerSelection === computerSelection) {
    computerChoise.style.color = 'black';
    playerChoise.style.color = 'black';
  }

  if (playerScore === 5) {
    winnerText.textContent = 'You Win! 😀';
    endScreen.classList.add('active');
    overlay.classList.add('active');
  } else if (computerScore === 5) {
    winnerText.textContent = 'You Lost! 😣';
    endScreen.classList.add('active');
    overlay.classList.add('active');
  }

  playerChoise.textContent = playerSelection;
  computerChoise.textContent = computerSelection;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let playerSelection = btn.id;
    playRound(playerSelection, computerPlay());
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
  });
});

newGameBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
  roundText.textContent = '';
  endScreen.classList.remove('active');
  overlay.classList.remove('active');
});
