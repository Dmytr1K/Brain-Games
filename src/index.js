import readlineSync from 'readline-sync'; // eslint-disable-line
import { car, cdr } from 'hexlet-pairs'; // eslint-disable-line

const stagesCount = 3;

const passStage = (remainingStages, setGameData) => {
  if (remainingStages === 0) { return true; }

  const stageData = setGameData();
  const question = car(stageData);
  const correctAnswer = cdr(stageData);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. ` +
      `Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return passStage(remainingStages - 1, setGameData);
};

export default (description, setGameData) => {
  console.log('Welcome to the Brain Games!');

  console.log(description);

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
