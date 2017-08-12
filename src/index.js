import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (setGameData) => {
  console.log('Welcome to the Brain Games!');

  if (setGameData) {
    const description = car(setGameData());
    console.log(description);
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (setGameData) {
    const passStage = (remainingStages) => {
      if (remainingStages === 0) { return true; }

      const gameSet = cdr(setGameData());
      const question = car(gameSet);
      const correctAnswer = cdr(gameSet);

      console.log(question);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
      }

      return passStage(remainingStages - 1);
    };

    const stagesCount = 3;
    if (passStage(stagesCount)) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }
};
