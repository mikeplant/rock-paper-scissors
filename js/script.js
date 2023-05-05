

// Create a Rock Paper Scissors game played using the console
// 
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

  if (playerChoice === "Rock" && computerChoice === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return "You Lose! Scissors beat Paper";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (computerChoice === "Rock" && playerChoice === "Paper") {
    return "You Win! Paper beats Rock";
  } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    return "You Win! Scissors beat Paper";
  } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
    return "You Win! Rock beats Scissors";
  } else {
    return `${playerChoice} vs ${computerChoice}! It's a Tie!`;
  } 
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));

// 
// 
// 
// 
// 
// 
// 
// 
// 




