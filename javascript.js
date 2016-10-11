var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('reset');

var randoNum = Math.floor(Math.random()* 100)+1;

guessButton.addEventListener('click', function(){
  compareNumbers();
  
});


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
function tooHigh() {
document.querySelector('.your-last-guess').innerText = "Too high!";
}
function tooLow() {
document.querySelector(".your-last-guess").innerText = "Too low!";
}
function correct() {
document.querySelector(".your-last-guess").innerText = "Wow! You got it!";
}
