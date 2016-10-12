
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.resetButton');

var randoNum = Math.floor(Math.random()* 100)+1;

guessButton.addEventListener('click', function(){
numberDisplay();
mainFunc();

});

clearButton.addEventListener('click', function() {
document.querySelector('.user-data').value = "";
});

resetButton.addEventListener('click', function() {
location.reload();
});

function mainFunc() {
if (minMax()) {
  compareNumbers();
} else {
   displayError();
}
}


function compareNumbers() {
if (userGuess()>randoNum) {
tooHigh();
} else if(userGuess()<randoNum){
tooLow();
} else {
correct();
}
}


function userGuess() {
return parseInt(document.querySelector('.user-data').value);
}
function minMax() {
  return userGuess()>=1 && userGuess()<=100;
}
function tooHigh() {
document.querySelector('.result-text').innerText = "Too high!";
}
function tooLow() {
document.querySelector(".result-text").innerText = "Too low!";
}
function correct() {
document.querySelector(".result-text").innerText = "Wow! You got it!";
}
function numberDisplay() {
document.querySelector('.your-last-guess').innerText = "Your last guess";
document.querySelector('.last-guess').innerText = userGuess();
}
function displayError() {
document.querySelector('.result-text').innerText = "";
document.querySelector('.last-guess').innerText = "";
document.querySelector('.your-last-guess').innerText = "Please enter a number 1-100!";
}
