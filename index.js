var firstPlayerName = () => {
    var player1 = prompt("What is player 1's name?")
    if (player1.trim() === "") {
        alert("Please enter a valid name!");
        firstPlayerName();
    }
    return player1;
}

var secondPlayerName = () => {
    var player2 = prompt("What is player 2's name?")
    if (player2.trim() === "") {
        alert("Please enter a valid name!");
        secondPlayerName();
        alert("First player to 7 points wins the game! Loser buy drinks!")
    } return player2;
}

var player1Points = 0;
var player2Points = 0;

var rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * (7-1) + 1);
    var randomNum2 = Math.floor(Math.random() * (7-1) + 1);

    document.querySelector("#player1").textContent = `${player1}`;
    document.querySelector("#player2").textContent = `${player2}`;

    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNum1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNum2}.png`);
    console.log(`${player1}: ${randomNum1}, ${player2}: ${randomNum2}`);

    if (randomNum1 > randomNum2) {
        player1Points++;
        document.querySelector(".container h1").textContent = `🚩 ${player1} scores!`;
        if (player1Points >= 7) {
            document.querySelector(".hidden").classList.toggle("hidden");
            document.querySelector(".container h1").textContent = `${player1} Wins! 🚩`;
            document.querySelector(".container h1").style.color = `yellow`;
        }
    } else if (randomNum1 < randomNum2) {
        player2Points++;
        document.querySelector(".container h1").textContent = `${player2} scores! 🚩`;
        if (player2Points >= 7) {
            document.querySelector(".hidden").classList.toggle("hidden");
            document.querySelector(".container h1").textContent = `${player2} Wins! 🚩`;
            document.querySelector(".container h1").style.color = `yellow`;
        }
    }
    else {
        document.querySelector(".container h1").textContent = `DRAW!`;
    } setScore();
}

var setScore = () => {
    if (player1Points >= 7) {
        document.querySelector("#player1Points").textContent = `${player1Points} points`;
        document.querySelector("#player1Points").style.color = `yellow`;
        document.querySelector("#player2Points").textContent = `${player2Points} points`;
    } else if (player2Points >= 7) {
        if (player1Points >= 7) {
            document.querySelector("#player1Points").textContent = `${player1Points} points`;
            document.querySelector("#player2Points").textContent = `${player2Points} points`;
            document.querySelector("#player2Points").style.color = `yellow`;
        }
    } else {
        document.querySelector("#player1Points").textContent = `${player1Points} points`;
        document.querySelector("#player2Points").textContent = `${player2Points} points`;
    }
}

var player1 = firstPlayerName();
var player2 = secondPlayerName();
rollDice();