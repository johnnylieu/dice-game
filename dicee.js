var randomNum1 = Math.floor(Math.random() * (7-1) + 1);
var randomNum2 = Math.floor(Math.random() * (7-1) + 1);

document.querySelector(".img1").setAttribute("src", `./images/dice${randomNum1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNum2}.png`);
console.log(`Player1: ${randomNum1}, Player2: ${randomNum2}`);

if (randomNum1 > randomNum2) {
    document.querySelector(".container h1").textContent = `🚩 Player 1 Wins!`;
} else if (randomNum1 < randomNum2) {
    document.querySelector(".container h1").textContent = `Player 2 Wins! 🚩`;
} else {
    document.querySelector(".container h1").textContent = `DRAW!`;
}