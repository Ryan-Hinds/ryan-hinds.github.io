
const reloadButton = document.querySelector("#again");
const checkButton = document.querySelector(".check");
const numberDisplay = document.querySelector(".number");
const scoreDisplay = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highScore = 0;
let message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", guessCheck);
scoreDisplay.textContent = score;
document.querySelector(".highscore").textContent = highScore;
document.querySelector("#again").addEventListener("click", reloadGame);

console.log(`Secret Number is ${secretNumber}`);

function guessCheck()
{
    const guess = Number(document.querySelector(".guess").value);

    if (!guess)
    {
        message.textContent = "\u{26D4} Nothing Entered, try again.";
    }
    else if (guess < secretNumber)
    {
        guessScoreAboveOne();
    }
    else if ( guess > secretNumber)
    {
        guessScoreAboveOne();
    }
    else if (guess === secretNumber)
    {
        numberDisplay.style.fontSize = "9rem";
        numberDisplay.textContent = secretNumber;
        message.textContent = "\u{1F389} You did it!";
        numberDisplay.style.backgroundColor = "green";
        numberDisplay.style.width = "20rem";

        if (score > highScore)
        {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    }

    function guessScoreAboveOne() 
    {
        const guess = Number(document.querySelector(".guess").value);
        if (score > 1) 
        {
            numberDisplay.textContent = guess;
            numberDisplay.style.backgroundColor = "red";
            score--;
            scoreDisplay.textContent = score;
            
            if (guess < secretNumber)
            {
                message.textContent = "\u{2B06} Too low, guess higher."
            }
            else if (guess > secret)
            {
                message.textContent = "\u{2B07} Too high, guess lower."
            }
        }
        else 
        {
            score = 0;
            message.textContent = "\u{1F923} Game Over!";
            scoreDisplay.textContent = score;
            numberDisplay.textContent = secretNumber;
        }
    }
}

function reloadGame()
{
    if (reloadButton)
    {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 15;
        message.textContent = "Start guessing...";
        numberDisplay.textContent = "?";
        scoreDisplay.textContent = score;
        numberDisplay.style.backgroundColor = "#eee";
        document.querySelector(".guess").value = "";
    }
}
