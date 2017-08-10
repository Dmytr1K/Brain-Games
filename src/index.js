import readlineSync from 'readline-sync';

export const getUserName = () =>
  readlineSync.question('\nMay I have your name? ');

export default () =>
  console.log(`Hello, ${getUserName()}!\n`);
