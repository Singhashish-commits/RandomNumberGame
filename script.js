//   console.log("connected");
let arr = [];
let playGame = true;
let counter =1;
 let random = Math.floor(Math.random()*100)+1;
 const number = document.querySelector("input");
const guessList = document.querySelector(".guesses");
const remList = document.querySelector(".remaining");
let button = document.querySelector("button");
const lowHigh = document.querySelector(".lowHigh");


if(playGame){
    button.addEventListener("click",function(){
        const guess = parseInt(number.value);
        validateGuess(guess);
    })

}

function validateGuess(guess){
    if(isNaN(guess)) {
        alert(" enter a valid number ");
    }
    else if(guess <0 || guess >100){
        alert("please enter between 1 to 100");
    }
    else{
        
       arr.push(guess);
       if(counter>=10){
        displayGuess(guess);
        displayMessage(`Game Over! The random number was ${random}.`);
        endGame()
       }
       else{
           displayGuess(guess);
           checkGuess(guess);
       }
    }

}
function checkGuess(guess){
     if(guess === random){
        displayMessage("you Guessed it Right !!");
        endGame();
     }
    else if(guess<random){
        displayMessage("Message is too low !!");
     }
     else if (guess>random){
        displayMessage("number is too High !!")
     }
}
function displayGuess(guess){
    number.value=``;
 guessList.innerHTML+= `${guess} `; 
 counter++;
 remList.innerHTML=`${11-counter}`;
}
function displayMessage(message){
    lowHigh.innerHTML=`<h2>${message}</h2>`

}

// function NewGame(){

// }
function endGame(){
  number.value=``;
  button.disabled =true;
  playGame=false;
  setTimeout(()=>{
    const PlayAgain = window.confirm("Game over Want to play   Again !!");
    if(PlayAgain){
        location.reload;
    }
  },200);
}
