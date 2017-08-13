import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (divider) => {
    if (divider === 1) {
      return true;
    }
    if (number % divider === 0) {
      return false;
    }
    return iter(divider - 1);
  };

  return iter(number - 1);
};

const setGameData = () => {
  const question = getRandomInt();

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
