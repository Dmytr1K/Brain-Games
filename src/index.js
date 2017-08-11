import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const getAnsver = message => readlineSync.question(message);
export const getUserName = () => getAnsver('\nMay I have your name? ');

export default () => {
  welcome();
  console.log(`Hello, ${getUserName()}!\n`);
};
