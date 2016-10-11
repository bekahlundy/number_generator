//var to access the guess, clear, and reset
var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var reset = document.querySelector('.reset');

//creates a random number between 1-100 and stores it as randomNumber
var randomNumber = Math.random() * 100;


//trigger on click for the guess button - discuss.
guess.addEventListener('click', function() {
  //var to access the user-data input field
  var userInput = parseInt((document.querySelector('.user-data').value),10);
  var message = compareGuessRandom(userInput, randomNumber);
debugger;

  var messageDiv = document.querySelector('.message-div').innerText(message);
  // messageDiv.innerHTML(message);
});




function compareGuessRandom (input,  num ) {
  if (input < num ) {
     return "That is too low";
  } else if (input > num ) {
    return "That is too high";
  } else if (input === num ) {
    return "perfect";
  } else {
    return "What?!";
  }
}




// function compareGuessRandom (userInput, randomNumber) {
//   if (userInput<randomNumber) {
//      return "That is too low";
//   } else if (userInput>randomNumber) {
//     message = ""
//   } else if (userInput===randomNumber) {
//     return
//   } else {
//     return
//   }
// }

// document.querySelector('.last-guess').innerText = Math.round(randomNumber);
//replace Math.round(randomNumber) with getGuessNumber

//this converts the userInput into an integer.  the second argument, "10", ensures the decimal numeral system
// var getGuessNumber = parseInt(userInput.value, 10);
// }
