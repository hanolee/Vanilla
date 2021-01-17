var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;

console.log(randomNumber1, randomNumber2);

var src1 = "./images/dice" +randomNumber1 + ".png";
var src2 = "./images/dice" +randomNumber2 + ".png";

//"./images/dice1.png"

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

var message = "";

if (randomNumber1>randomNumber2) {
    message = "Player 1 Win!";
    console.log(message);
}

if (randomNumber1 === randomNumber2) {
    message = "Draw";
    console.log(message);
}

if(randomNumber1<randomNumber2){
    message = "Player 2 Win!";
    console.log(message);
}

document.querySelector("h1").innerHTML = message;
