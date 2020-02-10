function computerPlay(){
    let selection = Math.floor(Math.random() * 3)
    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function playerPlay(){
    let selection = prompt("Chose: rock, paper, scissors")
    return selection.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    // 0 -- rock    1 -- paper    2 -- scissors
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (playerSelection === "rock" || computerSelection === "paper") {
        return "Lost"
    } else if (playerSelection === "rock" || computerSelection === "scissors") {
        return "Win"
    } else if (playerSelection === "paper" || computerSelection === "rock") {
        return "Win"
    } else if (playerSelection === "paper" || computerSelection === "scissors") {
        return "Lost"
    } else if (playerSelection === "scissors" || computerSelection === "rock") {
        return "Lost"
    } else if (playerSelection === "scissors" || computerSelection === "paper") {
        return "Win"
    }
}

function game() {
    let i = 0;
    let playerPoints = 0;
    let computerPoints = 0;
    while (i < 5) {
        let round = playRound(computerPlay(), playerPlay());
        switch (round) {
            case "Lost":
                computerPoints ++;
                console.log("You Lost");
                break;
            case "Win":
                playerPoints ++;
                console.log("You Win");
                break;
            case "Draw":
                console.log("It's a Tie");
                break;
        }
        console.log("Player: " + playerPoints + " Computer: " + computerPoints)
        i++;

    }
    return "Player: " + playerPoints + " Computer: " + computerPoints
}

console.log(game());