var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1*6) + 1;
var randomDiceimg1 = "images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceimg1);

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6) + 1;
var randomDiceimg2 = "images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceimg2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🥇Player 1 wins!";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🥇";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

