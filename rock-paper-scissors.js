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


function playRound (playerSelection, computerSelection){
    let result;
    playerSelection.toLowerCase
    if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You won!"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        result = "You won!"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You won!"
    } else if (playerSelection == computerSelection){
        result = "That's a tie!"
    }
    else {
        result = "You lose!"
    }
    return result
}

for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Welcome to the game. What is your choice?")
    console.log(playRound(playerSelection, getComputerChoice()))
}
