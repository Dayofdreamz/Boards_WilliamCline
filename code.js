function playCraps() {
    // This function simulates a game of Craps
    
    // Generate random numbers between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    
    // Calculate the sum of the dice
    const sum = die1 + die2;
    
    // Display the dice rolls
    let output = `Dice Roll: ${die1}, ${die2}<br>`;
    
    // Check game conditions
    if (sum === 7 || sum === 11) {
        output += "CRAPS – You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        output += "You won!";
    } else {
        output += "You pushed!";
    }
    
    // Display the game result
    document.getElementById("result").innerHTML = output;
}

document.getElementById("playButton").addEventListener("click", playCraps);