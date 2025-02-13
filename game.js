function getComputerChoice() {
  let comChoice = 0;
  for (let i = 0; i < 2; i++) {
    comChoice += Math.round(Math.random());
  }
  switch (comChoice) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter Rock, Paper, or Scissors");
  while (true) {
    switch (humanChoice.toLowerCase()) {
      case "rock":
        return "rock";
      case "scissors":
        return "scissors";
      case "paper":
        return "paper";
      default:
        humanChoice = prompt("Unknown command. Enter Rock, Paper, or Scissors");
    }
  }
}

// console.log(getHumanChoice());

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("TIE");
      return;
    }
    let outcome = "lose";
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice == "rock")
    ) {
      outcome = "win";
    }
    console.log(
      `YOU ${outcome.toUpperCase()}! ${humanChoice} ${outcome}s against ${computerChoice}.`
    );
    return outcome;
  }

  let playerScore = 0;
  let computerScore = 0;
  let outcome;

  for (let i = 0; i < 5; i++) {
    outcome = playRound(getHumanChoice(), getComputerChoice());
    if (outcome == "win") {
      playerScore++;
    } else if (outcome == "lose") {
      computerScore++;
    }
    console.log(`SCORE: PLAYER ${playerScore}, COMPUTER ${computerScore}`)
  }

  if (playerScore > computerScore) {
    console.log("YOU ARE THE VICTOR!!!!");
  } else if (playerScore < computerScore) {
    console.log("YOU SUCK AND COMPUTERS WILL TAKE OVER!!!!");
  }
  else {
    console.log("TIE!!!! EVERYONE IS A WINNER!!!!")
  }
}

playGame();
