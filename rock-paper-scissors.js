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
    let para = document.createElement('p')
    let computer = getComputerChoice()
    if (playerSelection == computer){
        hands.textContent = `You chose ${playerSelection}, the machine chose ${computer}`
        result = "That's a tie!"
        para.textContent = result
        scoreBoard.insertBefore(para, scoreBoard.firstChild)
        
    } else if (
        (playerSelection == "rock" && computer == "scissors")||
        (playerSelection == "paper" && computer == "rock")||
        (playerSelection == "scissors" && computer == "paper")){
        hands.textContent = `You chose ${playerSelection}, the machine chose ${computer}`
        result = "You won!"
        para.textContent = result
        para.classList.toggle('win')
        scoreBoard.insertBefore(para, scoreBoard.firstChild)
        score['human'] += 1
        if (score['human'] == 5 || score['computer'] == 5){
            endGame()
        }
        showScore.innerText = `Human : ${score['human']} -- Computer : ${score['computer']}`
    }  else {
        hands.textContent = `You chose ${playerSelection}, the machine chose ${computer}`
        result = "You lose!"
        para.textContent = result
        para.classList.toggle('loss')
        scoreBoard.insertBefore(para, scoreBoard.firstChild)
        score['computer'] += 1
        if (score['human'] == 5 || score['computer'] == 5){
            endGame()
        }
        showScore.innerText = `Human : ${score['human']} -- Computer : ${score['computer']}`
    }

    
}

function endGame() {
    while (scoreBoard.firstChild){
        scoreBoard.removeChild(scoreBoard.firstChild)
    }
    if (score['human'] == 5){
        showResult.textContent = "You won the game!"

    } else {
        showResult.textContent = "You lose the game!"
    }

    rockBtn.style.display = 'none'
    paperBtn.style.display = 'none'
    scissorBtn.style.display = 'none'


}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorBtn = document.querySelector('#scissors')
const scoreBoard = document.querySelector('#scoreboard')
const showScore = document.querySelector('#score')
const showResult = document.querySelector('#result')
const hands = document.querySelector('#hands')


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

