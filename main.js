function getRandomInt(max) { // random integer generator
    return Math.floor(Math.random() * max)
}

function getComputerChoice() { // computer's random generated choice
    let rpsIntChoice = getRandomInt(3);
    let computerChoice;

    if (rpsIntChoice === 0) {
        computerChoice = "rock";
    } else if (rpsIntChoice === 1) {
        computerChoice = "paper";
    } else if (rpsIntChoice === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() { // user input
    let humanChoice = prompt("Choose either 'rock', 'paper', or 'scissors'");
    if (humanChoice === null) {
        alert("Game canceled");
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) { //single round logic
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) { // if user chooses same object as computer
        console.log(`It's a tie! ${humanChoice} and ${computerChoice}.`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } 

    console.log(`You: ${humanScore}\nComputer: ${computerScore}`)
    }

    playRound(getHumanChoice(), getComputerChoice());
    if (getHumanChoice !== null) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (getHumanChoice !== null) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (getHumanChoice !== null) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (getHumanChoice !== null) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) { // results
        console.log("Congrats you won!\nThe game has ended...")
    } else if (humanScore < computerScore) {
        console.log("Computer won!\nThe game has ended...")
    } else if (humanScore === computerScore) {
        console.log("It's a tie!\nThe game has ended...")
    }
}

playGame();