const getRandomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * ((Math.floor(max) - Math.ceil(min)) + 1)) +
  Math.ceil(min);

export default getRandomInt;
