import { cons } from 'hexlet-pairs';
import play from '..';

const description = 'What is the result of the expression?';

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
      question = `${operands1} + ${operands2}`;
      correctAnswer = `${operands1 + operands2}`;
      break;
    case 2:
      question = `${operands1} - ${operands2}`;
      correctAnswer = `${operands1 - operands2}`;
      break;
    case 3:
      question = `${operands1} * ${operands2}`;
      correctAnswer = `${operands1 * operands2}`;
      break;
    // no default
  }

  return cons(description, cons(question, correctAnswer));
};

export default () => play(setGameData);
