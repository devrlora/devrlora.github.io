/****************** Welcome screen using 'alert' to explain rules of game ****************/
function greeting() {
    alert("Welcome to Simple 21! Which ever player gets a number closer to 21 wins the round. Best 3 out of 5 rounds wins. To start =>click OK<= then " +
        document.getElementById("startButton").innerText);
};
/* Declare random number,end game message, number of rounds won variables */
let i = 0;
let gameOver = "Game Over";
let playerWon = 0;
let compWon = 0;

/***************************** Click start button executes block code:  ***************************/

function newNum() {

    /* Generate players' random numbers bet. 1-21 */

    let play1 = Math.floor(Math.random() * (21) + 1);
    console.log(play1);
    let play2 = Math.floor(Math.random() * (21) + 1);
    console.log(play2);

    /* Assign the generated number variables to display into HTML when start button is pressed */

    document.getElementById("numLeft").innerHTML = play1;
    document.getElementById("numRight").innerHTML = play2;

    firstNum = play1;
    secNum = play2;

    /* Assign variable (i) as a counter for round number */

    i++;
    outCome();
    console.log(i);
    document.getElementById("numRound").innerHTML = i;

    /* Limit game to 5 rounds, display message when game has ended,
    assign number of rounds won for each player, hide play button */

    if (i == 5) {
        document.getElementById("endTheGame").innerHTML = "Game Over";
        clickPlay.style.display = "none";
    };
    if (play1 > play2) {
        playerWon++
        document.getElementById("displayCount1").innerHTML = playerWon;
    } else if (play1 < play2) {
        compWon++
        document.getElementById("displayCount2").innerHTML = compWon;
    }
    if (i == 5) {
        document.getElementById("playerName").innerHTML = "";
        clickPlay.style.display = "none";
    }
};

/* Conditional based on comparing higher number, displaying message if player wins, 
/* loses or draws upon click of start button to html */

function outCome() {
    let iWon = "You Win!";
    let iLost = "Dealer Wins!";
    let noWin = "Draw!";

    if (firstNum > secNum) {
        document.getElementById("playerName").innerHTML = iWon;
    } else if (firstNum < secNum) {
        document.getElementById("playerName").innerHTML = iLost;
    } else if (firstNum === secNum) {
        document.getElementById("playerName").innerHTML = noWin;
    } else {
        console.log("Error");
    }
};