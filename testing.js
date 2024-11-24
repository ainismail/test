const prompt = require('prompt-sync')({sigint: true});
let playAgain = 'yes';

while (playAgain.toLowerCase() === 'yes') {
  const name = prompt('What is your name?');
  console.log('Hey there ' + name);
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  const guess = prompt('Guess a number between 1 and 100: ');
  const guessNumber = Number(guess); // Convert the input to a number

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  if (guessNumber === numberInMind) {
    console.log('Congratulations! You guessed it right!');
    foundCorrectNumber = true;
  } else if (guessNumber < numberInMind) {
    console.log('Too low. Try again.');
  } else {
    console.log('Too high. Try again.');
  }
}
// Bonus Point: prompt user and provide option for user to start a new game after winning
playAgain = prompt('Do you want to play again? (yes/no): ');
}
