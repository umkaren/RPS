let playerScore = 0;
let computerScore = 0;

function play(playerMove) {
    let hand = ["rock", "paper", "scissors"];
    let computerMove = hand[parseInt(Math.random() * 10) % 3];

    let result;
    if (playerMove == computerMove) {
        result = "It's a tie!";
    } else if (playerMove == "rock" && computerMove == "scissors" || 
               playerMove == "paper" && computerMove == "rock" ||
               playerMove == "scissors" && computerMove == "paper") {
        playerScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "NPC wins!";
    }

    document.getElementById("result").innerHTML = `You chose ${playerMove}, NPC chose ${computerMove}. ${result}`;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}