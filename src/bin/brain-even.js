#!/usr/bin/env node

import { welcome, getAnsver, getUserName } from '..';

const gameTerms = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const maxAttempts = 3;

let attempt;

welcome();
console.log(gameTerms);
const userName = getUserName();

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const isEven = number => number % 2 === 0;

export const humanLogic = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

for (attempt = 1; attempt <= maxAttempts; attempt += 1) {
  const randomNumber = getRandomInt(minNumber, maxNumber);

  console.log(`Question: ${randomNumber}`);
  const answer = getAnsver('Your answer: ');
  const question = humanLogic(isEven(randomNumber));

  if (question === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (attempt === 3) {
  console.log(`Congratulations, ${userName}!`);
}
