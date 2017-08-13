import { cons } from 'hexlet-pairs'; // eslint-disable-line
import play from '..';
import { getRandomInt, gcd } from '../util';

const description = 'Find the greatest common divisor of given numbers.';

const setGameData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
