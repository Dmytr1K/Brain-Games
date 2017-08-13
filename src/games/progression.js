import { cons } from 'hexlet-pairs';
import getRandomInt from '../util';
import play from '..';

const description = 'What number is missing in this progression?';

const progressionLength = 10;
const minStep = 1;
const maxStep = 10;
const minPosition = 1;
const maxPosition = progressionLength;

const getProgression = (initial, length, step) => {
  const progressionArray = [];
  let current = initial;
  progressionArray.push(current);
  while (progressionArray.length < length) {
    current += step;
    progressionArray.push(current);
  }
  return progressionArray;
};

const setGameData = () => {
  const initialMember = getRandomInt();
  const progressionStep = getRandomInt(minStep, maxStep);
  const progression =
    getProgression(initialMember, progressionLength, progressionStep);

  const position = getRandomInt(minPosition, maxPosition);
  const correctAnswer = `${progression[position]}`;
  progression[position] = '..';
  const question = `${progression}`;

  return cons(question, correctAnswer);
};

export default () => play(description, setGameData);
