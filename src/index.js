import readlineSync from 'readline-sync';

export const helloUser = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};
