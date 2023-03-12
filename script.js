function getComputerChoice () {
    let choice = getRandom()
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

/*
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
*/

function getRandom () {
    const floatRandom = Math.random()
    const difference = 2

    const random = Math.round(difference * floatRandom)
    const randomWithinRange = random + 1
    return randomWithinRange;
}

function playRound(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        results.innerHTML = `Computer chose ${computerChoice}.<br>
        It's a draw!`
        return "draw";
    } else {
        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissors":
                        results.innerHTML = `Computer chose ${computerChoice}.<br> 
                        You win! Rock beats scissors.`
                        return "win";
                    case "paper":
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose! Paper beats rock.`
                        return "lose";              
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You win! Paper beats rock.`
                        return "win";
                    case "scissors":
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose! Scissors beat paper.`
                        return "lose";  
                }
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose! Rock beats scissors.`
                        return "lose";  
                    case "paper":
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        "You win! Scissors beats paper.`
                        return "win";
                }
        }
    }
}
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        if (result == "win") {
            playerScore++;
        } else if (result == "lose") {
            computerScore++;
        } else {

        }        
    }
    if (playerScore > computerScore) {
        console.log("You win " + playerScore + " to " + computerScore)
    } else if (computerScore > playerScore) {
        console.log("You lose " + playerScore + " to " + computerScore)
    } else {
        console.log("It's a draw")
    }
}
*/
const buttons = document.querySelectorAll(".choice");
const results = document.querySelector(".results");
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});
