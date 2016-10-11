var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var reset = document.querySelector('.reset');

var randomNumber = Math.round(Math.random() * 100);

guess.addEventListener('click', function() {
  var userInput = getNumber();
  errorMessage();
  result();
  var message = compareGuessRandom(userInput, randomNumber);
  var messageDiv = document.querySelector('.message-div');
  messageDiv.innerHTML = message;
    document.querySelector('.last-guess').innerText = userInput;
    document.querySelector('.last-guess-message').innerText = "Your last guess was";
});

function getNumber () {
return parseInt((document.querySelector('.user-data').value),10);
}

function errorMessage () {
  var input = getNumber();
  return isNaN(input) || (input < 1 && input > 100);
}

function result() {
  var input = getNumber();
  if (input < randomNumber ) {
  return "That is too low";
} else if (input > randomNumber ) {
  return "That is too high";
} else {
  return "perfect";
}}

function compareGuessRandom () {
  if (errorMessage()){
    return "Yo, enter a number!";
  } else {
    result();
  }}

clear.addEventListener('click', function() {
  document.querySelector('.user-data').value = "";
});

clear.addEventListener('click', function() {
  document.querySelector('.user-data').value = "";
});



// if (typeof userInput !== "number") {
//   document.querySelector('.last-guess').innerText = "";
//   document.querySelector('.last-guess-message').innerText = "";
// } else {
