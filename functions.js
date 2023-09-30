var options = ["rock","paper","scissors"];    
function getComputerChoice(){
    return options [Math.floor(Math.random()*options.length)];
}

var computerSelection = getComputerChoice();
var playerSelection = prompt("write rock, paper or scissors")

function playRound(playerSelection,computerSelection){

    if(playerSelection===computerSelection){
        return "It's a tie";
    }
    else if ((playerSelection==="rock" && computerSelection==="scissors")||(playerSelection==="scissors" && computerSelection==="paper")||(playerSelection==="paper" && computerSelection==="rock")){
        return "you win!";
    }
    else{
        return "you lose!"
    }
}

var totalGames = 5;

function game(){

}


// function play(playerSelection,computerSelection){
//     if((playerSelection=="rock" && computerSelection=="scissors")||(playerSelection == "scissors" && computerSelection=="paper" )||(playerSelection=="paper" && computerSelection=="rock")){
//         return "you win!"
//     }
//     else if((playerSelection=="rock" && computerSelection == "paper")||(playerSelection=="scissors" && computerSelection=="rock")||(playerSelection=="paper" && computerSelection=="scissors")){
//         return "you lose!"
//     }
//     else if
// }
