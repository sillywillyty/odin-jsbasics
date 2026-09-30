function getHumanChoice(){
    let input = prompt("rock, paper or scissors: ");
    const humanChoice = input ? input.toLowerCase( : "");
    return humanChoice;
}

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3) + 1   ;
    let choice;
    if(num === 1){
        choice = "rock"
    }else if(num === 2){
        choice = "scissors"
    }else{
        choice = "paper"
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log('tie');
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('you win');
        humanScore++
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('you win');
        humanScore++
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('you win');
        humanScore++
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('you lost');
        computerScore++
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('you lost');
        computerScore++
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('you lost');
        computerScore++
    }
}

playRound(humanChoice, computerChoice);
