import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const iter = (a, b) => {
    if (a > b) {
      return iter(a - b, b);
    } else if (a < b) {
      return iter(b - a, a);
    }
    return a;
  };
  return iter(number1, number2);
};

const setGameData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
