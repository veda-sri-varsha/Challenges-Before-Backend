const player1 = "rock";
const player2 = "scissors";

if (player1 === player2) {
  console.log("Result: Draw");
} else if (
  (player1 === "rock" && player2 === "scissors") ||
  (player1 === "paper" && player2 === "rock") ||
  (player1 === "scissors" && player2 === "paper")
) {
  console.log("Result: Player 1 Wins");
} else {
  console.log("Result: Player 2 Wins");
}

// Result: Player 1 Wins