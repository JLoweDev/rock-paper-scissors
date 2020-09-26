const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const infoBox = document.getElementById('infoBox');
const p = document.createElement('p');

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    p.innerText = playRound(playerSelection, computerSelection);
    infoBox.appendChild(p);
})

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    p.innerText = playRound(playerSelection, computerSelection);
    infoBox.appendChild(p);
})

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    p.innerText = playRound(playerSelection, computerSelection);
    infoBox.appendChild(p);
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
        return 'You Win! Paper beats Rock!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose. Scissors beat Paper.'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Draw. Both sheets of paper drift away.'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beat Paper!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose. Rock beats Scissors.'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Draw. The Scissors harmlessly click clack.'
    }
    else { return 'It went wrong'
}
}


function game() {
    let playerSelection = playerSelect()
    console.log(playerSelection)
    let computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    let playerSelection2 = playerSelect()
    console.log(playerSelection2)
    let computerSelection2 = computerPlay()
    console.log(computerSelection2)
    console.log(playRound(playerSelection2, computerSelection2))
    let playerSelection3 = playerSelect()
    console.log(playerSelection3)
    let computerSelection3 = computerPlay()
    console.log(computerSelection3)
    console.log(playRound(playerSelection3, computerSelection3))
    let playerSelection4 = playerSelect()
    console.log(playerSelection4)
    let computerSelection4 = computerPlay()
    console.log(computerSelection4)
    console.log(playRound(playerSelection4, computerSelection4))
    let playerSelection5 = playerSelect()
    console.log(playerSelection5)
    let computerSelection5 = computerPlay()
    console.log(computerSelection5)
    console.log(playRound(playerSelection5, computerSelection5))
}

