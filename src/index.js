import readlineSync from 'readline-sync'; // eslint-disable-line
import { car, cdr } from 'hexlet-pairs'; // eslint-disable-line

const stagesCount = 3;

const minRandomNumber = 0;
const maxRandomNumber = 100;
// The maximum and the minimum is inclusive
export const getRandomInt = (min = minRandomNumber, max = maxRandomNumber) =>
  Math.floor(Math.random() * ((Math.floor(max) - Math.ceil(min)) + 1)) +
  Math.ceil(min);

const passStage = (remainingStages, setGameData) => {
  if (remainingStages === 0) { return true; }

  const stageData = cdr(setGameData());
  const question = car(stageData);
  const correctAnswer = cdr(stageData);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return passStage(remainingStages - 1, setGameData);
};

export default (setGameData) => {
  console.log('Welcome to the Brain Games!');

  if (setGameData) {
    const description = car(setGameData());
    console.log(description);
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (setGameData) {
    if (passStage(stagesCount, setGameData)) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }
};
