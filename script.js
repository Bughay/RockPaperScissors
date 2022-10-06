
let computerScore = 0
let playerScore = 0

function playRound() {
    
    let playerChoice = (Math.floor(Math.random() * 3) + 1) //prompt("choose Rock Paper Scissors").toLowerCase()
    let computerChoice = (Math.floor(Math.random() * 3) + 1)
     
    
    if (computerChoice === 1) {
        computerChoice = "rock"
    }
    else if (computerChoice === 2) {
        computerChoice = "scissors"
    }
    else if (computerChoice === 3) {
        computerChoice = "paper"
    };

    if (playerChoice === 1) {
        playerChoice = "rock"
    }
    else if (playerChoice === 2) {
        playerChoice = "scissors"
    }
    else if (playerChoice === 3) {
        playerChoice = "paper"
    };

    if (playerChoice === computerChoice) {
        
        return (`Player has selected ${playerChoice} and the computer has selected ${computerChoice}
        the result is a DRAW `)
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return (`Player has selected ${playerChoice} and the computer has selected ${computerChoice}
        the winner is The COMPUTER!`)
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return (`Player has selected ${playerChoice} and the computer has selected ${computerChoice}
        the winner is The COMPUTER!`)
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return (`Player has selected ${playerChoice} and the computer has selected ${computerChoice}
        the winner is The COMPUTER!`)
    }
    else {
        (playerChoice === "rock" && computerChoice === "paper") 
            playerScore++
            return (`Player has selected ${playerChoice} and the computer has selected ${computerChoice}
            the winner is The Player!`)
        }

        
}

function gameScoreAnnouncement() {
    if (computerScore > playerScore) {
        console.log(`                    Computer is the WINNER!!!!!`)
    }
    else if (computerScore < playerScore) {
        console.log(`                    Player is the WINNER!!!!!!`)
    }
    else {
        console.log(`its a draw`)
    }
}





function game(){
    

    for(let i = 0; i < 5; ++i) 
{

    console.log(playRound())
    console.log("Player score is: " + playerScore)
    console.log("computerScore is :" + computerScore)
}

}



game()
gameScoreAnnouncement()






