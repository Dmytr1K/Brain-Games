import { cons } from 'hexlet-pairs';
import play from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minNumber = 0;
const maxNumber = 100;
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const setGameData = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(description, cons(question, correctAnswer));
};

export default () => play(setGameData);
