function getComputerChoice () {
    let choice = getRandom()
    switch (choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function getPlayerChoice() {
    let choice = window.prompt("Rock, paper or scissors? Make your choice.")
    choice = choice.toLowerCase().trim();
    while (true) {
        if (choice == "rock" || choice == "scissors" || choice =="paper") {
            break;
        }
        choice = window.prompt("Please choose rock, paper or scissors.")
    }
    return choice;
}

function getRandom () {
    const floatRandom = Math.random()
    const difference = 2

    const random = Math.round(difference * floatRandom)
    const randomWithinRange = random + 1
    return randomWithinRange;
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase().trim();
    const computerChoice = computerSelection.toLowerCase();
    
    if (playerChoice == computerChoice) {
        console.log("It's a draw!")
        return "draw";
    } else {
        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissors":
                        console.log("You win! Rock beats scissors.")
                        return "win";
                    case "paper":
                        console.log("You lose! Paper beats rock.")
                        return "lose";              
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats rock.")
                        return "win";
                    case "scissors":
                        console.log("You lose! Scissors beat paper.")
                        return "lose";  
                }
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        console.log("You lose! Rock beats scissors.")
                        return "lose";  
                    case "paper":
                        console.log("You win! Scissors beats paper.")
                        return "win";
                }
        }
    }
}

//function game() {
  //  let playerScore = 0;
    //let computerScore = 0;
    //let result;
    //for (let i = 0; i < 5; i++) {
    //    result = playRound(, getComputerChoice());
    //}
//}