import readlineSync from 'readline-sync';

const minNumber = 0;
const maxNumber = 100;
const stagesCount = 3;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const convert = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

const passStage = (remainingStages) => {
  if (remainingStages === 0) {
    return true;
  }

  const randomNumber = getRandomInt(minNumber, maxNumber);
  console.log(`Question: ${randomNumber}`);

  const correctAnswer = convert(isEven(randomNumber));

  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }

  return passStage(remainingStages - 1);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  if (passStage(stagesCount)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
