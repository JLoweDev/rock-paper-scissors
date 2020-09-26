const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const infoBox = document.getElementById('infoBox');
const p = document.createElement('p');
const playerBox = document.getElementById('playerBox');
const computerBox = document.getElementById('computerBox');
const winnerBox = document.getElementById('winnerBox');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    p.innerText = playRound(playerSelection, computerSelection);
    infoBox.appendChild(p);
    let winVal = result.includes('You win!');
    let lossValue = result.includes('You lose.')
    if (winVal == true) {
        playerScore++;
        playerBox.innerText = String(playerScore);
    } else if (lossValue == true) {
        computerScore++;
        computerBox.innerText = String(computerScore);
    }
    if (playerScore == 5) {
        winnerBox.innerText = 'Player Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    } else if (computerScore == 5) {
        winnerBox.innerText = 'Computer Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    }
})

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    p.innerText = result;
    infoBox.appendChild(p);
    let winVal = result.includes('You win!');
    let lossValue = result.includes('You lose.')
    if (winVal == true) {
        playerScore++;
        playerBox.innerText = String(playerScore);
    } else if (lossValue == true) {
        computerScore++;
        computerBox.innerText = String(computerScore);
    }
    if (playerScore == 5) {
        winnerBox.innerText = 'Player Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    } else if (computerScore == 5) {
        winnerBox.innerText = 'Computer Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    }
})

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    p.innerText = playRound(playerSelection, computerSelection);
    infoBox.appendChild(p);
    let winVal = result.includes('You win!');
    let lossValue = result.includes('You lose.')
    if (winVal == true) {
        playerScore++;
        playerBox.innerText = String(playerScore);
    } else if (lossValue == true) {
        computerScore++;
        computerBox.innerText = String(computerScore);
    }
    if (playerScore == 5) {
        winnerBox.innerText = 'Player Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    } else if (computerScore == 5) {
        winnerBox.innerText = 'Computer Wins!';
        playerScore = 0;
        computerScore = 0;
        playerBox.innerText = String(playerScore);
        computerBox.innerText = String(computerScore);
    }
})

function computerPlay() {
    let myArray = ['rock', 'paper', 'scissors']
    let computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose. Paper beats Rock.'
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Draw. Two Rocks collide.'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose. Scissors beat Paper.'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Draw. Both sheets of paper drift away.'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beat Paper!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose. Rock beats Scissors.'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Draw. The Scissors harmlessly click clack.'
    }
    else { return 'It went wrong'
}
}