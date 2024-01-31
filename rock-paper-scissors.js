let greeting = "Hello"

// Rock: 1
// Paper: 2
// Scissors: 3

function getComputerChoice () {
    let max = 4;
    let min = 1;
    let computer = Math.floor(Math.random()*(max-min)+min)
    switch (computer){
        case 1:
            return "rock"
                    case 2:
            return "paper"
                    case 3:
            return "scissors"
                }
}

let score = {
    'computer' : 0,
    'human' : 0
}

function playRound (playerSelection, computerSelection){
    let result;
    playerSelection.toLowerCase
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You won!"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        result = "You won!"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You won!"
        score['human'] += 1
    } else if (playerSelection == computerSelection){
        result = "That's a tie!"
    }
    else {
        result = "You lose!"
        score['computer'] += 1
    }
    return result
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorBtn = document.querySelector('#scissors')
const scoreBoard = document.querySelector('#scoreboard')

rockBtn.addEventListener('click', playRound('rock', getComputerChoice()))
paperBtn.addEventListener('click', playRound('paper', getComputerChoice()))
scissorBtn.addEventListener('click', playRound('scissors', getComputerChoice()))

