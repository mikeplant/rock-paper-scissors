

// Create a Rock Paper Scissors game played using the console

let computerScore = 0;
let playerScore = 0;

// Randomly generate computer's choice
// Generate random number from 0-2
// Assign choice based on number generate
// Return choice

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

// Take players choice via input
// Ensure choice can be made in uppercase, lowercase etc
// Check input is valid ie Rock, Paper or Scissors

function getPlayerChoice() {
  let playerInput = prompt("Rock, Paper or Scissors?").toLowerCase().trim();
 
  while (playerInput !== "rock" || playerInput !== "paper" || playerInput !== "scissors") {
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {

      let choice = playerInput[0].toUpperCase() + playerInput.slice(1);
      return choice;

    } else {
      playerInput = prompt("Enter a valid choice! \n\nRock, Paper or Scissors?").toLowerCase().trim();
    }
  }

  return choice;
}

// Play Game
// Compare choices
// Determine winner

function playRound(playerChoice, computerChoice) {

  if (
    (playerChoice === "Rock" && computerChoice === "Paper") || 
    (playerChoice === "Paper" && computerChoice === "Scissors") || 
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else if (
    (computerChoice === "Rock" && playerChoice === "Paper") || 
    (computerChoice === "Paper" && playerChoice === "Scissors") || 
    (computerChoice === "Scissors" && playerChoice === "Rock")
    ) {
    playerScore++;
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `${playerChoice} vs ${computerChoice}! It's a Tie!`;
  } 
}

// Play 5 rounds
// Increment score per win
// Determine winner and alert results

function game() {
  for(let i=0; i < 5; i++) {
    alert(`${playRound(getPlayerChoice(), getComputerChoice())}
    Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    alert(`Congratulations! You won ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    alert(`Unlucky! You lost ${computerScore}-${playerScore}`);
  } else {
    alert(`It's a tie! You drew ${playerScore}-${computerScore}`);
  }
}

game();


// console.log(playRound(getPlayerChoice(), getComputerChoice()));
// console.log(`Player: ${playerScore}
// Computer:${computerScore}`);

// 
// 
// 
// 
// 
// 
// 
// 
// 




