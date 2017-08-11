import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${readlineSync.question('\nMay I have your name? ')}!\n`);
};
