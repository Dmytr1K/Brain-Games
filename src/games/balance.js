import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'Balance the given number.';
const minRandomNumber = 10;
const maxRandomNumber = 10000;

const balance = (number) => {
  const arrayOfDigits = String(number).split('').map(num => Number(num));
  const first = 0;
  const last = arrayOfDigits.length - 1;

  arrayOfDigits.sort();
  while (arrayOfDigits[last] - arrayOfDigits[first] > 1) {
    arrayOfDigits[last] -= 1;
    arrayOfDigits[first] += 1;
    arrayOfDigits.sort();
  }

  const resultNumber = Number(arrayOfDigits.join(''));
  return resultNumber;
};

const setGameData = () => {
  const question = getRandomInt(minRandomNumber, maxRandomNumber);
  const correctAnswer = `${balance(question)}`;

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
