'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1')
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0.textContent = '0';
score1.textContent = '0';
dice.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', () => {
  const roll = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${roll}.png`;
  if (roll !== 1) {
    currentScore += roll;
    current0.textContent = currentScore;
  }
})