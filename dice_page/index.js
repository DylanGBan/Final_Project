// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

let counter = 0;

let history = [];


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance

    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";

      history[counter] = "die 1: " + die1 + ", die 2: " + die2 + ", Sum: " + dieSum + ", " + outcome +  " -5";

      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";

      history[counter] = "die 1: " + die1 + ", die 2: " + die2 + ", Sum: " + dieSum + ", " + outcome + " +5";

      balance += 5;
    } else {

      outcome = "Its a draw, nobody wins or loses.";

      history[counter] = "die 1: " + die1 + ", die 2: " + die2 + ", Sum: " + dieSum + ", " + outcome + " +0";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;

    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;

    counter++;

}

function letsPlay(){

  rollDice();
  whoWon();

}


function loopPlay(){

  let numRolls = document.getElementById("numOfRolls").value; 

  document.getElementById("rollHistory").innerHTML = "";

    for (let j = 0; j < numRolls; j++) {
      
      letsPlay();

    }

    for(let i = 0; i < history.length; i++){

      document.getElementById("rollHistory").innerHTML += history[i] + " <br>";
    }

    document.getElementById("balance").innerHTML ="Final Balance: "+ balance;

    history = [];

    counter = 0;

    balance = 0;

  document.getElementById("numOfRolls").value = "";
  
}