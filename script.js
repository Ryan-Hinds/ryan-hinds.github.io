"use strict";

// Selecting Elements
const player0Elem = document.querySelector(".player--0");
const player1Elem = document.querySelector(".player--1");
const score0Elem = document.querySelector("#score--0");
const player0Score = document.getElementById("current--0");
const score1Elem = document.getElementById("score--1");
const player1Score = document.getElementById("current--1");

// Dice and Button Elements
const diceElem = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


// Starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add("hidden");

function switchPlayer()
{
    // Switch to next player.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle("player--active");
    player1Elem.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener("click", function()
{
    // 1: Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2: Display dice
    diceElem.classList.remove("hidden");
    diceElem.src = `dice-${dice}.png`;
    // 3: Check for roll 1: if true, switch to next player
    if (dice !== 1)
    {
        // Add dice number to current score.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else
    {
        switchPlayer();
    }
});

btnHold.addEventListener("click", holdButtonFunctionality);

function holdButtonFunctionality()
{
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100)
    {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    }
    switchPlayer();
}
