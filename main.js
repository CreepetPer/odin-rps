function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
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

function getHumanChoice() {
    let humanChoice = prompt("Choose either 'rock', 'paper', or 'scissors'")
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;