import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const setGameData = () => {
  const question = getRandomInt();

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
