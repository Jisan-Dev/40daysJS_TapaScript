/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
  console.log("Getting Started With The Rock 🗿, Paper 🧻 or Scissors ✂️ Game");
  console.log("_______________________________________________________________");
  const userChoicePrompt = prompt("Enter Rock 🗿, Paper 🧻 or Scissors ✂️");
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  console.log("[userChoice] ", userChoice);
  console.log("[computerChoice] ", computerChoice);

  // announce the winner
  let result;
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You the User WIN, yay 🎊🎉🎇🎆✨!!!!";
    console.log(result);
  } else if (userChoice === computerChoice) {
    result = "The Game is a Tie";
    console.log(result);
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    result = "Oh Ho... Computer Wins!!!!";
    console.log(result);
  } else {
    result = "Invalid Input! Type one valid input: rock, paper or scissors";
    console.log(result);
  }

  // Ask User If He/She Wants To Play Again

  // const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
  // console.log(playAgainPrompt); // yes | no | null(due to clicking cancel button)
  // const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
  const playAgainPrompt = confirm(result + "\nDo You Want to Play Again?");

  playAgainPrompt ? rockPaperScissorsGame() : alert("Thanks for Playing! See you Next Time");
  // calling a function inside its own function body is called "recursion" ( in this case rockPaperScissorsGame() )
}

// Start the game;
rockPaperScissorsGame();
