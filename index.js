var dice=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var n1= Math.floor(Math.random()*(dice.length));
var n2= Math.floor(Math.random()*(dice.length));

function diceRollLeft(){
    var imgSelecLeft= dice[n1];
    var diceImgLeft = document.querySelectorAll("img")[0].setAttribute("src",imgSelecLeft);
}

function diceRollRight(){
    var imgSelecRight= dice[n2];
    var diceImgRight = document.querySelectorAll("img")[1].setAttribute("src",imgSelecRight);

}

diceRollLeft();
diceRollRight();

var diceLeft = diceRollLeft();
var diceRight = diceRollRight();

function playerWin(){
    if (n1 > n2){
        return document.querySelector("h1").innerHTML="Tasha Won";
    } else if (n1<n2) {
        return document.querySelector("h1").innerHTML="Oyane Won";
    } else {
        return document.querySelector("h1").innerHTML="Draw";
    }
}

playerWin();
