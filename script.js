//Defining secret (random) number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Creating function to avoid repeated code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Reading value of input and evaluating input
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //When there's no input
  if (!guess) {
    displayMessage('⛔ No number provided!');
    //When player wins the game
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#5EC25E';
    document.getElementById('btnCheck').setAttribute('disabled', 'disabled');
    document.querySelector('.number').style.width = '30rem';
    //Checking and storing highscore results
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 Too high! Try again'
          : '📉 Too low! Try again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 You ran out of chances! Press "again" to restart');
      document.querySelector('body').style.backgroundColor = '#be110a';
      document.querySelector('.score').textContent = 0;
      document.getElementById('btnCheck').setAttribute('disabled', 'disabled');
      document.getElementById('btnCheck').textContent = 'Button disabled';
    }
  }
});
//Again button functionality - Restoring parameters to play again.
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('#btnCheck').removeAttribute('disabled');
  document.querySelector('#btnCheck').textContent = 'Check!';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#14161a';
  document.querySelector('.number').style.width = '15rem';
});
