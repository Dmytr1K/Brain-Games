import { cons } from 'hexlet-pairs'; // eslint-disable-line
import play from '..';
import { getRandomInt } from '../util';


const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const setGameData = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(description, cons(question, correctAnswer));
};

export default () => play(setGameData);
