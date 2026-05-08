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

let humanScore = 0;
let computerScore = 0;

const resultComment = document.querySelector(".comment");
const humanResult = document.querySelector(".humanResult")
const computerResult = document.querySelector(".computerResult")

function playRound(humanChoice, computerChoice) { //single round logic
humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) { // if user chooses same object as computer
        console.log(`It's a tie! ${humanChoice} and ${computerChoice}.`);
        resultComment.textContent = `It's a tie! ${humanChoice} and ${computerChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        resultComment.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        resultComment.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        resultComment.textContent = "You win! Paper beats Rock.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        resultComment.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        resultComment.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        resultComment.textContent = "You win! Scissors beats Paper.";
        humanScore++;
    }

    console.log(`You: ${humanScore}\nComputer: ${computerScore}`)
    humanResult.textContent = `You: ${humanScore}`;
    computerResult.textContent = `Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) { // winner check block
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        if (humanScore > computerScore) {
            resultComment.textContent = "Congrats you won! The game has now ended.";
        } else if (humanScore < computerScore) {
            resultComment.textContent = "Computer won! The game has now ended.";
        } else if (humanScore === computerScore) {
            resultComment.textContent = "It's a tie! The game has now ended.";
        }
    }
}

// event listeners for each rps button
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

btnRock.onclick = (e) => {
    playRound("rock", getComputerChoice());
}

btnPaper.onclick = (e) => {
    playRound("paper", getComputerChoice());
}

btnScissors.onclick = (e) => {
    playRound("scissors", getComputerChoice());
}