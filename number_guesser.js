var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var reset = document.querySelector('.reset');

var userInput = document.querySelector('.user-data');

guess.addEventListener('click', function() {
  getGuessNumber();
});

function getGuessNumber () {
  return parseInt(userInput.value);
}

var randomNumber = Math.random() * 100;

function compareGuessRandom () {
  if (getGuessNumber<randomNumber) {
   output.innerHTML="That is too low";
  } else if (getGuessNumber>randomNumber) {
    return
  } else if (getGuessNumber===randomNumber) {
    return
  } else {
    return
  }
}


//create random number
//compare random number to userInput
