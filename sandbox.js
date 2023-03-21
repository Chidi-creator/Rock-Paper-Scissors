
let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;



for (let i = 1; i <=5; i++){
    
const playerSelection = prompt("Let's Play Rock Paper Scissors!");

let playerUpper = playerSelection.toUpperCase();
console.log("You pick " + playerUpper);

if ( playerUpper == ""){

    alert("Please input your pick")
}

else{


    

function compChoice(param1, param2, param3){

let gameStrings = [param1, param2, param3];
// this line of code below tells the computer to pick randomly out of the parameters in the game strings variable
let randomChoice = Math.floor(Math.random() * gameStrings.length);

let selectedChoice = gameStrings[randomChoice];


return selectedChoice;

 }

 // we equate some parameters to the choices in the in the game so that the computer can pick from them

 let choice1 = "ROCK";
 let choice2 = "PAPER";
 let choice3 = "SCISSORS";

 // We parse the computer choices set in the parameter to the function
 let selectedParameter = compChoice(choice1, choice2, choice3);

 console.log("Computer picks " + selectedParameter);

 
function gameRound() {



if (playerUpper === "ROCK" && selectedParameter === "ROCK"){


console.log("It's a draw")
drawCounter++;

}
else if (playerUpper === "PAPER" && selectedParameter === "PAPER"){

    console.log("It's a draw");
    drawCounter++;

}

else if (playerUpper === "SCISSORS" && selectedParameter === "SCISSORS") {

console.log("It's a draw");
drawCounter++

}

else if (playerUpper === "ROCK" && selectedParameter === "PAPER")
{
console.log ("You lose! Paper beats rock");
loseCounter++

}
else if (playerUpper === "PAPER" && selectedParameter === "SCISSORS"){


console.log("You lose! Scissors beats paper");
loseCounter++;
}
else if (playerUpper === "SCISSORS" && selectedParameter === "ROCK")
{
console.log("You lose! Rock beats Scissors");
loseCounter++
}
else if (playerUpper === "ROCK" && selectedParameter === "SCISSORS")
{
console.log("You win! Rock beats Scissors");
winCounter++;
}
else if (playerUpper === "PAPER" && selectedParameter === "ROCK")
{
console.log("You win! Paper beats Rock")
winCounter++
}
else if (playerUpper === "SCISSORS" && selectedParameter === "PAPER")
{
console.log("You Win! Scissors beats Paper")
winCounter++
}
else{

    console.log("Wrong Parameters")
}



}







}




gameRound();


}
 
if (loseCounter > winCounter && winCounter > drawCounter){

    console.log("YOU LOSE THIS ROUND!");
}
else if (winCounter > drawCounter && winCounter > loseCounter){

    console.log("YOU WIN THIS ROUND!");
}
else if ( drawCounter > winCounter && drawCounter > loseCounter){
    alert("The draws for this round is more than the wins and losses,refresh the page ");
}


console.log(" Scores for this round: " + "Wins: " + winCounter + " Draws: " + drawCounter + " Losses: " + loseCounter);
