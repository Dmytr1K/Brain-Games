import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'What number is missing in this progression?';
const progressionLength = 10;
const minRandomNumber = 1;
const maxRandomNumber = progressionLength;

const getProgression = (initial, length) => {
  const progressionArray = [];
  let current = initial;
  progressionArray.push(current);
  while (progressionArray.length < length) {
    progressionArray.push(current + 1);
    current += 1;
  }
  return progressionArray;
};

const setGameData = () => {
  const initialMember = getRandomInt();
  const progression = getProgression(initialMember, progressionLength);

  const position = getRandomInt(minRandomNumber, maxRandomNumber);
  const correctAnswer = `${progression[position]}`;
  progression[position] = '..';
  const question = `${progression}`;

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
