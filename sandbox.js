const roundNumber = prompt("This is a game of rock-paper-scissors. What is the winning number of rounds?");
// code below ensures that the value entered into the prompt button is coverted to a number
let number = parseInt(roundNumber);



const container = document.querySelector('#container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const pSelect = document.querySelector('.player-select');
const cSelect = document.querySelector('.computer-select');
const winSpan = document.querySelector('.win-counter');
const lossSpan = document.querySelector('.loss-counter');
const drawSpan = document.querySelector('.draw-counter')
const myAlert = document.querySelector('.score-alert');
const alertText = document.querySelector('p')


let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;





function clickScissors (){

pSelect.textContent = "SCISSORS"



}

function clickPaper (){

    pSelect.textContent = "PAPER";
   
    
  
}


function clickRock(){

pSelect.textContent = "ROCK";



}

// event that occurs 
rock.addEventListener('click', function(){

clickRock();
randomize();
gameRound();
winSpan.textContent = winCounter;
lossSpan.textContent = loseCounter;
drawSpan.textContent = drawCounter;
conditional();

});

//event that occurs when the scissors button is clicked
scissors.addEventListener('click', function(){

clickScissors();
randomize();
gameRound();
winSpan.textContent = winCounter;
lossSpan.textContent = loseCounter;
drawSpan.textContent = drawCounter;
conditional();
});


// event that occurs if the paper button is clicked
paper.addEventListener('click',function(){

clickPaper();
randomize();
gameRound();
winSpan.textContent = winCounter;
lossSpan.textContent = loseCounter;
drawSpan.textContent = drawCounter;
conditional();


} );
// below is the function that allows the computer pick from the option of rock paper scissirs
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

     function randomize(){
     let selectedParameter = compChoice(choice1, choice2, choice3);
     cSelect.textContent = selectedParameter;

     }

        // function below signify the rules of the game
     function gameRound(){

        if (pSelect.textContent === "ROCK" && cSelect.textContent === "ROCK"){


            console.log("It's a draw")
            drawCounter++;
            
            }
            else if (pSelect.textContent === "PAPER" && cSelect.textContent === "PAPER"){
            
                console.log("It's a draw");
                drawCounter++;
            
            }
            
            else if (pSelect.textContent === "SCISSORS" && cSelect.textContent === "SCISSORS") {
            
            console.log("It's a draw");
            drawCounter++
            
            }
            
            else if (pSelect.textContent === "ROCK" && cSelect.textContent === "PAPER")
            {
            console.log ("You lose! Paper beats rock");
            loseCounter++
            
            }
            else if (pSelect.textContent === "PAPER" && cSelect.textContent === "SCISSORS"){
            
            
            console.log("You lose! Scissors beats paper");
            loseCounter++;
            }
            else if (pSelect.textContent === "SCISSORS" && cSelect.textContent === "ROCK")
            {
            console.log("You lose! Rock beats Scissors");
            loseCounter++
            }
            else if (pSelect.textContent === "ROCK" && cSelect.textContent === "SCISSORS")
            {
            console.log("You win! Rock beats Scissors");
            winCounter++;
            }
            else if (pSelect.textContent === "PAPER" && cSelect.textContent === "ROCK")
            {
            console.log("You win! Paper beats Rock")
            winCounter++
            }
            else if (pSelect.textContent === "SCISSORS" && cSelect.textContent === "PAPER")
            {
            console.log("You Win! Scissors beats Paper")
            winCounter++
            }

     }
    
     //function below is to pop up the alert div signifying if you lost or won
     function conditional(){

if (winCounter == number){

  
  
    myAlert.classList.add('visible');
    myAlert.classList.remove('score-alert')
    alertText.textContent = "You won"
    

  
}
else if (loseCounter == number){
   
 
    myAlert.classList.add('visible');
    myAlert.classList.remove('score-alert')
alertText.textContent = "you lost"


   


}
else {
myAlert.classList.add('score-alert');
myAlert.classList.remove('visible');

}
     }

    


     