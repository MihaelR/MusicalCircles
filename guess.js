//create secret number
var number = 4;

//ask user for guess
var guess=prompt("guess a number!!");

//check guess
if (Number(guess)===number) {alert("you got it right");}
if (guess>number) {alert("number is smallaer");}
if (guess<number) {alert("bigger");}