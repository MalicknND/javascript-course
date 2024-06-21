'use strict';
/*
const message = document.querySelector('.message');
message.textContent = '🎉 Correct Number!';
console.log(message);

const number = document.querySelector('.number');
number.textContent = 13;

const score = document.querySelector('.score');
score.textContent = 10;

const guess = document.querySelector('.guess');
guess.value = 23;
*/

// Handling Click Events

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
