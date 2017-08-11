import readlineSync from 'readline-sync';

const minNumber = 0;
const maxNumber = 100;
const stagesCount = 3;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const humanLogic = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const passStage = (remainingStages, userName) => {
  if (remainingStages === 0) {
    console.log(`Congratulations, ${userName}!`);
    return 0;
  }

  const randomNumber = getRandomInt(minNumber, maxNumber);
  console.log(`Question: ${randomNumber}`);

  const correctAnswer = humanLogic(isEven(randomNumber));

  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return 1;
  }

  return passStage(remainingStages - 1, userName);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('\nMay I have your name? ');
  passStage(stagesCount, name);
};
