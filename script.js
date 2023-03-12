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

function getRandom () {
    const floatRandom = Math.random()
    const difference = 2

    const random = Math.round(difference * floatRandom)
    const randomWithinRange = random + 1
    return randomWithinRange;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        results.innerHTML = `Computer chose ${computerChoice}.<br>
        It's a draw!`
        return "draw";
    } else {
        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissors":
                        playerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br> 
                        You win! Rock beats scissors.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`                        
                        return "win";
                    case "paper":
                        computerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose... Paper beats rock.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`  
                        return "lose";              
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        playerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You win! Paper beats rock.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`  
                        return "win";
                    case "scissors":
                        computerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose... Scissors beat paper.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`  
                        return "lose";  
                }
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        computerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You lose... Rock beats scissors.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`  
                        return "lose";  
                    case "paper":
                        playerScore++;
                        results.innerHTML = `Computer chose ${computerChoice}.<br>
                        You win! Scissors beats paper.<br>
                        Player: ${playerScore}<br>
                        Computer: ${computerScore}`  
                        return "win";
                }
        }
    }
}

function game(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
    if (playerScore >= 5) {
        results.innerHTML += `<br>You win ${playerScore} to ${computerScore}!`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        results.innerHTML += `<br>lose ${playerScore} to ${computerScore}...`
        playerScore = 0;
        computerScore = 0;
    }
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".choice");
const results = document.querySelector(".results");
buttons.forEach(btn => {
    btn.addEventListener('click', game);
});
