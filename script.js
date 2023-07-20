function getRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const bet = parseInt(document.getElementById("betInput").value);

    if (isNaN(guess) || isNaN(bet)) {
        alert("Please enter valid numbers for your guess and bet.");
        return;
    }

    if (guess < 1 || guess > 6) {
        alert("Please enter a valid guess between 1 and 6.");
        return;
    }

    const diceRoll = getRandomNumber(1, 6);
    const resultElement = document.getElementById("result");
    const winnerElement = document.getElementById("winner");

    resultElement.textContent = `The dice rolled: ${diceRoll}`;

    if (guess === diceRoll) {
        const winnings = bet * 5; // Assuming payout of 5x the bet for simplicity
        winnerElement.textContent = `Congratulations! You won ${winnings} coins.`;
    } else {
        winnerElement.textContent = "Sorry, you didn't win this time.";
    }
}
