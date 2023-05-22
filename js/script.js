
let computerScore = 0;
let playerScore = 0;
const currentScore = document.querySelector('.current-score');
const button = document.querySelectorAll('button');

// Listen for clicks on choice buttons and play round accordingly
button.forEach(btn => {
  btn.addEventListener('click', e => {
    if (checkGameOver()) resetGame();
    const playerChoice = e.target.parentNode.classList[0];
    const choiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    if (choiceCapitalised === 'Rock' || choiceCapitalised === 'Paper' || choiceCapitalised === 'Scissors') {
      const result = playRound(choiceCapitalised);    
      showResult(result);
    }
  })
});

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); 
  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let string = '';
  if (
    (playerChoice === "Rock" && computerChoice === "Paper") || 
    (playerChoice === "Paper" && computerChoice === "Scissors") || 
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    string = `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else if (
    (computerChoice === "Rock" && playerChoice === "Paper") || 
    (computerChoice === "Paper" && playerChoice === "Scissors") || 
    (computerChoice === "Scissors" && playerChoice === "Rock")
    ) {
    playerScore++;
    string = `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    string =`${playerChoice} vs ${computerChoice}! It's a Tie!`;
  }
  return string;
}

function showResult(string) {
  const resultText = document.querySelector('.result-text');
  if (playerScore === 5) {
    resultText.textContent = `Good work! You won ${playerScore} - ${computerScore}!`;
    currentScore.textContent = 'WINNER!';
    currentScore.classList.add('winner');
  } else if (computerScore === 5) {
    resultText.textContent = `Unlucky! You lost ${computerScore} - ${playerScore}`;
    currentScore.textContent = 'LOSER!';
    currentScore.classList.add('loser');
  } else {
    resultText.textContent = string;
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
}

function checkGameOver() {
  return (playerScore === 5 || computerScore === 5);
}

function resetGame() {
  currentScore.classList.remove('winner', 'loser');
  playerScore = 0;
  computerScore = 0;
}