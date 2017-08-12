import { cons } from 'hexlet-pairs';
import play from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minNumber = 0;
const maxNumber = 99;
// The maximum and the minimum is inclusive
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * ((Math.floor(max) - Math.ceil(min)) + 1)) +
  Math.ceil(min);

const setGameData = () => {
  const operands1 = getRandomInt(minNumber, maxNumber);
  const operands2 = getRandomInt(minNumber, maxNumber);

  let question;
  let correctAnswer;
  const operatorNumber = getRandomInt(1, 3);
  switch (operatorNumber) {
    case 1:
      question = `Question: ${operands1} + ${operands2}`;
      correctAnswer = `${operands1 + operands2}`;
      break;
    case 2:
      question = `Question: ${operands1} - ${operands2}`;
      correctAnswer = `${operands1 - operands2}`;
      break;
    case 3:
      question = `Question: ${operands1} * ${operands2}`;
      correctAnswer = `${operands1 * operands2}`;
      break;
    // no default
  }

  const gameSet = cons(question, correctAnswer);
  return cons(description, gameSet);
};

export default () => play(setGameData);
