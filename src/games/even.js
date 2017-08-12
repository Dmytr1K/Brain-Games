
import { cons } from 'hexlet-pairs';
import play from '..';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const isCorrect = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const setGameData = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const minNumber = 0;
  const maxNumber = 100;
  const randomNumber = getRandomInt(minNumber, maxNumber);

  const question = `Question: ${randomNumber}`;
  const correctAnswer = isCorrect(isEven(randomNumber));
  const gameSet = cons(question, correctAnswer);

  return cons(description, gameSet);
};

export default () => play(setGameData);
