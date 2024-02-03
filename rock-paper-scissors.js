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
let playerChoice = ""
function playRound (playerSelection){
    let result;
    let computer = getComputerChoice()
    if (playerSelection == "rock" && computer == "scissors"){
        result = "You won!"
        para.append(result)
        scoreBoard.appendChild(para)
        score['human'] += 1
    } else if(playerSelection == "paper" && computer == "rock") {
        result = "You won!"
        para.append(result)
        scoreBoard.appendChild(para)
        score['human'] += 1
    } else if (playerSelection == "scissors" && computer == "paper"){
        result = "You won!"
        para.append(result)
        scoreBoard.appendChild(para)
        score['human'] += 1

    } else if (playerSelection == computer){
        result = "That's a tie!"
        para.append(result)
        scoreBoard.appendChild(para)
    }
    else {
        result = "You lose!"
        para.append(result)
        scoreBoard.appendChild(para)
        score['computer'] += 1
    }
    
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorBtn = document.querySelector('#scissors')
const scoreBoard = document.querySelector('#scoreboard')
const para = document.createElement('p')


rockBtn.addEventListener('click', () => {
    playerChoice = "rock"
    playRound(playerChoice)
})
paperBtn.addEventListener('click', () => {
    playerChoice = "rock"
    playRound(playerChoice)
})
scissorBtn.addEventListener('click', () => {
    playerChoice = "rock"
    playRound(playerChoice)
})

