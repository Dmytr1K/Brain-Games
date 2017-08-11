import readlineSync from 'readline-sync';

const minNumber = 0;
const maxNumber = 100;
const numberOfStages = 3;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const humanLogic = (boolean) => {
  if (boolean) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');

  let stage;
  for (stage = 1; stage <= numberOfStages; stage += 1) {
    const randomNumber = getRandomInt(minNumber, maxNumber);

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const question = humanLogic(isEven(randomNumber));

    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (stage > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
